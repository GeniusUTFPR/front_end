import Cookies from "js-cookie";
import { getUserIdFromToken } from "../../../../services/auth";
import { useNavigate } from "react-router-dom";

import { PalunoForm } from "../../../../components/PalunoForm";
import api from "../../../../services";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

import { MINHAS_MONITORIAS } from "../../../../routes";

export const CadastrarPaluno = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");
  const id = getUserIdFromToken(accessToken);

  const initialValues = {
    curso_id: 1,
    tipo_monitoria: 3,
    horarios: "",
    descricao: "",
    disciplina: 0,
  };

  const handleSubmit = async (values) => {
    try {
      await api.post("monitorias/", {
        tipo_monitoria: 3,
        usuario: id,
        horarios: values.horarios,
        descricao: values.descricao,
        disciplina: values.disciplina,
      });

      navigate(MINHAS_MONITORIAS);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div style={{ margin: "12% 0" }}>
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
              width: "60%",
            }}
          >
            <PalunoForm
              title1="Crie um "
              title2="PAluno"
              initialValues={initialValues}
              onCancel={() => {
                navigate(MINHAS_MONITORIAS);
              }}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
