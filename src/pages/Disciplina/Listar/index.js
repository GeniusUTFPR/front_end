import './style.css';

import LaptopIcon from '@mui/icons-material/Laptop';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../../services';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const ListarDisciplinas = () => {
  const [informacoesDisciplinas, setInformacoesDisciplinas] = useState({});
  const { periodo } = useParams();

  async function getDisciplinas(curso) {
    const { data } = await api.get(`disciplina/`);
    setInformacoesDisciplinas(data);
  }

  useEffect(() => {
    async function fetchThesis() {
      try {
        await getDisciplinas(periodo);
      } catch (error) {}
    }
    fetchThesis();
  }, [periodo]);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '30px',
          margin: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10rem',
        }}
      >
        <button
          class="div-externa"
          style={{
            fontFamily: 'Arial',
            border: 'none',
            background: '#121212',
            cursor: 'pointer',
          }}
        >
          <div
            class="div-interna"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'right',
            }}
          >
            <LaptopIcon fontSize="large" style={{ color: '#121212' }} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <p style={{ margin: '0' }}>Ciências da Computação</p>
            <p style={{ fontWeight: 'bold', color: '#3F3F3F' }}>
              &#62; {periodo}º Período
            </p>
          </div>
        </button>
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
        <div class="lista-botoes">
          {informacoesDisciplinas.length > 0
            ? informacoesDisciplinas.map(item => (
                <Link to={`/disciplina/${item.id}`}>
                  <button
                    class="div-botao"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      border: 'none',
                      background: '#121212',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      textAlign: 'left',
                      paddingLeft: '25px',
                    }}
                  >
                    <span style={{ margin: '0' }}>{item.nome}</span>
                  </button>
                </Link>
              ))
            : ''}
        </div>
      </div>
      <div className="listarDisciplina-botao">
        <Link to="/disciplina/cadastrar">
          <button className="botaoCadastrar">Cadastrar nova disciplina</button>
        </Link>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
