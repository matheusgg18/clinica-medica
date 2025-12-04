import { Card, Button } from "antd";

export default function HighlightSection() {
  return (
    <Card className="mt-6">
      <h2 className="text-lg font-medium">Seção de Destaque</h2>

      <p className="mt-2 text-gray-700">
        Use este espaço para colocar informações importantes.
      </p>

      <div className="mt-4">
        <Button type="primary">Ação Principal</Button>
        <Button className="ml-2">Ação Secundária</Button>
      </div>
    </Card>
  );
}