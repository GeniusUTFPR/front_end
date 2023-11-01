import './style.css';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../../services';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const ListarDisciplinas = () => {
  const [informacoesDisciplinas, setInformacoesDisciplinas] = useState({});
  const { curso_id } = useParams();

  async function getDisciplinas(curso_id) {
    const { data } = await api.get(`disciplinas/?curso__id=${curso_id}`);
    setInformacoesDisciplinas(data);
  }

  useEffect(() => {
    async function fetchThesis() {
      try {
        await getDisciplinas(curso_id);
      } catch (error) { }
    }
    fetchThesis();
  }, [curso_id]);

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='listar-disciplinas-container'>
        <div className='listar-disciplinas-header'>
          <div className='listar-disciplinas-header-esquerda'>
            <div className='listar-disciplinas-header-esquerda-linha'> </div>
          </div>
          <div className='listar-disciplinas-header-direita'>
            <p>Ciências da Computação</p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '30px',
            margin: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <div class='listar-disciplinas-lista'>
            {informacoesDisciplinas.length > 0
              ? informacoesDisciplinas.map(item => (
                <Link to={`/disciplina/${item.id}`}>
                  <div className='listar-disciplinas-card'>
                    <div className='listar-disciplinas-card-titulo'>
                      <span>{item.nome}</span>
                    </div>
                    <div className='listar-disciplinas-card-periodo'>
                      <span>&#62; Período {item.periodo < 10 ? `0${item.periodo}` : item.periodo}</span>
                    </div>
                  </div>
                </Link>
              ))
              : ''}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
