import { Link } from 'react-router-dom';
import './style.css';
export const MonitorCard = ({ monitoria }) => {
  const usuario = monitoria.usuario;
  let tipoUsuario = '';

  if (usuario && usuario.tipo_usuario) {
    switch (usuario.tipo_usuario) {
      case 1:
        tipoUsuario = 'Estudante';
        break;
      case 2:
        tipoUsuario = 'Monitor Pago';
        break;
      case 3:
        tipoUsuario = 'Monitor';
        break;
      case 4:
        tipoUsuario = 'Professor';
        break;
      default:
        tipoUsuario = 'Tipo de Usuário Desconhecido';
        break;
    }
  }

  return (
    <div>
      <div className='monitor-oficial-container'>
        <div className='foto'>
          <hr></hr>
        </div>

        <div className='dados'>
          <div className='nome'>{monitoria.usuario.nome}</div>
          <div className='tipo'>
            <p>{tipoUsuario}</p>
          </div>
        </div>
        <div>
          <Link to={`/monitoria/${monitoria.id}`}>
            <button>Horarios de monitoria</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
