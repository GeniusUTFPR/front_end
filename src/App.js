import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CADASTRAR_USUARIO, PAGINA_INICIAL, CADASTRAR_CURSO, CADASTRAR_AVALIACAO } from "./routes";

import { PaginaInicial } from "./pages/PaginaInicial";
import { Cadastro } from "./pages/Cadastro";
import { CadastrarCurso } from "./pages/Curso/Cadastrar";
import { Avaliacao } from "./pages/Avaliacao/Cadastrar";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
        <Route exact path={CADASTRAR_USUARIO} element={<Cadastro />} />
        <Route exact path={CADASTRAR_CURSO} element={<CadastrarCurso />} />
        <Route exact path={CADASTRAR_AVALIACAO} element={<Avaliacao />} />
      </Routes>
    </BrowserRouter>
  );
};
