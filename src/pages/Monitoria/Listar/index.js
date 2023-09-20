import './style.css';

import LaptopIcon from '@mui/icons-material/Laptop';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../../services';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const ListarMonitorias = () => {
  const [informacoes, setInformacoes] = useState({});
  const [disciplina, setDisciplina] = useState({});

  async function getMonitorias() {
    const { data } = await api.get(`monitoria/`);
    setInformacoes(data);
  }

  async function getDisciplinas() {
    const { data } = await api.get(`disciplina/`);
    setDisciplina(data);
  }

  useEffect(() => {
    async function fetchThesis() {
      try {
        await getMonitorias();
        await getDisciplinas();
      } catch (error) {}
    }
    fetchThesis();
  }, []);

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
            <p style={{ margin: '0' }}>Lista de monitorias</p>
            <p style={{ fontWeight: 'bold', color: '#3F3F3F' }}></p>
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
        <div className="lista-botoes">
          {informacoes.length > 0
            ? informacoes.map(item => {
                const disciplinaEncontrada = disciplina.find(
                  item2 => item2.id === item.disciplina.id
                );
                return (
                  <Link to={`/monitoria/${item.id}`} key={item.id}>
                    <button
                      className="div-botao"
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
                      <span style={{ margin: '0' }}>
                        {disciplinaEncontrada ? (
                          <p>Nome da Disciplina: {disciplinaEncontrada.nome}</p>
                        ) : (
                          <p>A disciplina não está definida.</p>
                        )}
                      </span>
                    </button>
                  </Link>
                );
              })
            : null}
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
