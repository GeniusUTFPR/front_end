import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CADASTRAR_CURSO, PAGINA_INICIAL } from "./routes/routes";
import { CADASTRO } from "./routes/routes";
import { AVALIACAO } from "./routes/routes";

import { PaginaInicial } from "./pages/PaginaInicial";
import { Cadastro } from "./pages/Cadastro";
import { CadastrarCurso } from "./pages/CadastrarCurso";
import { Avaliacao } from "./pages/Avaliacao";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
        <Route exact path={CADASTRO} element={<Cadastro />} />
        <Route exact path={CADASTRAR_CURSO} element={<CadastrarCurso />} />
        <Route exact path={AVALIACAO} element={<Avaliacao />} />
      </Routes>
    </BrowserRouter>
  );
};
