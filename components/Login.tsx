import Link from 'next/link';
import { Button } from "./ui/button";

const Login = () => {
    const isLoggedIn = false; // Kullanıcı giriş durumunu kontrol etmek için değişken

    return (
        <div className="flex justify-between items-center p-4 bg-primary-black text-white">
            <div>
                {isLoggedIn ? (
                    <Button
                        onClick={() => console.log('Logout')}
                        className="bg-red-500 hover:bg-red-700 text-white"
                    >
                        Logout
                    </Button>
                ) : (
                    <>
                    <Link href="/sign-in" passHref>
                        <Button  className="bg-blue-500 hover:bg-blue-700 text-white mr-2">
                            Sign in
                        </Button>
                    </Link>
                    <Link href="/sign-up" passHref>
                        <Button  className="bg-blue-500 hover:bg-blue-700 text-white">
                            Sign Up
                        </Button>
                    </Link>
                </>
                )}
            </div>
        </div>
    );
};

export default Login;