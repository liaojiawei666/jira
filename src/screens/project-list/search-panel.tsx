import { Form, Input, Select } from "antd";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
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
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          value={params.name}
          onChange={(evt) => setParams({ ...params, name: evt.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={params.personId}
          onChange={(value) => setParams({ ...params, personId: value })}
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((user) => {
            return (
              <Select.Option key={user.id} value={String(user.id)}>
                {user.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
};
