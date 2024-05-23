// pages/sign-in.tsx
"use client";
import { useState, FormEvent } from 'react';
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

interface LoginForm {
    email: string;
    password: string;
}

const SignIn = () => {
    const [login, setLogin] = useState<LoginForm>({ email: '', password: '' });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Login Attempt:', login);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
                <h1 className="text-xl font-bold text-center">User Sign-In</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        type="email"
                        name="email"
                        value={login.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="w-full"
                    />
                    <Input
                        type="password"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                        required
                        placeholder="Password"
                        className="w-full"
                    />
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white">
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
