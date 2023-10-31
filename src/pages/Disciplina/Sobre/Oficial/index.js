import "./style.css";

import { Header } from "../../../../components/Header";
import { MonitorOficial } from "../../../../components/MonitorOficial";

export const MonitoriaOficial = () => {
  return (
    <div>
      <Header />
      <div className="monitoria-oficial">
        <MonitorOficial />
      </div>
    </div>
  );
};
