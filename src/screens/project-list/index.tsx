import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
import { useHttp } from "../../utils/http";

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
  }, [debouncedParams]);
  return (
    <>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List users={users} list={list} />
    </>
  );
};
