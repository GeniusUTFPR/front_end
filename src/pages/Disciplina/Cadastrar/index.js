import './style.css';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { api } from '../../../services';

export const ListarDisciplina = () => {
  const [informacoesDisciplina, setInformacoesDisciplina] = useState({});
  const [informacoesProfessor, setInformacoesProfessor] = useState({});
  const [informacoesMonitor, setInformacoesMonitor] = useState({});
  const [informacoesPAluno, setInformacoesPAluno] = useState({});
  const [informacoesMonitoria, setInformacoesMonitoria] = useState({});
  const { id } = useParams();

  async function getDisciplina(id) {
    const { data } = await api.get(`disciplina/listar/${id}`);
    setInformacoesDisciplina(data);
  }

  async function getProfessor(id_disciplina) {
    const { data } = await api.get(`usuario/professor/${id_disciplina}`);
    setInformacoesProfessor(data);
  }

  async function getMonitor(id_disciplina) {
    const { data } = await api.get(`usuario/monitor/${id_disciplina}`);
    setInformacoesMonitor(data);
  }

  async function getPAluno(id_usuario, id_disciplina) {
    const { data } = await api.get(
      `monitoria/paluno/${id_usuario}/${id_disciplina}`
    );
    setInformacoesPAluno(data);
  }

  async function getMonitoria(id_usuario, id_disciplina) {
    const { data } = await api.get(
      `monitoria/paluno/${id_usuario}/${id_disciplina}`
    );
    setInformacoesMonitoria(data);
  }

  useEffect(() => {
    async function mudarDisciplina() {
      try {
        await getDisciplina(id);
        await getProfessor(id);
        await getPAluno(informacoesProfessor.id, id);
        await getMonitor(id);
        await getMonitoria(informacoesMonitor.id, id);
      } catch (error) {}
    }

    mudarDisciplina();
  }, [id, informacoesProfessor.id, informacoesMonitor.id]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="div-pai">
        <div className="container-materia">{informacoesDisciplina.nome}</div>
        <div className="container-professor-monitor">
          <div className="professor">
            <div className="professorEsquerda">
              <div className="quadrado-interior">
                {informacoesProfessor.nome != null ? (
                  <Avatar
                    sx={{
                      width: '100%',
                      height: '100%',
                      border: '8px solid #00FF7E',
                    }}
                  >
                    <img
                      src={informacoesProfessor.foto_perfil}
                      alt="Avatar"
                      width="100%"
                    />
                  </Avatar>
                ) : (
                  ''
                )}
              </div>
              <div className="quadrado-direita">
                {informacoesProfessor.nome != null ? (
                  <p className="titulo-professor">
                    {informacoesProfessor.nome}
                  </p>
                ) : (
                  <p className="titulo-professor">SEM PROFESSOR CADASTRADO</p>
                )}
                <p>{informacoesProfessor.email}</p>
              </div>
            </div>
            <div className="professorDireita">
              {informacoesProfessor.nome != null ? (
                <>
                  <p>Segunda: {informacoesPAluno.segunda}</p>
                  <p>Terça: {informacoesPAluno.terca}</p>
                  <p>Quarta: {informacoesPAluno.quarta}</p>
                  <p>Quinta: {informacoesPAluno.quinta}</p>
                  <p>Sexta: {informacoesPAluno.sexta}</p>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="professor">
            <div className="professorEsquerda">
              <div className="quadrado-interior">
                {informacoesMonitor.nome != null ? (
                  <Avatar
                    sx={{
                      width: '100%',
                      height: '100%',
                      border: '8px solid #00FF7E',
                    }}
                  >
                    <img
                      src={informacoesMonitor.foto_perfil}
                      alt="Avatar"
                      width="100%"
                    />
                  </Avatar>
                ) : (
                  ''
                )}
              </div>
              <div className="quadrado-direita">
                {informacoesMonitor.nome != null ? (
                  <>
                    <p className="titulo-professor">
                      {informacoesMonitor.nome}
                    </p>
                    <p>{informacoesMonitor.email}</p>
                    <p>{informacoesMonitor.registro}</p>
                  </>
                ) : (
                  <p className="titulo-professor">NÃO HÁ MONITOR</p>
                )}
              </div>
            </div>
            <div className="professorDireita">
              {informacoesMonitor.nome != null ? (
                <>
                  <p>Segunda: {informacoesMonitoria.segunda}</p>
                  <p>Terça: {informacoesMonitoria.terca}</p>
                  <p>Quarta: {informacoesMonitoria.quarta}</p>
                  <p>Quinta: {informacoesMonitoria.quinta}</p>
                  <p>Sexta: {informacoesMonitoria.sexta}</p>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <Link to="/monitoria-paga">
          <imput type="button" class="monitor-mais">
            Conheça nossos Monitores!
          </imput>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};