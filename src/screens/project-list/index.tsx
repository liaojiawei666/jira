import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useState } from "react";
import { useDebounce, useDocumentTitle } from "../../utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "../../utils/project";
import { useUsers } from "../../utils/user";

export const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  useDocumentTitle("项目列表", false);
  const debouncedParams = useDebounce(params, 200);
  const { data: users } = useUsers();
  const { isLoading, data: list, error } = useProjects(debouncedParams);
  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel params={params} setParams={setParams} users={users || []} />
      {error ? (
        <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};
const Container = styled.div`
  padding: 3.2rem;
`;
