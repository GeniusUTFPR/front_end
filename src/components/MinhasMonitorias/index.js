import './style.css';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const MinhasMonitorias = () => {
  return (
    <div className='minha-monitoria-wrapper'>
      <div className='minha-monitoria-titulo'>Algoritmos</div>
      <div className='minha-monitoria-horario'>
        <h1>Horários</h1>
        <p>Segunda, Quarta, Quinta, Sexta</p>
      </div>
      <div className='minha-monitoria-valor'>
        <h1>Valor</h1>
        <p>R$ 50,00</p>
      </div>
      <div className='minha-monitoria-botao'>
        <div className='minha-monitoria-botao-editar'>
          <EditIcon />
        </div>
        <div className='minha-monitoria-botao-deletar'>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
