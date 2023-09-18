import { useFormik } from "formik";
import * as Yup from "yup";

import "./style.css";

export const CadastrarCurso = () => {
  const scheme = Yup.object().shape({
    curso: Yup.string().required("É necessário inserir o nome do curso."),
  });

  const formik = useFormik({
    initialValues: {
      curso: "",
    },
  });

  return (
    <div className="curso-container">
      <div className="curso-wrapper">
        <h1>
          Adicione um novo <span className="conta">curso</span>
        </h1>
        <form component="form" onSubmit={formik.handleSubmit}>
          <input
            className="curso"
            type="text"
            placeholder="Nome do curso"
            name="curso"
            autoComplete="curso"
            onChange={formik.handleChange}
            value={formik.values.curso}
            required
          />
          <input type="submit" className="botaoCriar" value="Criar" />
        </form>
      </div>
    </div>
  );
};
