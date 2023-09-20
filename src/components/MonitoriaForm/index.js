import './style.css';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { api } from '../../services';

const scheme = Yup.object().shape({
  tipo: Yup.string().required('É necessário especificar a disciplina.'),
  valor_por_hora: Yup.number().required(
    'É necessário inserir o valor/hora da monitoria'
  ),
  descricao: Yup.string(),
});

export const MonitoriaForm = ({
  title1,
  title2,
  initialValues,
  onSubmit,
  onCancel,
}) => {
  const formik = useFormik({
    validationSchema: scheme,
    initialValues: initialValues,
    onSubmit,
  });

  const [disciplinas, setDisciplinas] = useState({});

  async function getDisciplinas() {
    const { data } = await api.get(`disciplina/`);
    setDisciplinas(data);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await getDisciplinas();
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="monitoria-container">
      <div className="monitoria-wrapper">
        <h1>
          {title1}
          <span className="monitoria">{title2}</span>
        </h1>
        <form component="form" onSubmit={formik.handleSubmit}>
          <select
            className="selectMonitoria"
            type="text"
            placeholder="Disciplina"
            name="disciplina"
            onChange={formik.handleChange}
            value={formik.values.disciplina}
          >
            {disciplinas.length > 0
              ? disciplinas.map(item => (
                  <option value={item.id}>{item.nome}</option>
                ))
              : ''}
          </select>
          <input
            type="text"
            placeholder="Valor"
            name="valor_por_hora"
            autoComplete="valor_por_hora"
            onChange={formik.handleChange}
            value={formik.values.valor_por_hora}
          />
          <input
            id="descricaoMonitoria"
            type="text"
            placeholder="Descrição"
            name="descricao"
            autoComplete="descricao"
            onChange={formik.handleChange}
            value={formik.values.descricao}
          />
          <input type="submit" className="botaoConfirmar" value="Confirmar" />
          <button className="botaoCancelar" onClick={onCancel}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
