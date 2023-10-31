import "./style.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const MinhasMonitorias = () => {
  return (
    <div className="monitoria-wrapper">
      <div className="title-disciplina">Algoritmos</div>
      <div className="title-horario">
        <h2>Horários</h2>
        <p>Segunda, Quarta, Quinta, Sexta</p>
      </div>
      <div className="title-valor">
        <h2>Valor</h2>
        <p>R$ 50,00</p>
      </div>
      <div className="botao-wrapper">
        <div className="botaoEditar">
          <EditIcon />
        </div>
        <div className="botaoDeletar">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};