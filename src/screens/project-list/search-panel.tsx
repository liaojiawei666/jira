export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  setParams: (param: SearchPanelProps["params"]) => void;
}

export const SearchPanel = ({ params, setParams, users }: SearchPanelProps) => {
  return (
    <form>
      <input
        value={params.name}
        onChange={(evt) => setParams({ ...params, name: evt.target.value })}
      />
      <select
        onChange={(evt) => setParams({ ...params, personId: evt.target.value })}
      >
        <option value="">负责人</option>
        {users.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
