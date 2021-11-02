import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <button onClick={logout}>登出</button>
      </Header>
      <ProjectListScreen />
    </div>
  );
};

const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
