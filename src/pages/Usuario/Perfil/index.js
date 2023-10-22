import './style.css';
import { Link } from "react-router-dom";
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { useState } from 'react';
import { ReactComponent as FotoPadrao } from '../../../assets/FotoPerfil.svg';

export const Perfil = () => {
  const [nome, setNome] = useState('');

  const [fotoUrl, setFotoUrl] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const url = reader.result;
      setFotoUrl(url);
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('input-file').click();
  };

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='inicial-container'>
        <div className='section'>
          <div className='div-esquerda'>
            <div className='perfil'>
              {fotoUrl ? (
                <img src={fotoUrl} alt="Foto do Perfil" />
              ) : (
                <FotoPadrao className='fotoPadrao' />
              )}
              <button className="alterarFoto" onClick={handleButtonClick}>
                Alterar Foto
              </button>
              <input
                type="file"
                accept="image/*"
                id="input-file"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
              <div className='nome'>
                <p>{nome || 'Campo "nome" vazio.'}</p>
              </div>
              <div className='tipo-perfil'>
                <p>Aluno</p>
              </div>
            </div>
          </div>
          <div className='div-direita'>
            <div className='campo-nome'>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className='campo-periodo'>
              <label htmlFor="periodo">Periodo:</label>
              <input type="text" id="periodo" />
            </div>
            <div className='campo-curso'>
              <label htmlFor="curso">Curso:</label>
              <input type="text" id="curso" />
            </div>
            <Link to="/">
              <button>Seja Mentor</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
