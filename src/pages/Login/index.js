import * as React from "react";
import { useFormik } from "formik";
import { Logo } from "../../components/LogoGenius/LogoGenius";
import { CADASTRAR_USUARIO } from "../../routes/index";

import "./style.css";

export const Login = () => {

  const abrirCadastro = (e) => {
    window.location.href = CADASTRAR_USUARIO;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
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
          <button class="botaoCadastrar" onClick={abrirCadastro}>
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};
