import Link from 'next/link';
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    router.push("/sign-in");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-primary-black text-white">
      <div>
        {isLoggedIn ? (
          <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white">
            Logout
          </Button>
        ) : (
          <>
            <Link href="/sign-in" passHref>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white mr-2">
                Sign in
              </Button>
            </Link>
            <Link href="/sign-up" passHref>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white">
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
