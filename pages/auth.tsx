import Input from "@/components/Input";
import axios from "axios";
import React, { useCallback, useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, [email, name, password]);

  // function register
  const register = useCallback(async () => {
    // console.log(">> thong tin dang ky: ", email, name, password);
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
    } catch (error) {
      console.log("Loi khi goi api cho register: ", error);
    }
  }, [email, name, password]);

  return (
    <>
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <img className="h-12" src="/images/logo.png" alt="Logo" />
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === "login" ? "Sign in" : "Register"}
              </h2>
              <div className="fex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    label="Username"
                    onChange={(ev: any) => setName(ev.target.value)}
                    id="name"
                    value={name}
                  />
                )}

                <Input
                  label="Email"
                  onChange={(ev: any) => setEmail(ev.target.value)}
                  id="email"
                  type="email"
                  value={email}
                />
                <Input
                  label="Password"
                  onChange={(ev: any) => setPassword(ev.target.value)}
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              <button
                onClick={register}
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              >
                {variant === "login" ? "Login" : "Sign up"}
              </button>
              <p className="text-neutral-500 mt-12 ">
                {variant === "login"
                  ? "First time using NetFlix?"
                  : "Already have an account?"}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
