import { useState } from "react";
import { medicoDAO } from "../services/medicoDAO";

export default function CadastroMedico() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });

  const salvar = () => {
    medicoDAO.save(form);
    alert("Médico cadastrado!");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-3">Cadastro de Médico</h1>

      <input className="border p-2 block mb-3" placeholder="Nome"
        onChange={e => setForm({ ...form, nome: e.target.value })} />

      <input className="border p-2 block mb-3" placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input type="password" className="border p-2 block mb-3" placeholder="Senha"
        onChange={e => setForm({ ...form, senha: e.target.value })} />

      <button onClick={salvar}
        className="px-4 py-2 bg-green-600 text-white rounded">
        Salvar
      </button>
    </div>
  );
}
