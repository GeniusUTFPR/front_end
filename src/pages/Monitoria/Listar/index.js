import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getUserIdFromToken } from '../../../services/auth';
import { Link } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { api } from '../../../services';

import './style.css';
import { DeleteModal, Header, Footer } from '../../../components';
import { EditarMonitoria } from '../Editar';

export const MinhasMonitorias = () => {
  const accessToken = Cookies.get('accessToken');
  const id = getUserIdFromToken(accessToken);
  const [monitoria, setMonitoria] = useState([]);
  const [monitorias, setMonitorias] = useState({});

  async function getMonitorias(id) {
    const { data } = await api.get(`monitorias/?usuario__id=${id}`);
    setMonitorias(data);
  }

  useEffect(() => {
    async function fetch() {
      try {
        getMonitorias(id);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  const [edition, setEdition] = useState(false);
  const [deletion, setDeletion] = useState(false);

  const handleEditionOpen = () => setEdition(true);
  const handleEditionClose = () => setEdition(false);
  const handleDeletionOpen = () => setDeletion(true);
  const handleDeletionClose = () => setDeletion(false);

  const handleEditionClick = item => {
    setMonitoria(item);
    handleEditionOpen();
  };

  const handleDeleteClick = item => {
    setMonitoria(item);
    handleDeletionOpen();
  };

  const handleDelete = async ({ id }) => {
    try {
      await api.delete(`monitorias/${id}`);
      alert('Monitoria deletada com sucesso!');
      handleDeletionClose();
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const quantidadeDeMonitorias = monitorias.length;

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='listar-minhas-monitorias-container'>
        <EditarMonitoria
          open={edition}
          onClose={handleEditionClose}
          monitoria={monitoria}
        />
        <DeleteModal
          open={deletion}
          item={monitoria}
          onClose={handleDeletionClose}
          onDelete={handleDelete}
        />
        <div className='listar-minhas-monitorias-titulo'>
          Minhas <span className='monitoria'>&nbsp;monitorias</span>
        </div>
        <div className='listar-minhas-monitorias-lista'>
          {quantidadeDeMonitorias > 0 ? (
            monitorias.map(item => (
              <div className='minha-monitoria-wrapper'>
                <div className='minha-monitoria-titulo'>{item.disciplina.nome}</div>
                <div className='minha-monitoria-valor'>
                  <p className='minha-monitoria-valor-valor'>R${item.valor_por_hora}</p>
                  <p className='minha-monitoria-valor-sub'>por hora</p>
                </div>
                <div className='minha-monitoria-horario'>
                  <h1>Horários</h1>
                  <p>{item.horarios}</p>
                </div>
                <div className='minha-monitoria-botao'>
                  <div className='minha-monitoria-botao-editar'>
                    <EditIcon onClick={() => handleEditionClick(item)} />
                  </div>
                  <div className='minha-monitoria-botao-deletar'>
                    <DeleteIcon onClick={() => handleDeleteClick(item)}/>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='listar-minhas-monitorias-nenhuma'>Nenhuma monitoria encontrada.</p>
          )}
        </div>
        <div className='listar-minhas-monitorias-button'>
          <Link to='/monitoria/cadastrar'>
            <button>Cadastrar monitoria</button>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
