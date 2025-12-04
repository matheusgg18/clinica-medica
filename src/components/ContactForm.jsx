import { Card, Form, Input, Button, message } from "antd";

export default function ContactForm({ onAdd }) {
  const onFinish = (values) => {
    onAdd(values);
    message.success("Contato adicionado");
  };

  return (
    <Card>
      <h2 className="text-xl font-medium mb-4">Adicionar Contato</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
          <Input placeholder="Nome" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true },
            { type: "email", message: "Email inválido" },
          ]}
        >
          <Input placeholder="email@exemplo.com" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Adicionar
        </Button>
      </Form>
    </Card>
  );
}