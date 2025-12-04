import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contatos from "../pages/Contatos/Contatos";
import Adicionar from "../pages/Adicionar/Adicionar";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/adicionar" element={<Adicionar />} />
    </Routes>
  );
}
