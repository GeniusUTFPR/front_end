import './style.css';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { api } from '../../../services';

export const CadastrarCurso = () => {
  const navigate = useNavigate();

  async function redirecionarPaginaInicial() {
    navigate('/');
  }

  const scheme = Yup.object().shape({
    nome: Yup.string().required('Necessário nome do curso'),
  });

  const formik = useFormik({
    initialValues: {
      nome: '',
    },
    onSubmit: async values => {
      try {
        const { nome } = values;
        await scheme.validate(values);

        await api.post('curso/', {
          nome,
        });

        alert('Você cadastrou o curso com sucesso!');

        redirecionarPaginaInicial();
      } catch (error) {
        alert(error);
      }
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
            type="text"
            placeholder="Nome do curso"
            name="nome"
            autoComplete="nome"
            onChange={formik.handleChange}
            value={formik.values.nome}
            autoFocus
            required
          />
          <input type="submit" className="botaoCriar" value="Criar" />
        </form>
      </div>
    </div>
  );
};
