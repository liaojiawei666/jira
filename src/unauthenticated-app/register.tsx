import { FormEvent, useState } from "react";
import { useAuth } from "context/auth-context";

export const RegisterScreen = () => {
  const { register, user } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"username"}>用户名</label>
        <input id={"username"} type={"text"} />
      </div>
      <div>
        <label htmlFor={"password"}>密码</label>
        <input id={"password"} type={"password"} />
        <button type={"submit"}>注册</button>
      </div>
    </form>
  );
};
