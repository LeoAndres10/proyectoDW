"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("username");

    if (!token) {
      router.push("/login");
    } else {
      setUsername(storedUser);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    router.push("/login");
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8">
      {username && (
        <p className="text-lg mb-4">👋 Bienvenido, {username}!</p>
      )}

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded mt-4"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

