import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ProjectScreen } from "./screens/project";

export const AuthenticatedApp = () => {
  return (
    <div>
      <PageHeader />
      <BrowserRouter>
        <Routes>
          <Route path={"/projects"} element={<ProjectListScreen />} />
          <Route path={"/projects/:projectId/*"} element={<ProjectScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key={"logout"}>
              <Button type={"link"} onClick={logout}>
                登出
              </Button>
            </Menu.Item>
          </Menu>
        }
      >
        <Button type={"link"} onClick={(e) => e.preventDefault()}>
          Hi,{user?.name}
        </Button>
      </Dropdown>
    </Header>
  );
};
const Header = styled(Row)`
  padding: 1rem 3.2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
const HeaderLeft = styled(Row)``;
