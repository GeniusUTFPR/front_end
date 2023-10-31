import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getUserIdFromToken } from '../../../services/auth';
import api from '../../../services';

import './style.css';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ReactComponent as FotoPadrao } from '../../../assets/FotoPerfil.svg';


export const Perfil = () => {
  const accessToken = Cookies.get('accessToken');
  const id = getUserIdFromToken(accessToken);
  const [informacoesPerfil, setInformacoesPerfil] = useState({});

  async function getUsuario(id) {
    const { data } = await api.get(`usuarios/${id}`);
    setInformacoesPerfil(data);
  }

  useEffect(() => {
    async function fetch() {
      try {
        getUsuario(id);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='perfil-container'>
        <div className='perfil-card'>
          <div className='perfil-card-esquerda'>
            <div className='perfil-card-esquerda-foto'>
              <FotoPadrao className='perfil-card-esquerda-foto-padrao' />
            </div>
            <div className='perfil-card-esquerda-informacoes'>
              <p>{informacoesPerfil && informacoesPerfil.tipo_usuario ? informacoesPerfil.tipo_usuario.nome : ''}</p>
            </div>
            <div className='perfil-card-esquerda-informacoes-sub'>
              <p>{informacoesPerfil.registro}</p>
            </div>
          </div>
          <div className='perfil-card-direita'>
            <div className='perfil-card-direita-campos'>
              <label for='nome'>Nome:</label>
              <input
                type='text'
                id='curso'
                value={informacoesPerfil.nome}
                disabled
              />
            </div>
            <div className='perfil-card-direita-campos'>
              <label for='email'>E-mail:</label>
              <input
                type='text'
                id='curso'
                value={informacoesPerfil.email}
                disabled
              />
            </div>
            <div className='perfil-card-direita-campos'>
              <label for='celular'>Celular:</label>
              <input
                type='text'
                id='celular'
                value={informacoesPerfil.celular || 'Não cadastrado'}
                disabled
              />
            </div>
            <div className='perfil-card-direita-campos'>
              <label for='curso'>Curso:</label>
              <input
                type='text'
                id='curso'
                value={informacoesPerfil && informacoesPerfil.curso ? informacoesPerfil.curso.nome : ''}
                disabled
              />
            </div>
            <div className='perfil-card-direita-botoes'>
              <Link to='/perfil/editar'>
                <button>Editar perfil</button>
              </Link>
              <Link to='/'>
                <button>Seja Mentor</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
