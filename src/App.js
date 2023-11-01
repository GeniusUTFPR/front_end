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
  CADASTRAR_MONITOR,
  LOGIN,
  PERFIL,
  EDITAR_PERFIL,
  SER_MONITOR,
  CADASTRAR_PALUNO,
  LISTAR_PALUNO,
  EDITAR_PALUNO,
  MINHAS_MONITORIAS,
  LISTAR_MONITORIA_PALUNO,
  EXIBIR_MONITORIA,
  LISTAR_MONITORIAS_EXTERNAS,
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
  ListarCursos,
  Perfil,
  EditarPerfil,
  Monitor,
  SerMonitor,
  MonitoriaPaluno,
  CadastrarPaluno,
  ListarPaluno,
  EditarPaluno,
  MinhasMonitorias,
  ExibirMonitoria,
  ListarMonitoriasExternas,
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
          <Route path={SER_MONITOR} element={<SerMonitor />} />

          <Route path={CADASTRAR_CURSO} element={<CadastrarCurso />} />
          <Route path={LISTAR_CURSOS} element={<ListarCursos />} />

          <Route
            path={CADASTRAR_DISCIPLINA}
            element={<CadastrarDisciplina />}
          />
          <Route path={LISTAR_DISCIPLINAS} element={<ListarDisciplinas />} />

          <Route path={CADASTRAR_MONITORIA} element={<CadastrarMonitoria />} />
          <Route path={MINHAS_MONITORIAS} element={<MinhasMonitorias />} />
          <Route path={EDITAR_MONITORIA} element={<EditarMonitoria />} />

          <Route path={LISTAR_MONITORIA_PALUNO} element={<MonitoriaPaluno />} />
          <Route path={EXIBIR_MONITORIA} element={<ExibirMonitoria />} />
          <Route path={LISTAR_MONITORIAS_EXTERNAS} element={<ListarMonitoriasExternas />} />
          <Route path={CADASTRAR_AVALIACAO} element={<Avaliacao />} />


          <Route path={CADASTRAR_PALUNO} element={<CadastrarPaluno />} />
          <Route path={LISTAR_PALUNO} element={<ListarPaluno />} />
          <Route path={EDITAR_PALUNO} element={<EditarPaluno />} />
          <Route path={CADASTRAR_MONITOR} element={<Monitor />} />
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
