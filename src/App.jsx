import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import RoutesApp from "./router/routes";

const { Header, Content } = Layout;

export default function App() {
  return (
    <Layout className="min-h-screen">
      <Sidebar />

      <Layout>
        <Header className="bg-white shadow px-6 flex items-center">
          <h1 className="text-xl font-semibold">Gestão de Médicos</h1>
        </Header>

        <Content className="p-6">
          <RoutesApp />
        </Content>
      </Layout>
    </Layout>
  );
}