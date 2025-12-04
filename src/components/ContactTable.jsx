import { Avatar, Button, Card, Table, message } from "antd";

export default function ContactTable({ data }) {
  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="flex items-center gap-3">
          <Avatar>{text[0]}</Avatar>
          <span>{text}</span>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Ações",
      key: "actions",
      render: (_, record) => (
        <Button
          size="small"
          onClick={() => message.info(`Email enviado para ${record.email}`)}
        >
          Enviar e-mail
        </Button>
      ),
    },
  ];

  return (
    <Card className="col-span-2">
      <h2 className="text-xl font-medium mb-4">Lista de Contatos</h2>
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
    </Card>
  );
}