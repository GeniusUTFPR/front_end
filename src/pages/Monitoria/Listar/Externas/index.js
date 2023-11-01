import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Header, Footer } from '../../../../components';
import api from '../../../../services';

import StarIcon from '@mui/icons-material/Star';

import './style.css';

export const ListarMonitoriasExternas = () => {
  const [monitorias, setMonitorias] = useState({});
  const { disciplina_id } = useParams();
  const [rating, setRating] = useState(null);

  async function getMonitorias(disciplina_id) {
    const { data } = await api.get(`monitorias/?disciplina__id=${disciplina_id}&tipo_monitoria=${1}`);
    setMonitorias(data);
  }

  useEffect(() => {
    async function fetchThesis() {
      try {
        await getMonitorias(disciplina_id);
      } catch (error) { }
    }
    fetchThesis();
  }, [disciplina_id]);

  const quantidadeDeMonitorias = monitorias.length;

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='todas-container'>
        <div className='title'>
          <p>Monitores Externos</p>
        </div>
        <div className='monitores'>
          {quantidadeDeMonitorias > 0 ? (
            monitorias.map(item => (
              <Link to={`/monitoria/${item.id}`}>
                <div>
                  <div className='monitor-extreno'>
                    <div className='itens'>
                      <div className='nome'>
                        <p>{item.usuario.nome}</p>
                      </div>
                      <div className='itens-direita'>
                        <div className='estrelas'>
                          {[1, 2, 3, 4, 5].map((index) => (
                            <StarIcon key={index} className={index <= rating ? 'star filled' : 'star'} />
                          ))}
                        </div>
                        <div className='valor'>
                          <p>R${item.valor_por_hora}</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className='listar-minhas-monitorias-nenhuma'>Nenhuma monitoria encontrada.</p>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};