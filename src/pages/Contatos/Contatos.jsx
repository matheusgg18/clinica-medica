import { useState, useEffect } from "react";
import {
  Table,
  Card,
  Button,
  Modal,
  Input,
  Select,
  message,
} from "antd";
import {
  getAllMedicos,
  deleteMedico,
  updateMedico,
} from "../../services/medicoService";
import MedicoForm from "../../components/MedicoForm";

export default function Contatos() {
  const [lista, setLista] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    setLista(getAllMedicos());
  }, []);

  function handleDelete(id) {
    deleteMedico(id);
    setLista(getAllMedicos());
    message.success("Médico removido");
  }

  function handleEdit(values) {
    updateMedico(editando.id, {
      ...values,
      id: editando.id,
      nascimento: values.nascimento?.format("YYYY-MM-DD"),
    });

    setLista(getAllMedicos());
    setEditando(null);
    message.success("Médico atualizado");
  }

  const filtrado = lista.filter((m) => {
    const matchBusca =
      m.nome.toLowerCase().includes(busca.toLowerCase()) ||
      m.email.toLowerCase().includes(busca.toLowerCase());

    const matchFiltro =
      !filtro || m.especialidade === filtro;

    return matchBusca && matchFiltro;
  });

  return (
    <Card title="Lista de Médicos">
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Buscar por nome ou email..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <Select
          placeholder="Filtrar especialidade"
          allowClear
          className="w-60"
          onChange={setFiltro}
          options={[
            { label: "Cardiologia", value: "Cardiologia" },
            { label: "Ortopedia", value: "Ortopedia" },
            { label: "Pediatria", value: "Pediatria" },
            { label: "Clínico Geral", value: "Clínico Geral" },
          ]}
        />
      </div>

      <Table
        dataSource={filtrado}
        rowKey="id"
        columns={[
          { title: "Nome", dataIndex: "nome" },
          { title: "Email", dataIndex: "email" },
          { title: "CRM", dataIndex: "crm" },
          { title: "Especialidade", dataIndex: "especialidade" },
          {
            title: "Ações",
            render: (record) => (
              <div className="flex gap-2">
                <Button
                  type="primary"
                  onClick={() => setEditando(record)}
                >
                  Editar
                </Button>

                <Button danger onClick={() => handleDelete(record.id)}>
                  Excluir
                </Button>
              </div>
            ),
          },
        ]}
      />

      <Modal
        open={!!editando}
        onCancel={() => setEditando(null)}
        footer={null}
        title="Editar Médico"
      >
        <MedicoForm initialValues={editando} onSubmit={handleEdit} />
      </Modal>
    </Card>
  );
}
