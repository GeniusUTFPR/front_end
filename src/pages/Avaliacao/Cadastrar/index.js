import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Rating } from '@mui/material';
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

import './style.css';

import { Header, Footer } from '../../../components';
import { api } from '../../../services';

export const Avaliacao = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(1);

  async function redirecionar() {
    navigate('/');
  }

  const scheme = Yup.object().shape({
    comentario: Yup.string().required('Comentário necessária'),
    pontuacao: Yup.number().required('Pontuação necessária'),
  });

  const formik = useFormik({
    initialValues: {
      comentario: '',
      usuario: 1,
      monitoria: 1,
      pontuacao: 1,
    },
    onSubmit: async values => {
      try {
        const { comentario, pontuacao, usuario, monitoria } = values;
        await scheme.validate(values);

        await api.post('avaliacao/', {
          comentario,
          pontuacao: value,
          usuario: 1,
          monitoria: 1,
        });

        alert('Avaliação cadastrada com sucesso!');

        redirecionar();
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div class="avaliacao-container">
        <div className="avaliacao-wrapper">
          <h1>
            Como foi sua <span className="experiencia">experiência?</span>
          </h1>
          <form component="form" onSubmit={formik.handleSubmit}>
            <div className="avaliacao-estrela">
              <Rating
                name="simple-controlled"
                size="large"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                emptyIcon={
                  <StarIcon
                    style={{ color: 'white', opacity: 0.3 }}
                    fontSize="inherit"
                  />
                }
              />
            </div>
            <input
              className="comentario"
              type="text"
              placeholder="Comentário"
              name="comentario"
              autoComplete="comentario"
              onChange={formik.handleChange}
              value={formik.values.comentario}
              required
            />
            <input type="submit" className="botaoEnviar" value="Enviar" />
          </form>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
