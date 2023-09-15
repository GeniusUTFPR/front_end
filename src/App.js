import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PAGINA_INICIAL } from "./routes/routes";

import { PaginaInicial } from "./pages/PaginaInicial/PaginaInicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
