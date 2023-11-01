import "./style.css";

export const MonitorOficial = () => {
  return (
    <div>
      <div className="monitor-oficial-container">
        <div className="foto">
          <hr></hr>
        </div>

        <div className="dados">
          <div className="nome">Fulano de Tal</div>
          <div className="tipo">
            <p>Professor</p>
          </div>
        </div>
        <button>Horarios de monitoria</button>
      </div>
    </div>
  );
};
