import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Sider collapsible className="bg-white shadow">
      <div className="h-16 flex items-center justify-center text-xl font-bold">
        Médicos
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Início",
            onClick: () => navigate("/"),
          },
          {
            key: "2",
            icon: <UserOutlined />,
            label: "Contatos",
            onClick: () => navigate("/contatos"),
          },
          {
            key: "3",
            icon: <PlusOutlined />,
            label: "Adicionar Médico",
            onClick: () => navigate("/adicionar"),
          },
        ]}
      />
    </Sider>
  );
}
