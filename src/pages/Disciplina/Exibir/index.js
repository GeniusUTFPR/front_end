import './style.css';
import { Link, useParams } from 'react-router-dom';

import { MonitorCard } from '../../../components';
import { Header, Footer } from '../../../components';
import { useEffect, useState } from 'react';
import api from '../../../services';

export const MonitoriaPaluno = () => {
  const [informacoesDisciplina, setInformacoesDisciplina] = useState({});
  const [informacoesMonitoria, setInformacoesMonitoria] = useState({});
  const { disciplina_id } = useParams();

  async function getDisciplinas(disciplina_id) {
    const { data } = await api.get(`disciplinas/${disciplina_id}`);
    setInformacoesDisciplina(data);
  }

  async function getMonitoria(disciplina_id) {
    const { data } = await api.get(`monitorias/?disciplina__id=${disciplina_id}`);
    setInformacoesMonitoria(data);
  }

  useEffect(() => {
    async function fetchThesis() {
      try {
        await getDisciplinas(disciplina_id);
        await getMonitoria(disciplina_id);
      } catch (error) { }
    }
    fetchThesis();
  }, [disciplina_id]);

  const renderMonitorCards = () => {
    const monitoriasTipo3 = Object.values(informacoesMonitoria).filter(
      (monitoria) => monitoria.tipo_monitoria === 3
    );

    const monitoriasTipo2 = Object.values(informacoesMonitoria).filter(
      (monitoria) => monitoria.tipo_monitoria === 2
    );

    return (
      <div className='exibir-disciplina-monitoria-paluno'>
        {monitoriasTipo3.map((monitoria) => (
          <MonitorCard key={monitoria.id} monitoria={monitoria} />
        ))}
        {monitoriasTipo2.map((monitoria) => (
          <MonitorCard key={monitoria.id} monitoria={monitoria} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='exibir-disciplina-container'>
        <div className='exibir-disciplina-titulo'>
          <p>{informacoesDisciplina.nome}</p>
        </div>
        {renderMonitorCards()}
        <div className='exibir-disciplina-monitoria-externa'>
          <div className='exibir-disciplina-monitoria-externa-texto'>
            <p className='exibir-disciplina-monitorias-externa-branco'>Monitorias</p>
            <p className='exibir-disciplina-monitorias-externa-amarelo'>Externas</p>
          </div>
          <Link to={`/disciplina/monitorias_externas/${disciplina_id}`}>
            <div className='exibir-disciplina-botao'>
              <button>Veja mais</button>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
