import "./style.css";

import { Header } from "../../../../components/Header";
import { MonitorPaluno } from "../../../../components/MonitorPaluno";

export const MonitoriaPaluno = () => {
  return (
    <div>
      <Header />
      <div className="monitoria-paluno">
        <MonitorPaluno />
      </div>
    </div>
  );
};
