import "./style.css";

import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export const PerfilMonitoriaForm = ({ monitoria }) => {
  const [value, setValue] = React.useState(2);
  const usuario = monitoria.usuario;
  console.log(monitoria)

  return (
    <div>
      {usuario && ( // Verifica se 'usuario' está definido
        <div className="perfil-monitoria-container">
          <div className="perfil-monitoria-wrapper">
            <div className="circulo"></div>
            {monitoria.tipo_monitoria === 1 && (
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
            )}
            <h1>{usuario.nome}</h1>
            <div className="email">{usuario.email}</div>
            <div className="celular">{usuario.celular || "Sem celular"}</div>
            {monitoria.tipo_monitoria === 1 && (
              <div className="valor">R${monitoria.valor_por_hora} a hora</div>
            )}
            <h2>Horários</h2>
            <div className="horarios">{monitoria.horarios}</div>
            <h2>Descrição</h2>
            <div className="descricao">
              {monitoria.descricao}
            </div>
          </div>
          {monitoria.tipo_monitoria === 1 && (
            <Link to="/monitoria/avaliar">
              <button> Avaliar monitor</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
