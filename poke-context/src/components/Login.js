import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";


export default function Login() {
  const { isLogged, setAuth } = useContext(UserContext);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setAuth();
    history.push("/");
    console.log(data);
  }

  return isLogged ? (
    <div>
      <div onClick={onSubmit}>
        Logout
      </div>
    </div>
  ) : (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true, maxLength:15 })} />
        {errors.username && <span>Please enter a username .</span>}
        <input {...register("password", { required: true, maxLength:6 })} />
        {errors.password && <span>Please enter a password.</span>}
        <input type="submit" />
      </form>
    </div>
  );
}