import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import './style.css';
import './style-responsive.css';

export const MonitorExterno = () => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    // Coloque aqui o seu placeId obtido na API do Google
    const placeId = 'PLACE_ID';

    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=YOUR_API_KEY`)
      .then((response) => {
        const place = response.data.result;
        setRating(place.rating);
      })
      .catch((error) => {
        console.error('Erro ao obter a avaliação do lugar:', error);
      });
  }, []);

  return (
    <div>
      <div className="monitor-extreno">
        <div className='itens'>
          <div className="nome">
            <p>Fulano 01</p>
          </div>
          <div className='itens-direita'>
            <div className="estrelas">
              {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon key={index} className={index <= rating ? 'star filled' : 'star'} />
              ))}
            </div>
            <div className="valor">
              <p>R$ 50,00/h</p>
            </div>
            <VisibilityIcon className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};
