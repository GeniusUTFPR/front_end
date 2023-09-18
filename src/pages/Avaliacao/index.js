import { useFormik } from "formik";
import * as Yup from "yup";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

import "./index.css";

export const Avaliacao = () => {
  const scheme = Yup.object().shape({
    comentario: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      comentario: "",
    },
  });

  const [value, setValue] = useState(0);

  return (
    <div class="avaliacao-container">
      <div className="avaliacao-wrapper">
        <h1>
          Como foi sua <span className="experiencia">experiência?</span>
        </h1>
        <div className="avaliacao-estrela">
          <Rating
            name="simple-controlled"
            size="large"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            emptyIcon={
              <StarIcon
                style={{ color: "white", opacity: 0.3 }}
                fontSize="inherit"
              />
            }
          />
        </div>
        <form component="form" onSubmit={formik.handleSubmit}>
          <input
            className="comentario"
            type="text"
            placeholder="Comentário"
            name="comentario"
            autoComplete="comentario"
            onChange={formik.handleChange}
            value={formik.values.comentario}
            required
          />
          <input type="submit" className="botaoEnviar" value="Enviar" />
        </form>
      </div>
    </div>
  );
};
