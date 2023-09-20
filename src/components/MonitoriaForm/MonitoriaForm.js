import './monitoria.css';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { api } from '../../services';

const scheme = Yup.object().shape({
  monitoriaDisciplinaID: Yup.string().required(
    'É necessário especificar a disciplina.'
  ),
  monitoriaValorPorHora: Yup.number().required(
    'É necessário inserir o valor/hora da monitoria'
  ),
  monitoriaSegunda: Yup.string(),
  monitoriaTerca: Yup.string(),
  monitoriaQuarta: Yup.string(),
  monitoriaQuinta: Yup.string(),
  monitoriaSexta: Yup.string(),
  monitoriaSabado: Yup.string(),
  monitoriaDescricao: Yup.string(),
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
    const { data } = await api.get(`disciplina/listarTodos`);
    setDisciplinas(data);
  }

  useEffect(() => {
    async function fetch() {
      try {
        getDisciplinas();
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  });

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
            name="monitoriaDisciplinaID"
            onChange={formik.handleChange}
            value={formik.values.monitoriaDisciplinaID}
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
            name="monitoriaValorPorHora"
            autoComplete="monitoriaValorPorHora"
            onChange={formik.handleChange}
            value={formik.values.monitoriaValorPorHora}
          />
          <input
            type="text"
            placeholder="Horário de Segunda"
            name="monitoriaSegunda"
            autoComplete="monitoriaSegunda"
            onChange={formik.handleChange}
            value={formik.values.monitoriaSegunda}
          />
          <input
            type="text"
            placeholder="Horário de Terça"
            name="monitoriaTerca"
            autoComplete="monitoriaTerca"
            onChange={formik.handleChange}
            value={formik.values.monitoriaTerca}
          />
          <input
            type="text"
            placeholder="Horário de Quarta"
            name="monitoriaQuarta"
            autoComplete="monitoriaQuarta"
            onChange={formik.handleChange}
            value={formik.values.monitoriaQuarta}
          />
          <input
            type="text"
            placeholder="Horário de Quinta"
            name="monitoriaQuinta"
            autoComplete="monitoriaQuinta"
            onChange={formik.handleChange}
            value={formik.values.monitoriaQuinta}
          />
          <input
            type="text"
            placeholder="Horário de Sexta"
            name="monitoriaSexta"
            autoComplete="monitoriaSexta"
            onChange={formik.handleChange}
            value={formik.values.monitoriaSexta}
          />
          <input
            type="text"
            placeholder="Horário de Sábado"
            name="monitoriaSabado"
            autoComplete="monitoriaSabado"
            onChange={formik.handleChange}
            value={formik.values.monitoriaSabado}
          />
          <input
            id="descricaoMonitoria"
            type="text"
            placeholder="Descrição"
            name="monitoriaDescricao"
            autoComplete="monitoriaDescricao"
            onChange={formik.handleChange}
            value={formik.values.monitoriaDescricao}
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