import { useFormik } from "formik";
import * as Yup from "yup";

import "./Cadastro.css";

export const Cadastro = () => {
  const scheme = Yup.object().shape({
    curso: Yup.number().min(
      1,
      "É necessário selecionar o Bacharelado em Ciência da Computação"
    ),
    foto_perfil: Yup.string().required(
      "É necessário inserir o link da sua foto de perfil do github"
    ),
    confirmarSenha: Yup.string()
      .oneOf([Yup.ref("senha"), null], "As senhas não são iguais!")
      .required("É necessário confirmar sua senha!"),
    senha: Yup.string()
      .min(3, "A senha deve ter no mínimo 3 caracteres")
      .required("É necessário inserir uma senha!"),
    email: Yup.string()
      .email()
      .required("É necessário inserir um endereço de email!"),
    registro: Yup.string().required(
      "É necessário inserir um registro de aluno!"
    ),
    nome: Yup.string().required("É necessário inserir seu nome"),
  });

  const formik = useFormik({
    initialValues: {
      registro: "",
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: "",
      curso: 0,
      foto_perfil: "",
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
              formik.touched.email && formik.errors.email ? "error-input" : ""
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
