import './style.css';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { api } from '../../services';

const scheme = Yup.object().shape({
  curso_id: Yup.string().required('É necessário especificar o curso.'),
  disciplina: Yup.string().required('É necessário especificar a disciplina.'),
  valor_por_hora: Yup.number().required(
    'É necessário inserir o valor/hora da monitoria'
  ),
  horarios: Yup.string().required('É necessário especificar os horários.'),
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
  const [cursos, setCursos] = useState({});

  async function fetchData() {
    try {
      const cursosResponse = await api.get('cursos/');
      setCursos(cursosResponse.data);

      if (formik.values.curso_id) {
        const disciplinasResponse = await api.get(`disciplinas/?curso__id=${formik.values.curso_id}`);
        setDisciplinas(disciplinasResponse.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [formik.values.curso_id]);

  return (
    <div>
      <div className='monitoria-form-titulo'>
        <h1>
          {title1}
          <span className='monitoria'>{title2}</span>
        </h1>
      </div>
      <form component="form" onSubmit={formik.handleSubmit}>
        <div className='monitoria-form-form'>
          <div className='monitoria-form-campo-3'>
            <label>Curso:</label>
            <select
              className='selectMonitoria'
              type='text'
              placeholder='Curso'
              name='curso_id'
              onChange={formik.handleChange}
              value={formik.values.curso_id}
            >
              {disciplinas.length > 0
                ? cursos.map(item => (
                  <option value={item.id}>{item.nome}</option>
                ))
                : ''}
            </select>
          </div>
          <div className='monitoria-form-campo-3'>
            <label>Disciplina:</label>
            <select
              className='selectMonitoria'
              type='text'
              placeholder='Disciplina'
              name='disciplina'
              onChange={formik.handleChange}
              value={formik.values.disciplina}
            >
              {disciplinas.length > 0
                ? disciplinas.map(item => (
                  <option value={item.id}>{item.nome}</option>
                ))
                : ''}
            </select>
          </div>
          <div className='monitoria-form-campo-3'>
            <label>Valor por hora (R$):</label>
            <input
              type='text'
              placeholder='Valor'
              name='valor_por_hora'
              autoComplete='valor_por_hora'
              onChange={formik.handleChange}
              value={formik.values.valor_por_hora}
            />
          </div>
          <div className='monitoria-form-campo-2'>
            <label>Horários:</label>
            <textarea
              id='textoMonitoria'
              type='text'
              placeholder='Horários'
              name='horarios'
              autoComplete='horarios'
              onChange={formik.handleChange}
              value={formik.values.horarios}
            />
          </div>
          <div className='monitoria-form-campo-2'>
            <label>Descrição:</label>
            <textarea
              id='textoMonitoria'
              type='text'
              placeholder='Descrição'
              name='descricao'
              autoComplete='descricao'
              onChange={formik.handleChange}
              value={formik.values.descricao}
            />
          </div>
        </div>
        <div className='monitoria-form-botao'>
          <input type='submit' className='monitoria-form-botao-confirmar' value='Confirmar' />
          <button className='monitoria-form-botao-cancelar' onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
