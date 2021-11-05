import { Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import { KanbanScreen } from "../kanban";
import { EpicScreen } from "../epic";

export const ProjectScreen = () => {
  return (
    <>
      <h1>ProjectScreen</h1>
      <Link to={"./kanban"}>看板</Link>
      <Link to={"./epic"}>任务组</Link>
      <Routes>
        <Route path={"/kanban"} element={<KanbanScreen />} />
        <Route path={"/epic"} element={<EpicScreen />} />
        <Route index element={<Navigate to={"kanban"} replace={true} />} />
      </Routes>
    </>
  );
};
