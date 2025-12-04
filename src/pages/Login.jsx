import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pacienteDAO } from "../services/pacienteDAO";
import { medicoDAO } from "../services/medicoDAO";

export default function Login() {
  const [tipo, setTipo] = useState("paciente");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const DAO = tipo === "paciente" ? pacienteDAO : medicoDAO;
    const user = DAO.login(email, senha);

    if (user) {
      localStorage.setItem("user", JSON.stringify({ ...user, tipo }));
      navigate(tipo === "paciente" ? "/paciente" : "/medico");
    } else {
      alert("Email ou senha incorretos");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-3">Login</h1>

      <select
        className="border p-2 mb-3"
        value={tipo}
        onChange={e => setTipo(e.target.value)}
      >
        <option value="paciente">Paciente</option>
        <option value="medico">Médico</option>
      </select>

      <input
        className="border p-2 block mb-3"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 block mb-3"
        placeholder="Senha"
        onChange={e => setSenha(e.target.value)}
      />

      <button
        onClick={login}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Entrar
      </button>
    </div>
  );
}
