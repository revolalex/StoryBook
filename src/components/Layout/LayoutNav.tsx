import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./LayoutNav.css";
import { CSSProperties } from "react";
import React from "react";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface LayoutNavProps {
  LayoutClassName?: string;
  style?: CSSProperties;
  siderBreakpoint?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  collapsed?: boolean;
  siderWidth?: number | string;
  siderClassName?: string;
  defaultCollapsed?: boolean;
  reverseArrow?: boolean;
  siderTheme?: "light" | "dark";
  menuTheme?: "light" | "dark";
  children?: React.ReactNode;
}

const LayoutNav = (props: LayoutNavProps) => {
  const [collapsed, setCollapsed] = React.useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className={props.LayoutClassName} style={props.style}>
      <Header className="header">
        <Menu theme={props.menuTheme ||"dark"} mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          theme={props.siderTheme || "light"}
          reverseArrow={props.reverseArrow}
          defaultCollapsed={props.defaultCollapsed}
          width={props.siderWidth || 200}
          className={props.siderClassName || "site-layout-background"}
          breakpoint={props.siderBreakpoint}
        >
          <div className="logo" />
          <Menu theme={props.siderTheme ||"light"} defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div style={{ minHeight: "80vh", margin: '3em' }} >
              {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutNav;
