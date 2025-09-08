'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function InicioAdmin() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user !== 'Admin') {
      router.replace('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/*Header*/}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Panel de Administrador</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/*Alumnos*/}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Ver Alumnos</h2>
          <p className="text-sm text-gray-600 mb-4">
            Consulta la lista completa de alumnos registrados en el sistema.
          </p>
          <button
            onClick={() => router.push('/listaAlumnos')} //Traer desde la Api
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Ir a alumnos
          </button>
        </div>

        {/*Horarios*/}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Ver Horarios</h2>
          <p className="text-sm text-gray-600 mb-4">
            Consulta y administra los horarios de clases.
          </p>
          <button
            onClick={() => router.push('/listaHorarios')} //traer desde la api
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Ir a horarios
          </button>
        </div>

        {/*Maestros*/}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Ver Maestros</h2>
          <p className="text-sm text-gray-600 mb-4">
            Revisa la lista de maestros registrados en el sistema.
          </p>
          <button
            onClick={() => router.push('/listaMaestros')} //traer de la api
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Ir a maestros
          </button>
        </div>

      </main>
    </div>
  );
}
