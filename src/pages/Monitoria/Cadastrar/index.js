import Cookies from 'js-cookie';
import { getUserIdFromToken } from '../../../services/auth';
import { useNavigate } from 'react-router-dom';

import { MonitoriaForm } from "../../../components/MonitoriaForm";
import api from '../../../services';

import { MINHAS_MONITORIAS } from '../../../routes';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const CadastrarMonitoria = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get('accessToken');
  const id = getUserIdFromToken(accessToken);

  const initialValues = {
    curso_id: 1,
    tipo_monitoria: 1,
    valor_por_hora: 0,
    horarios: '',
    descricao: '',
    disciplina: 0,
  };

  const handleSubmit = async values => {
    try {
      await api.post('monitorias/', {
        tipo_monitoria: 1,
        usuario: id,
        valor_por_hora: parseInt(values.valor_por_hora),
        horarios: values.horarios,
        descricao: values.descricao,
        disciplina: values.disciplina,
      });

      navigate(MINHAS_MONITORIAS);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div style={{ margin: '12% 0' }}>
        <div className='monitoria-form-container'
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <div className='monitoria-form-wrapper'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: '#FFFFFF',

              backgroundColor: '#121212',
              borderRadius: '2rem',
              padding: '2rem',
              width: '60%'
            }}
          >
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
      </div>
      <div>
        <Footer />
      </div>
    </div >
  );
};