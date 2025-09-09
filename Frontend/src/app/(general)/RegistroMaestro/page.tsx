'use client'
import React, { useState } from 'react'
import { registro, registroMaestro } from '@/app/Servicios/Api';
import { useRouter } from 'next/navigation';

export default function RegistroAlumno() {
  const [nombreAlumno, setNombreAlumno] = useState<string>('');
  const [contraseña, setContraseña] = useState<string>('');
  const [modulos, setModulos] = useState<string>('');
const [materias, setMaterias] = useState<string>('');
  const [estado, setEstado] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombreAlumno || !contraseña || !modulos || !materias || !estado) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    // Aqui se llamara la Api
    registroMaestro({ nombreAlumno, contraseña, modulos, materias, estado });
    setMensaje('Registro exitoso');
    alert('Registro Exitoso')
    setTimeout(() => {
      router.push('/InicioMaestro'); 
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registro de Maestro
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Maestro
            </label>
            <input
              type="text"
              placeholder="Nombre Maestro"
              value={nombreAlumno}
              onChange={(e) => setNombreAlumno(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Modulos
            </label>
            <input
              type="text"
              placeholder="Modulos"
              value={modulos}
              onChange={(e) => setModulos(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Materias
            </label>
            <input
              type="text"
              placeholder="Materias"
              value={materias}
              onChange={(e) => setMaterias(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Registrar Maestro
          </button>
        </form>

        {mensaje && (
          <p className="text-center mt-4 text-sm text-gray-600">{mensaje}</p>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push('/login')}
            className="text-blue-500 hover:underline"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
}
