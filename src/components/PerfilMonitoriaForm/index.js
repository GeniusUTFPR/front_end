import "./style.css";

import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export const PerfilMonitoriaForm = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <div className="perfil-monitoria-container">
        <div className="perfil-monitoria-wrapper">
          <div className="circulo"></div>

          <div className="rating">
            <Rating
              name="read-only"
              value={value}
              readOnly
              emptyIcon={
                <StarIcon
                  style={{
                    color: "white",
                    opacity: 0.3,
                  }}
                />
              }
            />
          </div>

          <h1>Fernando da Silva Oliveira</h1>
          <div className="email">fernandooliveiraaa@gmail.com</div>
          <div className="celular">(44) 997017254</div>
          <div className="valor"> R$ 10,00 a hora</div>
          <h2>Horários</h2>
          <div className="horarios">
            Segunda 13:30, Quinta 15:50, Sexta 11:20
          </div>
          <h2>Descrição</h2>
          <div className="descricao">
            Se o texto da descrição está vazando pela borda do wrapper, isso
            geralmente ocorre quando o texto é maior do que o espaço disponível
            dentro do wrapper. Para evitar que o texto vaze pelas bordas, você
            pode adicionar propriedades CSS para controlar o overflow do
            conteúdo. Aqui estão algumas opções:
          </div>
        </div>
        <Link to="/monitoria/avaliar">
          <button> Avaliar monitor</button>
        </Link>
      </div>
    </div>
  );
};
