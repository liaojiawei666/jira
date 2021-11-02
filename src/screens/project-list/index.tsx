import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";

export const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const client = useHttp();
  const debouncedParams = useDebounce(params, 200);
  useMount(() => {
    client("users").then(setUsers);
  });

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParams) }).then(setList);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParams]);
  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List users={users} list={list} />
    </Container>
  );
};
const Container = styled.div`
  padding: 3.2rem;
`;
