import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import * as qs from "qs";
import { cleanObject, useDebounce } from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);
  const debouncedParams = useDebounce(params, 5000);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(params))}`).then(
      async (response) => {
        if (response.ok) {
          let res = await response.json();
          setList(res);
        }
      }
    );
  }, [debouncedParams]);
  return (
    <>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List users={users} list={list} />
    </>
  );
};
