import './style.css';

import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { api } from '../../../services';

export const CadastrarUsuario = () => {
  const navigate = useNavigate();

  const [cursos, setCursos] = useState({});

  async function getCursos() {
    const { data } = await api.get(`curso/`);
    setCursos(data);
  }

  async function redirecionarLogin() {
    navigate('/entrar');
  }

  useEffect(() => {
    async function mudarDisciplina() {
      await getCursos();
    }
  
    mudarDisciplina();
  }, []);

  const scheme = Yup.object().shape({
    nome: Yup.string().required('Necessário nome completo'),
    email: Yup.string()
      .email()
      .required('É necessário inserir um endereço de email!'),
    senha: Yup.string()
      .min(3, 'A senha deve ter no mínimo 3 caracteres')
      .required('Necessário senha!'),
    confirmarSenha: Yup.string()
      .oneOf([Yup.ref('senha'), null], 'As senhas não são iguais!')
      .required('Necessário confirmar a senha!'),
    registro: Yup.string().required('Necessário registro de aluno/professor'),
    curso: Yup.number().min(1, 'Necessário curso'),
    foto_perfil: Yup.string().required(
      'Necessário link da sua foto de perfil do github'
    ),
  });

  const formik = useFormik({
    initialValues: {
      tipo: 1,
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      registro: '',
      foto_perfil: '',
      curso: 0,
    },
    onSubmit: async values => {
      try {
        const { tipo, nome, email, senha, registro, curso, foto_perfil } = values;
        await scheme.validate(values);

        await api.post('usuario/', {
          tipo,
          nome,
          email,
          senha,
          registro,
          foto_perfil: `https://github.com/${foto_perfil}.png`,
          curso: parseInt(curso),
        });

        alert('Você foi cadastrado com sucesso!');

        redirecionarLogin();
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className="cadastro-container">
      <div className="cadastro-wrapper">
        <h1>
          Crie uma nova <span className="conta">conta</span>
        </h1>
        <form component="form" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            autoComplete="nome"
            onChange={formik.handleChange}
            value={formik.values.nome}
            autoFocus
            required
          />
          <input
            type="email"
            placeholder="Email institucional"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`${
              formik.touched.email && formik.errors.email ? 'error-input' : ''
            }`}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            name="senha"
            autoComplete="senha"
            onChange={formik.handleChange}
            value={formik.values.senha}
            required
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            name="confirmarSenha"
            autoComplete="confirmarSenha"
            onChange={formik.handleChange}
            value={formik.values.confirmarSenha}
            required
          />
          <input
            type="text"
            placeholder="RA do aluno"
            name="registro"
            autoComplete="registro"
            onChange={formik.handleChange}
            value={formik.values.registro}
            required
          />
          <select
            type="text"
            placeholder="Escolha seu curso"
            name="curso"
            autoComplete="curso"
            onChange={formik.handleChange}
            value={formik.values.curso}
          >
            <option value={0} defaultValue>
              Selecione seu curso
            </option>
            {cursos.length > 0
              ? cursos.map(item => (
                  <option value={item.id}>{item.nome}</option>
                ))
              : ''}
          </select>
          <input
            className="linkGitHub"
            type="text"
            placeholder="Nome de usuário do GitHub"
            name="foto_perfil"
            autoComplete="foto_perfil"
            onChange={formik.handleChange}
            value={formik.values.foto_perfil}
            required
          />
          <input type="submit" className="botaoCadastrar" value="Entrar" />
        </form>
        <div className="login">
          Já possui conta? <button className="botaoLogin">Entre aqui!</button>
        </div>
      </div>
    </div>
  );
};
