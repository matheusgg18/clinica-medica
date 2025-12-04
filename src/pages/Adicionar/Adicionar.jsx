import { message, Card } from "antd";
import { saveMedico } from "../../services/medicoService";
import MedicoForm from "../../components/MedicoForm";
import { useNavigate } from "react-router-dom";

export default function Adicionar() {
  const navigate = useNavigate();

  function handleSave(values) {
    saveMedico({
      id: Date.now(),
      ...values,
      nascimento: values.nascimento?.format("YYYY-MM-DD") || null,
    });

    message.success("Médico cadastrado!");
    navigate("/contatos");
  }

  return (
    <Card title="Adicionar Médico">
      <MedicoForm onSubmit={handleSave} />
    </Card>
  );
}
