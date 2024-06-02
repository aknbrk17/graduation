"use client"; // Bileşeni istemci bileşeni olarak işaretler

import { useState, FormEvent } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation"; // next/navigation kullanarak yönlendirme

interface SignInForm {
  username: string;
  email: string;
  password: string;
}

const SignIn = () => {
  const [user, setUser] = useState<SignInForm>({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5254/api/User/login",
        {
          Username: user.username,
          Email: user.email,
          Password: user.password,
        }
      );
      console.log("User Signed In:", response.data);
      localStorage.setItem("userId", response.data.userId); // Ensure this is set correctly
      localStorage.setItem("username", response.data.username);
      console.log("Stored User ID:", localStorage.getItem("userId"));
      router.push("/");
    } catch (error) {
      console.error("Error signing in user", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
        <h1 className="text-xl font-bold text-center">User Sign-In</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            placeholder="Username"
            className="w-full"
          />
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full"
          />
          <Input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="w-full"
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
