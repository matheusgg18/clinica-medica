import { Layout, Menu, Button } from "antd";
import { HomeOutlined, MailOutlined, UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

export default function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">

      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        className="bg-white"
      >
        <div className="h-16 flex items-center justify-center text-xl font-bold">
          MySite
        </div>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", icon: <HomeOutlined />, label: "Início" },
            { key: "2", icon: <MailOutlined />, label: "Contatos" },
            { key: "3", icon: <UserAddOutlined />, label: "Adicionar" },
          ]}
        />
      </Sider>

      <Layout>
        <Header className="flex items-center justify-between px-6 bg-white shadow-sm">
          <h1 className="text-2xl font-semibold">
            Site simples — React + Ant Design
          </h1>

          <div className="flex items-center gap-3">
            <Button>Entrar</Button>
            <Button type="primary">Cadastrar</Button>
          </div>
        </Header>

        <Content className="p-6 bg-gray-50">{children}</Content>

        <Footer className="text-center">
          © {new Date().getFullYear()} - Meu site simples
        </Footer>
      </Layout>
    </Layout>
  );
}