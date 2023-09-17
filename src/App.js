import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PAGINA_INICIAL } from "./routes/routes";
import { CADASTRO } from "./routes/routes";

import { PaginaInicial } from "./pages/PaginaInicial/paginaInicial";
import { Cadastro } from "./pages/Cadastro/Cadastro";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
        <Route exact path={CADASTRO} element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};
