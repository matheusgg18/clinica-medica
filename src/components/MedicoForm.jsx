import { Form, Input, Button, DatePicker, Select } from "antd";
import InputMask from "react-input-mask";
import dayjs from "dayjs";

export default function MedicoForm({ onSubmit, initialValues }) {
  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      initialValues={{
        ...initialValues,
        nascimento: initialValues?.nascimento
          ? dayjs(initialValues.nascimento)
          : null,
      }}
    >
      <Form.Item
        name="nome"
        label="Nome"
        rules={[{ required: true, message: "Nome obrigatório" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Email obrigatório" },
          { type: "email", message: "Formato inválido" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="telefone" label="Telefone">
        <InputMask mask="(99) 99999-9999">
          {(inputProps) => <Input {...inputProps} />}
        </InputMask>
      </Form.Item>

      <Form.Item name="crm" label="CRM">
        <Input placeholder="Ex: 123456 / UF" />
      </Form.Item>

      <Form.Item name="especialidade" label="Especialidade">
        <Select
          options={[
            { label: "Cardiologia", value: "Cardiologia" },
            { label: "Ortopedia", value: "Ortopedia" },
            { label: "Pediatria", value: "Pediatria" },
            { label: "Clínico Geral", value: "Clínico Geral" },
          ]}
        />
      </Form.Item>

      <Form.Item name="nascimento" label="Data de Nascimento">
        <DatePicker className="w-full" format="DD/MM/YYYY" />
      </Form.Item>

      <Button htmlType="submit" type="primary" block>
        Salvar
      </Button>
    </Form>
  );
}
