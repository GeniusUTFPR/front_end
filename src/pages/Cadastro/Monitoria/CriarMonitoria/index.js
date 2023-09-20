//import Header from '../../../components/Header/header';
//import Footer from '../../../components/Footer/footer';
import { MonitoriaForm } from "../../../../components/MonitoriaForm/MonitoriaForm";

import { MINHAS_MONITORIAS } from '../../../../routes/index';

import { useNavigate } from 'react-router-dom';
import { api } from '../../../../services';

export const CriarMonitoria = () => {

  const navigate = useNavigate();

  const initialValues = {
    monitoriaDisciplinaID: 1,
    monitoriaValorPorHora: '',
    monitoriaSegunda: '',
    monitoriaTerca: '',
    monitoriaQuarta: '',
    monitoriaQuinta: '',
    monitoriaSexta: '',
    monitoriaSabado: '',
    monitoriaDescricao: '',
  };

  const handleSubmit = async values => {
    try {
      await api.post('/monitoria/3', {
        tipo: 3,
        disciplina_id: parseInt(values.monitoriaDisciplinaID),
        valor_por_hora: parseInt(values.monitoriaValorPorHora),
        segunda: values.monitoriaSegunda,
        terca: values.monitoriaTerca,
        quarta: values.monitoriaQuarta,
        quinta: values.monitoriaQuinta,
        sexta: values.monitoriaSexta,
        sabado: values.monitoriaSabado,
        descricao: values.monitoriaDescricao,
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