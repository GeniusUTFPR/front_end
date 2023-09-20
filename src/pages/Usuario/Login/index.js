import * as React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { Logo } from "../../../components/LogoGenius/LogoGenius";

import "./style.css";

export const Login = () => {
  const navigate = useNavigate();

  async function redirecionarCadastro() {
    navigate('/cadastrar');
  }

  async function redirecionarLogin() {
    navigate('/');
  }

  const scheme = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Necessário email'),
    senha: Yup.string()
      .min(3, 'A senha deve ter no mínimo 3 caracteres')
      .required('Necessário senha'),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    onSubmit: async values => {
      try {
        await scheme.validate(values);
        redirecionarLogin();
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className="login-container">
      <div className="logo">
        <Logo />
      </div>

      <div className="login-wrapper">
        <h1>
          Acesse sua <span class="conta">conta</span>
        </h1>
        <form component="form" onSubmit={formik.handleSubmit}>
          <input
            required
            autoFocus
            type="email"
            placeholder="Email institucional"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            required
            type="password"
            placeholder="Senha"
            name="senha"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.senha}
          />
          <input type="submit" className="botaoLogin" value="Entrar" />
        </form>
        <div className="cadastrar">
          Não possui conta?{" "}
          <button class="botaoCadastrar" onClick={redirecionarCadastro}>
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};
