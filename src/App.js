import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import FormaPag from './Components/FormaPag';
import Info from './Components/Info';
import Loja from './Pages/Loja';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './Pages/Contato';
import FAQ from './Pages/FAQ';
import Politica from './Pages/Politica';
import Termos from './Pages/Termos';
import Rastrear from './Pages/Rastrear';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/rastrear-pedido" element={<Rastrear />} />
        <Route path="/termos-de-uso" element={<Termos />} />
        <Route path="/politica-de-privacidade" element={<Politica />} />
      </Routes>
      <FormaPag />
      <Info />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
