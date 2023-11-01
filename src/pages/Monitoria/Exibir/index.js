import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { PerfilMonitoriaForm } from "../../../components";
import { useParams } from "react-router-dom";
import api from "../../../services";

export const ExibirMonitoria = () => {
  const [informacoesMonitoria, setInformacoesMonitoria] = useState({});
  const { monitoria_id } = useParams();

  async function getMonitoria(monitoria_id) {
    const { data } = await api.get(`monitorias/${monitoria_id}`);
    setInformacoesMonitoria(data);
  }

  useEffect(() => {
    async function fetchThesis() {
      try {
        await getMonitoria(monitoria_id);
      } catch (error) { }
    }
    fetchThesis();
  }, [monitoria_id]);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div>
        <PerfilMonitoriaForm monitoria={informacoesMonitoria} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
