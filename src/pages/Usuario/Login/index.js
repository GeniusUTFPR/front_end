import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../../../services';

import { Logo } from "../../../components/LogoGenius/LogoGenius";

import "./style.css";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('token/', {
        email,
        password
      });
      if (response.status === 200) {
        const { refresh, access } = response.data;
        Cookies.set('refreshToken', refresh, { expires: 1, sameSite: 'none', secure: true });
        Cookies.set('accessToken', access, { expires: 1, sameSite: 'none', secure: true });
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function redirecionarCadastro() {
    navigate('/cadastrar');
  }

  return (
    <div className="login-container">
      <div className="logo">
        <Logo />
      </div>

      <div className="login-wrapper">
        <h1>
          Acesse sua <span class="conta">conta</span>
        </h1>
        <form component="form" onSubmit={handleSubmit}>
          <input
            required
            autoFocus
            type="email"
            placeholder="Email institucional"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            required
            type="password"
            placeholder="Senha"
            name="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
