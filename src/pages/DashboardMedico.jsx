import { pacienteDAO } from "../services/pacienteDAO";
import { useNavigate } from "react-router-dom";

export default function DashboardMedico() {
  const pacientes = pacienteDAO.getAll();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Área do Médico</h1>

      {pacientes.map(p => (
        <div key={p.id} className="border p-3 mb-2 rounded">
          <p className="font-medium">{p.nome}</p>

          <button
            onClick={() => navigate(`/prontuario/${p.id}`)}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
          >
            Ver Prontuário
          </button>
        </div>
      ))}
    </div>
  );
}
