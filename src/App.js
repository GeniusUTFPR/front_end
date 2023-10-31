import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {
  CADASTRAR_USUARIO,
  PAGINA_INICIAL,
  CADASTRAR_CURSO,
  LISTAR_CURSOS,
  CADASTRAR_AVALIACAO,
  CADASTRAR_DISCIPLINA,
  LISTAR_DISCIPLINAS,
  CADASTRAR_MONITORIA,
  EDITAR_MONITORIA,
  LISTAR_MONITORIAS,
  LISTAR_TODAS_MONITORIAS,
  PERFIL_MONITORIA,
  CADASTRAR_MONITOR,
  LOGIN,
  PERFIL,
  MONITORIA_PALUNO,
  MONITORIA_OFICIAL,
} from "./routes";

import {
  PaginaInicial,
  CadastrarUsuario,
  Login,
  CadastrarCurso,
  Avaliacao,
  CadastrarDisciplina,
  ListarDisciplinas,
  ListarTodasMonitorias,
  CadastrarMonitoria,
  EditarMonitoria,
  ListarMonitorias,
  PerfilMonitoria,
  ListarCursos,
  Perfil,
  Monitor,
  MonitoriaPaluno,
  MonitoriaOficial
} from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
        <Route exact path={PERFIL} element={<Perfil />} />
        <Route exact path={CADASTRAR_USUARIO} element={<CadastrarUsuario />} />
        <Route exact path={CADASTRAR_CURSO} element={<CadastrarCurso />} />
        <Route exact path={LISTAR_CURSOS} element={<ListarCursos />} />
        <Route exact path={CADASTRAR_AVALIACAO} element={<Avaliacao />} />
        <Route exact path={MONITORIA_PALUNO} element={<MonitoriaPaluno />} />
        <Route exact path={MONITORIA_OFICIAL} element={<MonitoriaOficial />} />
        <Route
          exact
          path={CADASTRAR_DISCIPLINA}
          element={<CadastrarDisciplina />}
        />
        <Route
          exact
          path={LISTAR_DISCIPLINAS}
          element={<ListarDisciplinas />}
        />
        <Route
          exact
          path={LISTAR_TODAS_MONITORIAS}
          element={<ListarTodasMonitorias />}
        />
        <Route
          exact
          path={CADASTRAR_MONITORIA}
          element={<CadastrarMonitoria />}
        />
        <Route exact path={CADASTRAR_MONITOR} element={<Monitor />} />
        <Route exact path={EDITAR_MONITORIA} element={<EditarMonitoria />} />
        <Route exact path={LISTAR_MONITORIAS} element={<ListarMonitorias />} />
        <Route exact path={PERFIL_MONITORIA} element={<PerfilMonitoria />} />
        <Route exact path={LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};
