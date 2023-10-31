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
  PERFIL_MONITORIA,
  CADASTRAR_MONITOR,
  LOGIN,
  PERFIL,
  EDITAR_PERFIL,
} from "./routes";

import {
  PaginaInicial,
  CadastrarUsuario,
  Login,
  CadastrarCurso,
  Avaliacao,
  CadastrarDisciplina,
  ListarDisciplinas,
  CadastrarMonitoria,
  EditarMonitoria,
  ListarMonitorias,
  PerfilMonitoria,
  ListarCursos,
  Perfil,
  EditarPerfil,
  Monitor,
} from "./pages";

import isAuthenticated from "./services/auth";


export const App = () => {
  return (
    <BrowserRouter>
      {isAuthenticated() ? (
        <Routes>
          <Route path={PAGINA_INICIAL} element={<PaginaInicial />} />
          <Route path={PERFIL} element={<Perfil />} />
          <Route path={EDITAR_PERFIL} element={<EditarPerfil />} />
          <Route path={CADASTRAR_CURSO} element={<CadastrarCurso />} />
          <Route path={LISTAR_CURSOS} element={<ListarCursos />} />
          <Route path={CADASTRAR_AVALIACAO} element={<Avaliacao />} />
          <Route
            path={CADASTRAR_DISCIPLINA}
            element={<CadastrarDisciplina />}
          />
          <Route
            path={LISTAR_DISCIPLINAS}
            element={<ListarDisciplinas />}
          />
          <Route
            path={CADASTRAR_MONITORIA}
            element={<CadastrarMonitoria />}
          />
          <Route path={CADASTRAR_MONITOR} element={<Monitor />} />
          <Route path={EDITAR_MONITORIA} element={<EditarMonitoria />} />
          <Route path={LISTAR_MONITORIAS} element={<ListarMonitorias />} />
          <Route path={PERFIL_MONITORIA} element={<PerfilMonitoria />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={CADASTRAR_USUARIO} element={<CadastrarUsuario />} />
          <Route path="*" element={<Navigate to={LOGIN} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
