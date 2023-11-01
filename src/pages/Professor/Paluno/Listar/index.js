import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUserIdFromToken } from "../../../../services/auth";
import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { api } from "../../../../services";

import "./style.css";
import { Header, Footer } from "../../../../components";
import { DeleteModal } from "../../../../components/DeleteModal";
import { EditarPaluno } from "../../Paluno/Editar";

export const ListarPaluno = () => {
  const accessToken = Cookies.get("accessToken");
  const id = getUserIdFromToken(accessToken);
  const [monitoria, setMonitoria] = useState([]);
  const [monitorias, setMonitorias] = useState({});

  async function getMonitorias(id) {
    const { data } = await api.get(`monitorias/?usuario__id=${id}`);
    setMonitorias(data);
  }

  useEffect(() => {
    async function fetch() {
      try {
        getMonitorias(id);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  const [edition, setEdition] = useState(false);
  const [deletion, setDeletion] = useState(false);

  const handleEditionOpen = () => setEdition(true);
  const handleEditionClose = () => setEdition(false);
  const handleDeletionOpen = () => setDeletion(true);
  const handleDeletionClose = () => setDeletion(false);

  const handleEditionClick = (item) => {
    setMonitoria(item);
    handleEditionOpen();
  };

  const handleDeleteClick = (item) => {
    setMonitoria(item);
    handleDeletionOpen();
  };

  const handleDelete = async ({ id }) => {
    try {
      await api.delete(`monitorias/${id}`);
      alert("PAluno deletado com sucesso!");
      handleDeletionClose();
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const quantidadeDeMonitorias = monitorias.length;

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="listar-meu-paluno-container">
        <EditarPaluno
          open={edition}
          onClose={handleEditionClose}
          monitoria={monitoria}
        />
        <DeleteModal
          open={deletion}
          item={monitoria}
          onClose={handleDeletionClose}
          onDelete={handleDelete}
        />
        <div className="listar-meu-paluno-titulo">
          Meu <span className="paluno">&nbsp;PAluno</span>
        </div>
        <div className="listar-meu-paluno-lista">
          {quantidadeDeMonitorias > 0 ? (
            monitorias.map((item) => (
              <div className="meu-paluno-wrapper">
                <div className="meu-paluno-titulo">{item.disciplina.nome}</div>
                <div className="meu-paluno-horario">
                  <h1>Horários</h1>
                  <p>{item.horarios}</p>
                </div>
                <div className="meu-paluno-botao">
                  <div className="meu-paluno-botao-editar">
                    <EditIcon onClick={() => handleEditionClick(item)} />
                  </div>
                  <div className="meu-paluno-botao-deletar">
                    <DeleteIcon onClick={() => handleDeleteClick(item)} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="listar-meu-paluno-nenhuma">
              Nenhum PAluno encontrado.
            </p>
          )}
        </div>
        <div className="listar-meu-paluno-button">
          <Link to="/paluno/cadastrar">
            <button>Cadastrar PAluno</button>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
