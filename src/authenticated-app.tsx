import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Dropdown, Menu } from "antd";
import { log } from "util";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <div>
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
                <a onClick={logout}>登出</a>
              </Menu.Item>
            </Menu>
          }
        >
          <a onClick={(e) => e.preventDefault()}>Hi,{user?.name}</a>
        </Dropdown>
      </Header>
      <ProjectListScreen />
    </div>
  );
};

const Header = styled(Row)`
  padding: 1rem 3.2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
const HeaderLeft = styled(Row)``;
