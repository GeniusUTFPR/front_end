import { MonitoriaForm } from '../../../../components/MonitoriaForm/MonitoriaForm';
import { api } from '../../../../services';
import { Modal } from '@mui/material';

export const EditarMonitoria = ({ open, onClose, monitoria }) => {

  const initialValues = {
    monitoriaTipo: 1,
    monitoriaDisciplinaID: monitoria.disciplina_id,
    monitoriaValorPorHora: monitoria.valor_por_hora,
    monitoriaSegunda: monitoria.segunda,
    monitoriaTerca: monitoria.terca,
    monitoriaQuarta: monitoria.quarta,
    monitoriaQuinta: monitoria.quinta,
    monitoriaSexta: monitoria.sexta,
    monitoriaSabado: monitoria.sabado,
    monitoriaDescricao: monitoria.descricao,
  };

  const handleEdit = async values => {
    const { id } = monitoria;

    try {
      await api.patch(`/monitoria/${id}`, {
        tipo: parseInt(values.monitoriaTipo),
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
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
      style={{ border: '100vh solid rgba(0, 0, 0, 0.8)' }}
    >
      <MonitoriaForm
        title1="Edite sua "
        title2="monitoria"
        initialValues={initialValues}
        onCancel={onClose}
        onSubmit={handleEdit}
      />
    </Modal>
  );
};