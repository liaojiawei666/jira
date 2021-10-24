export const SearchPanel = ({ params, setParams, users }) => {
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
