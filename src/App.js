import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  CADASTRAR_USUARIO,
  PAGINA_INICIAL,
  CADASTRAR_CURSO,
  CADASTRAR_AVALIACAO,
  CADASTRAR_DISCIPLINA,
  CRIAR_MONITORIA,
  EDITAR_MONITORIA,
  MINHAS_MONITORIAS,
  LOGIN,
} from "./routes";

import { PaginaInicial } from "./pages/PaginaInicial";
import { CadastrarUsuario } from "./pages/Usuario/Cadastrar";
import { CadastrarCurso } from "./pages/Curso/Cadastrar";
import { Avaliacao } from "./pages/Avaliacao/Cadastrar";
import { CadastrarDisciplina } from "./pages/Cadastro/Disciplina";
import { CriarMonitoria } from "./pages/Cadastro/Monitoria/CriarMonitoria";
import { EditarMonitoria } from "./pages/Cadastro/Monitoria/EditarMonitoria";
import { MinhasMonitorias } from "./pages/Cadastro/Monitoria/MinhasMonitorias";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
        <Route exact path={CADASTRAR_USUARIO} element={<CadastrarUsuario />} />
        <Route exact path={CADASTRAR_CURSO} element={<CadastrarCurso />} />
        <Route exact path={CADASTRAR_AVALIACAO} element={<Avaliacao />} />
        <Route
          exact
          path={CADASTRAR_DISCIPLINA}
          element={<CadastrarDisciplina />}
        />
        <Route exact path={CRIAR_MONITORIA} element={<CriarMonitoria />} />
        <Route exact path={EDITAR_MONITORIA} element={<EditarMonitoria />} />
        <Route exact path={MINHAS_MONITORIAS} element={<MinhasMonitorias />} />
        <Route exact path={LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
