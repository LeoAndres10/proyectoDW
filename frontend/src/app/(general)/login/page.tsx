'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { login } from '../../Servicios/Api';
import Link from 'next/link';
import { useNavigate } from 'react-router-dom';

 const Page =()=> {
  const [nombreAlumno, setNombreAlumno] = useState<string>('');
  const [contraseña, setContraseña] = useState<string>('');
  const [mensaje, setMensaje] = useState('');

  function validaciones(){
if (nombreAlumno==='' || contraseña==='') {
    alert('Todos los campos son necesarios')
     window.location.reload();
}
  }




  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          value={nombreAlumno}
          onChange={e => setNombreAlumno(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Contraseña"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)}
        /><br />
        <button onClick={()=>{login({nombreAlumno,contraseña});validaciones();}}><Link href={'/InicioAlumno'}> Iniciar Sesion</Link> </button>
      </form>
    
  <button><Link href={'/RegistroAlumno'}> Nuevo Usuario? Registrate</Link> </button>

    </div>
  );

  
}
export default Page;

