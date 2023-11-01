import "./style.css";

import { useFormik } from "formik";
import * as Yup from "yup";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export const CadastrarPaluno = () => {
  const scheme = Yup.object().shape({
    horario: Yup.string().required("Necessário preencher o horário do Paluno"),
    descricao: Yup.string().required(
      "Necessário preencher a descrição do Paluno"
    ),
  });

  const formik = useFormik({
    initialValues: {
      horario: "",
      descricao: "",
    },
  });

  return (
    <div className="cadastro-paluno-container">
      <div className="header">
        <Header />
      </div>
      <div className="cadastro-paluno-disciplina">
        <div className="cadastro-paluno-wrapper">
          <h1>
            Olá professor! Cadastre o <span className="paluno">PAluno</span> da
            sua disciplina
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
              placeholder="Horário"
              name="horario"
              autoComplete="horario"
              onChange={formik.handleChange}
              value={formik.values.horario}
              autoFocus
              required
            />
            <input
              type="text"
              placeholder="Descrição"
              name="descricao"
              autoComplete="descricao"
              onChange={formik.handleChange}
              value={formik.values.descricao}
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
