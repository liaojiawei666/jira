import { useArray } from "./utils";

interface Person {
  name: string;
  age: number;
}

export const TsReactTest = () => {
  const persons: Person[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray<Person>(persons);
  return (
    <>
      <button onClick={() => add({ name: "john", age: 18 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((item, index) => {
        return <div>{index + item.name}</div>;
      })}
    </>
  );
};
