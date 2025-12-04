import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Contatos from "../pages/Contatos/Contatos";
import Adicionar from "../pages/Adicionar/Adicionar";

// 🔥 Novas páginas:
import Login from "../pages/Login";
import CadastroPaciente from "../pages/CadastroPaciente";
import CadastroMedico from "../pages/CadastroMedico";
import DashboardMedico from "../pages/DashboardMedico";
import Prontuario from "../pages/Prontuario";

export default function RoutesApp() {
  return (
    <Routes>

      {/* ROTAS ANTIGAS — continuam funcionando */}
      <Route path="/" element={<Home />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/adicionar" element={<Adicionar />} />

      {/* 🔥 NOVAS ROTAS — adicionadas sem quebrar nada */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro-paciente" element={<CadastroPaciente />} />
      <Route path="/cadastro-medico" element={<CadastroMedico />} />
      <Route path="/medico" element={<DashboardMedico />} />
      <Route path="/prontuario/:id" element={<Prontuario />} />

    </Routes>
  );
}