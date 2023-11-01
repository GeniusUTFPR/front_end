import "./style.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const PalunoForm = () => {
  return (
    <div className="listar-paluno-wrapper">
      <div className="listar-paluno-titulo">Algoritmos</div>
      <div className="listar-paluno-horario">
        <h1>Horários</h1>
        <p>Segunda, Quarta, Quinta, Sexta</p>
      </div>
      <div className="listar-paluno-botao">
        <div className="listar-paluno-botao-editar">
          <EditIcon />
        </div>
        <div className="listar-paluno-botao-deletar">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
