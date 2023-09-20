import React from 'react';
import LogoGenius from '../../assets/logo.svg';
import { PAGINA_INICIAL } from '../../routes';
import { useNavigate } from 'react-router-dom';
import './LogoGenius.css';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="logoHeader-esquerda">
      <img
        src={LogoGenius}
        alt="logo"
        className="logoGenius-esquerda"
        onClick={() => {
          navigate(`${PAGINA_INICIAL}/`);
        }}
      />
    </div>
  );
};

export default Logo;