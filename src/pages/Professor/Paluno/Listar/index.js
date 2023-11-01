import "./style.css";

import { PalunoForm } from "../../../../components";
import { Link } from "react-router-dom";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export const ListarPaluno = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="listar-meu-paluno-container">
        <div className="listar-meu-paluno-titulo">
          Meu <span className="monitoria">&nbsp;PAluno</span>
        </div>
        <PalunoForm />
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
