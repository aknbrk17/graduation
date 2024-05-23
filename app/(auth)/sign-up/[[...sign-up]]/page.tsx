// pages/register.tsx
"use client";
import { useState, FormEvent } from 'react';
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

interface UserForm {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const [user, setUser] = useState<UserForm>({ name: '', email: '', password: '' });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('User Registered:', user);
        // Burada backend'e gönderme işlemi yapılabilir
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
                <h1 className="text-xl font-bold text-center">User Sign-Up</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
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
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
