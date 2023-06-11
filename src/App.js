import { GlobalStyles } from "./Components/GlobalStyles.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio/Inicio.js";
import NovoVideo from "./Pages/NovoVideo/NovoVideo.js";
import Cabecalho from "./Components/Cabecalho/Cabecalho.js";
import Rodape from "./Components/Rodape/Rodape.js";



function App() {

  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        
        <Cabecalho />

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/novovideo" element={<NovoVideo />} />
        </Routes>

        <Rodape />

      </BrowserRouter>
    </>
  );
}

export default App;
