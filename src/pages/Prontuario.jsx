import { useParams } from "react-router-dom";
import { prontuarioDAO } from "../services/prontuarioDAO";
import { useState } from "react";

export default function Prontuario() {
  const { id } = useParams();
  const registros = prontuarioDAO.getByPacienteId(id);
  const [texto, setTexto] = useState("");

  const salvar = () => {
    prontuarioDAO.addEntry(id, texto);
    setTexto("");
    window.location.reload();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Prontuário</h1>

      <textarea
        className="border p-2 w-full h-32 mt-3"
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />

      <button
        onClick={salvar}
        className="px-4 py-2 mt-3 bg-green-600 text-white rounded"
      >
        Salvar
      </button>

      <h2 className="text-lg mt-6 font-bold">Histórico</h2>

      {registros.map(r => (
        <div key={r.id} className="border p-2 mt-2 rounded">
          <small>{new Date(r.data).toLocaleString()}</small>
          <p>{r.texto}</p>
        </div>
      ))}
    </div>
  );
}

