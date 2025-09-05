"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username === "admin" && password === "1234") {
      localStorage.setItem("token", "fake-token-1234");
      localStorage.setItem("username", username); //Guardamos el usuario
      router.push("/");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-72 bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded"
        >
          Ingresar
        </button>
      </form>

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}

