import './style.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../../services';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const ListarCursos = () => {
  const [cursos, setCursos] = useState({});

  async function getCursos() {
    const { data } = await api.get(`curso/`);
    setCursos(data);
  }

  useEffect(() => {
    async function mudarDisciplina() {
      await getCursos();
    }

    mudarDisciplina();
  }, []);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main-cursos">
        <div className="container-cursos">
          {cursos.length > 0
            ? cursos.map(item => (
                // <option value={item.id}>{item.nome}</option>
                <Link to='/disciplina/listar'>
                  <div className="quadro-curso">
                    <div className="quadro-esquerda"></div>
                    <div className="quadro-direita">
                      <p style={{ margin: '0' }}>{item.nome}</p>
                      <p style={{ fontWeight: 'bold', color: '#3F3F3F' }}>
                        &#62; Períodos
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            : ''}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
