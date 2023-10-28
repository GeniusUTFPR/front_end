import "./style.css";

import { useFormik } from "formik";
import * as Yup from "yup";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const Monitor = () => {
  const scheme = Yup.object().shape({
    ra: Yup.string().required("Necessário o nome do monitor"),
  });

  const formik = useFormik({
    initialValues: {
      ra: "",
    },
  });

  return (
    <div className="cadastro-monitor-container">
      <div className="header">
        <Header />
      </div>
      <div className="cadastro-monitor-disciplina">
        <div className="cadastro-monitor-wrapper">
          <h1>
            Olá professor! Cadastre o <span className="monitor">monitor</span>{" "}
            da sua disciplina
          </h1>
          <form component="form" onSubmit={formik.handleSubmit}>
            <select
              id="select-disciplina"
              type="text"
              placeholder="Escolha a disciplina"
              name="disciplina"
              autoComplete="disciplina"
              onChange={formik.handleChange}
              value={formik.values.disciplina}
            >
              <option value={0} defaultValue>
                Selecione a disciplina
              </option>
            </select>
            <input
              type="text"
              placeholder="RA do estudante"
              name="ra"
              autoComplete="ra"
              onChange={formik.handleChange}
              value={formik.values.ra}
              autoFocus
              required
            />
            <input type="submit" className="botaoCadastrar" value="Cadastrar" />
          </form>
        </div>
      </div>
    </div>
  );
};
