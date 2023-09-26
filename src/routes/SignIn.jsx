import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().trim().email("Invalid email"),
  password: z.string().trim().min(8, "Password must be at least 8 characters"),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <main>
      <div className="container">
        <h1>Sign in page</h1>

        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div>
            <label>Email:</label>
            <input {...register("email")} type="email" placeholder="Email" />

            <ErrorMessage errors={errors} name="email" />
          </div>

          <div>
            <label>Password:</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />

            <ErrorMessage errors={errors} name="password" />
          </div>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
