import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { PerfilMonitoriaForm } from "../../../components";
import { PERFIL_MONITORIA } from "../../../routes";

export const PerfilMonitoria = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div>
        <PerfilMonitoriaForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
