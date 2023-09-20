import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Logo } from '../../../components/LogoGenius/LogoGenius';
import { LOGIN } from '../../../routes/index';
import { api } from '../../../services';

import './style_cadastro.css';

export const CadastrarDisciplina = () => {
  const abrirLogin = e => {
    window.location.href = LOGIN;
  };

  const navigate = useNavigate();

  async function redirect() {
    navigate('/entrar');
  }

  const scheme = Yup.object().shape({
    curso: Yup.number()
      .min(1, 'É necessário selecionar o Bacharelado em Ciência da Computação'),
    foto_perfil: Yup.string().required(
      'É necessário inserir o link da sua foto de perfil do github'
    ),
    confirmarSenha: Yup.string()
      .oneOf([Yup.ref('senha'), null], 'As senhas não são iguais!')
      .required('É necessário confirmar sua senha!'),
    senha: Yup.string()
      .min(3, 'A senha deve ter no mínimo 3 caracteres')
      .required('É necessário inserir uma senha!'),
    email: Yup.string()
      .email()
      .required('É necessário inserir um endereço de email!'),
    registro: Yup.string().required(
      'É necessário inserir um registro de aluno!'
    ),
    nome: Yup.string().required('É necessário inserir seu nome'),
  });

  const formik = useFormik({
    initialValues: {
      registro: '',
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      curso: 0,
      foto_perfil: '',
    },
    onSubmit: async values => {
      try {
        const { registro, nome, email, senha, curso, foto_perfil } = values;
        
        await scheme.validate(values);

        values.curso = parseInt(values.curso);

        values.foto_perfil = `https://github.com/${foto_perfil}.png`;
        
        await api.post('/usuario/', {
          nome,
          email,
          senha,
          registro,
          curso,
          foto_perfil,
        });

        alert('Você foi cadastrado com sucesso!');

        redirect();
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className="cadastro-container">
      <div className="cadastro-logo">
        <Logo />
      </div>

      <div className="cadastro-wrapper">
        <h1>
          Cadastrar nova <span className="conta">Disciplina</span>
        </h1>
        <form component="form" onSubmit={formik.handleSubmit}>
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
            type="email"
            placeholder="Periodo da disciplina"
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
            placeholder="Senha de acesso à disciplina"
            name="confirmarSenha"
            autoComplete="confirmarSenha"
            onChange={formik.handleChange}
            value={formik.values.confirmarSenha}
            required
          />
          <input
            type="text"
            placeholder="Confirmar senha"
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
            <option value={1}>Bacharelado em Ciência da Computação</option>
          </select>
          <input type="submit" className="botaoCadastrar" value="Cadastrar" />
        </form>
      </div>
    </div>
  );
};