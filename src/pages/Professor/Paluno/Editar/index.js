import React, { useEffect, useState } from "react";
import { PalunoForm } from "../../../../components/PalunoForm";
import { api } from "../../../../services";
import { Modal } from "@mui/material";

export const EditarPaluno = ({ open, onClose, monitoria }) => {
  const [cursoId, setCursoId] = useState({});
  const [disciplinaId, setDisciplinaId] = useState({});
  const [dadosCarregados, setDadosCarregados] = useState(false);

  useEffect(() => {
    if (monitoria) {
      async function fetchCursoId() {
        try {
          const disciplina_id = monitoria.disciplina && monitoria.disciplina.id;

          if (disciplina_id) {
            const response = await api.get(`/disciplinas/${disciplina_id}`);
            const curso_id_disciplina =
              response.data.curso && response.data.curso.id;

            setCursoId(curso_id_disciplina);
            setDisciplinaId(disciplina_id);
            setDadosCarregados(true);
          }
        } catch (error) {
          console.log(error);
        }
      }

      fetchCursoId();
    }
  }, [monitoria]);

  const initialValues = {
    curso_id: cursoId,
    disciplina: disciplinaId,
    horarios: monitoria.horarios,
    descricao: monitoria.descricao,
  };

  const handleEdit = async (values) => {
    const id = monitoria.id;
    try {
      await api.patch(`monitorias/${id}/`, {
        disciplina: parseInt(values.disciplina),
        horarios: values.horarios,
        descricao: values.descricao,
      });
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
      style={{ border: "100vh solid rgba(0, 0, 0, 0.8)" }}
    >
      {dadosCarregados ? (
        <div
          className="monitoria-form-container"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="monitoria-form-wrapper"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#FFFFFF",

              backgroundColor: "#121212",
              borderRadius: "2rem",
              padding: "2rem",
              width: "250%",
            }}
          >
            <PalunoForm
              title1="Edite seu "
              title2="PAluno"
              initialValues={initialValues}
              onCancel={onClose}
              onSubmit={handleEdit}
            />
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </Modal>
  );
};
