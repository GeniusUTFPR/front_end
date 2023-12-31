import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { api } from '../../../services';

import './style.css';

import Header from '../../../components/Header';
//import Footer from '../../../components/Footer';

export const CadastrarDisciplina = () => {
  const navigate = useNavigate();

  const [cursos, setCursos] = useState({});

  async function getCursos() {
    const { data } = await api.get(`curso/`);
    setCursos(data);
  }

  useEffect(() => {
    async function mudarDisciplina() {
      await getCursos();
    }

    mudarDisciplina();
  }, []);

  async function redirect() {
    navigate('/');
  }

  const scheme = Yup.object().shape({
    curso: Yup.number().required('Necessário curso'),
    periodo: Yup.number().min(1, "Mínimo de 1").max(10, "Máximo de 10").required('Necessário período'),
    nome: Yup.string().required('Necessário o nome da disciplina'),
  });

  const formik = useFormik({
    initialValues: {
      nomeCurso: 0,
      periodo: '',
      nome: '',
    },
    onSubmit: async values => {
      try {
        const { curso, periodo, nome } = values;

        await scheme.validate(values);

        values.curso = parseInt(values.curso);

        await api.post('disciplina/', {
          nome,
          periodo,
          curso,
        });

        alert('Disciplina cadastrada com sucesso!');

        redirect();
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className="disciplina-container">
      <Header />
      <div className="disciplina-cadastro">
        <h1>
          Cadastrar nova <span className="conta">Disciplina</span>
        </h1>
        <div className='formulario'>
          <form component="form" onSubmit={formik.handleSubmit}>
            <div className="imputs">
              <input
                type="text"
                placeholder="Nome da disciplina"
                name="nome"
                autoComplete="nome"
                onChange={formik.handleChange}
                value={formik.values.nome}
                autoFocus
                required
              />
              <input
                type="Periodo"
                placeholder="Periodo da disciplina"
                name="periodo"
                autoComplete="periodo"
                onChange={formik.handleChange}
                value={formik.values.periodo}
                required
              />
              <select
                type="text"
                placeholder="Escolha o curso"
                name="curso"
                autoComplete="curso"
                onChange={formik.handleChange}
                value={formik.values.curso}
              >
                <option value={0} defaultValue className='selecione-curso'>
                  Selecione o curso
                </option>
                {cursos.length > 0
                  ? cursos.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.nome}
                    </option>
                  ))
                  : ''}
              </select>
              <button className="botaoCadastrar">Cadastrar</button>
            </div>
          </form>
        </div>

      </div>
      <div>
      </div>

    </div>
  );
};
