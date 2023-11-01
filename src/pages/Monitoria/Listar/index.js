import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getUserIdFromToken } from '../../../services/auth';

import { MinhasMonitorias } from '../../../components';
import { Link } from 'react-router-dom';

import { api } from '../../../services';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import './style.css';

export const ListarMonitorias = () => {
  const accessToken = Cookies.get('accessToken');
  const id = getUserIdFromToken(accessToken);
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

  const quantidadeDeMonitorias = monitorias.length;

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='listar-minhas-monitorias-container'>
        <div className='listar-minhas-monitorias-titulo'>
          Minhas <span className='monitoria'>&nbsp;monitorias</span>
        </div>
        {quantidadeDeMonitorias > 0 ? (
          <MinhasMonitorias />
        ) : (
          <p>Nenhuma monitoria encontrada.</p>
        )
        }
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