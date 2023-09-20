import "./minhasMonitorias.css";

import { useState } from "react";
import Header from "../../../components/Header";
//import Footer from "../../../../components/Footer/footer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { DeleteModal } from "../../../components/DeleteModal";
import { api } from "../../../services";

import { EditarMonitoria } from "../Editar";

export const MinhasMonitorias = () => {
  const [monitoria, setMonitoria] = useState([]);
  const [monitoriaList, setMonitoriaList] = useState({});
  const [quantidadeMonitorias, setQuantidadeMonitorias] = useState({});

  async function getMonitorias(id) {    
    const { data } = await api.get(`monitoria/verificarLimite/${id}`);
    setQuantidadeMonitorias(data);
  }

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

  const handleDelete = async ({ id, name }) => {
    try {
      await api.delete(`monitoria/${id}`);
      alert("Monitoria " + name + " deletada com sucesso!");
      handleDeletionClose();
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="div-master">
        <EditarMonitoria
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
        <div className="minhas-monitorias-container">Minhas Monitorias</div>
        <div className="minhas-monitorias-lista">
          {monitoriaList.length > 0 ? (
            monitoriaList.map((item) => (
              <div className="minhas-monitorias-card">
                <div className="minhas-monitorias-card-titulo">
                  {item.disciplina.nome}
                </div>
                <div className="minhas-monitorias-card-info">
                  <p>R$ {item.valor_por_hora}</p>
                  <br></br>
                  <p>Segunda: {item.segunda}</p>
                  <p>Terça: {item.terca}</p>
                  <p>Quarta: {item.quarta}</p>
                  <p>Quinta: {item.quinta}</p>
                  <p>Sexta: {item.sexta}</p>
                  <p>Sábado: {item.sabado}</p>
                </div>
                <div className="minhas-monitorias-icons">
                  <div className="minhas-monitorias-editar">
                    <EditIcon
                      style={{ color: "#00ff7e" }}
                      size="large"
                      onClick={() => handleEditionClick(item)}
                    />
                  </div>
                  <div className="minhas-monitorias-deletar">
                    <DeleteIcon
                      style={{ color: "#00ff7e" }}
                      size="large"
                      onClick={() => handleDeleteClick(item)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="minhas-monitorias-aviso">
              Nenhuma monitoria registrada.
            </div>
          )}
        </div>
        {quantidadeMonitorias < 3 ? (
          <div className="minhas-monitorias-final">
            <Link to="/criar-monitoria">
              <div className="botaoCriarMonitoria">
                Cadastre mais monitorias!
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <footer />
      </div>
    </div>
  );
};
