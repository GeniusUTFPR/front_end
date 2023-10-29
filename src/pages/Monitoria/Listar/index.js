import "./style.css";

import { MinhasMonitorias } from "../../../components";

import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const ListarMonitorias = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="listar-monitoria-container">
        <div className="title-wrapper">
          <h1>
            Minhas <span className="monitoria">monitorias</span>
          </h1>
        </div>
        <MinhasMonitorias />
        <div>
          <Link to="/monitoria/cadastrar">
            <button className="botaoCriarMonitoria">
              Cadastrar nova monitoria
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
