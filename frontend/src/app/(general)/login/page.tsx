'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/Servicios/Api';
import InicioAdmin from '../InicioAdmin/page';
const Page = () => {
  const [nombreAlumno, setNombreAlumno] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const router = useRouter();

 const loginActualizado = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setMensaje('')

    try {
      const data = await login({ nombreAlumno, contraseña })

      if (data.success===true && data.noUser===false) {
        setMensaje('Login Exitoso')
        alert('Login exitoso')
        router.push('/InicioAlumno')  
      } else if (data.noUser===true && data.success===false) {
        setMensaje('Login Exitoso')
        alert('Login Exitoso')
        router.push('/InicioMaestro')
      } else if (data.ad===true && data.success===true && data.noUser===true) {
         setMensaje('Login Exitoso')
         alert('Login Exitoso')
        router.push('/InicioAdmin')
      }else{
        setMensaje('Credenciales incorrectas')
      }
    } catch (err) {
      setMensaje('Error de conexión')
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
        
        <form onSubmit={loginActualizado} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Usuario"
              value={nombreAlumno}
              onChange={(e) => setNombreAlumno(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {mensaje && (
          <p className="text-center mt-4 text-sm text-red-500">{mensaje}</p>
        )}

        <div className="mt-6 text-center">
          <button 
            onClick={() => router.push('/RegistroAlumno')}
            className="text-blue-500 hover:underline"
          >
            ¿Nuevo usuario Alumno? Regístrate
          </button>
          <button 
            onClick={() => router.push('/RegistroMaestro')}
            className="text-blue-500 hover:underline"
          >
            ¿Nuevo usuario Maestro? Regístrate
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Page;

