import React from 'react';
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
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