import "./style.css";
import { Link } from "react-router-dom";

import { Header } from "../../../../components/Header";
import { MonitorPaluno } from "../../../../components/MonitorPaluno";
import { MonitorOficial } from "../../../../components/MonitorOficial";

export const MonitoriaPaluno = () => {
  return (
    <div>
      <Header />
      <div className="monitoria-paluno">
        <div className="title">
          <p>Algoritimos</p>
        </div>
        <div className="monitoria">
          <MonitorPaluno />
          <MonitorOficial />
        </div>
        <div className="monitoria-externa">
          <div className="text">
            <p>
              Monitorias <br></br>
              <span>Externas</span>
            </p>
          </div>
          <div className="botao">
            <Link to="/monitoria/listar/todas">
              <button>Veja mais</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
