//import Header from '../../../components/Header/header';
//import Footer from '../../../components/Footer/footer';
import { MonitoriaForm } from "../../../components/MonitoriaForm";

import { MINHAS_MONITORIAS } from '../../../routes';

import { useNavigate } from 'react-router-dom';
import { api } from '../../../services';

export const CadastrarMonitoria = () => {
  const navigate = useNavigate();

  const initialValues = {
    tipo: 1,
    valor_por_hora: 0,
    descricao: '',
    disciplina: 1,
  };

  const handleSubmit = async values => {
    try {
      await api.post('monitoria/', {
        tipo: 3,
        usuario: 1,
        valor_por_hora: parseInt(values.valor_por_hora),
        descricao: values.descricao,
        disciplina: parseInt(values.disciplina),
      });

      navigate(MINHAS_MONITORIAS);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ marginTop: '100px' }}>
        <MonitoriaForm
          title1="Crie uma "
          title2="monitoria"
          initialValues={initialValues}
          onCancel={() => {
            navigate(MINHAS_MONITORIAS);
          }}
          onSubmit={handleSubmit}
        />
      </div>

    </div>
  );
};