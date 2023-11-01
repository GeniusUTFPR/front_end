import "./style.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { api } from "../../../services";
import Header from "../../../components/Header";
//import Footer from "../../../components/Footer";

export const ListarCursos = () => {
  const [cursos, setCursos] = useState({});

  async function getCursos() {
    const { data } = await api.get(`cursos/`);
    setCursos(data);
  }

  useEffect(() => {
    async function mudarDisciplina() {
      await getCursos();
    }

    mudarDisciplina();
  }, []);

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='curso-container'>
        <div className='curso-lista'>
          {cursos.length > 0
            ? cursos.map((item) => (
                // <option value={item.id}>{item.nome}</option>
                <Link to={`/disciplina/listar/${item.id}`}>
                  <div className='curso-card'>
                    <div className='curso-card-esquerda'>
                      <div className='curso-card-esquerda-linha'></div>
                    </div>
                    <div className='curso-card-direita'>
                      <p className='curso-card-direita-titulo'>{item.nome}</p>
                      <p className='curso-card-direita-periodos'>
                        &#62; Períodos
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            : ""}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
