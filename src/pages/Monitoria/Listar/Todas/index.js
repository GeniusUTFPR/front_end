import "./style.css";
import { Header } from "../../../../components/Header";
import { MonitorExterno } from "../../../../components/MonitorExterno";

export const ListarTodasMonitorias = () => {
  return (
    <div>
      <Header />
      <div className="todas-container">
        <div className="title">
          <p>Monitores Externos</p>
        </div>
        <div className="monitores">
          <MonitorExterno />
          <MonitorExterno />
          <MonitorExterno />
          <MonitorExterno />
          <MonitorExterno />
          <MonitorExterno />
          <MonitorExterno />
          <MonitorExterno />
        </div>
      </div>
    </div>
  );
};