import "./style.css";

export const MonitorPaluno = () => {
  return (
    <div>
      <div className="monitor-paluno-container">
        
          <div className="foto"><hr></hr></div>
        
        <div className="dados">
          <div className="nome"><p>Fulano da Silva de Oliveira</p></div>
          <div className="email"><p>fulanosilva@gmail.com</p></div>
          <div className="numero"><p>(44) 99999-9999</p></div>
        </div>
        <div className="aluno"><p>Aluno</p></div>
        <div className="descricao">
          <p>Estou disponível todas as terças e quintas, das 15:00 as 18:00. Favor marcar com antecedência.</p>
        </div>
      </div>
    </div>
  );
};
