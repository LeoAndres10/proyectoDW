'use client'
import React, { useState } from 'react'
import { registro } from '@/app/Servicios/Api';
import  Link  from 'next/link';
export default function RegistroAlumno() {


    const [nombreAlumno,setNombreAlumno] = useState<string>('');
     const [contraseña,setContraseña] = useState<string>('');
      const [modulo,setModulo] = useState<string>('');
       const [estado,setEstado] = useState<string>('');


       
  return (
    <div> <form >
      <h2>Registro de Alumno</h2>

      <div>
        <label>Nombre del Alumno:</label><br />
        <input
          type="text"
          placeholder='Nombre Alumno'
          name="nombreAlumno"
          value={nombreAlumno}
          onChange={(e)=>setNombreAlumno(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Contraseña:</label><br />
        <input
          type="text"
          placeholder='Contraseña'
          name="contraseña"
          value={contraseña}
          onChange={(e)=>setContraseña(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Módulo:</label><br />
        <input
            type='text'
          name="modulo"
        placeholder='Modulo'
          value={modulo}
          onChange={(e)=>setModulo(e.target.value)}
          required
        ></input>
          
       
      </div>

      <div>
        <label>Estado:</label><br />
        <input
            type='text'
          name="estado"
        placeholder='Estado'
          value={estado}
          onChange={(e)=>setEstado(e.target.value)}
          required
        ></input>
       
      </div>

      <button onClick={(e=>registro({nombreAlumno,contraseña,modulo,estado}))}><Link href={'/InicioAlumnno'}></Link>Registrar Alumno</button>
    </form>
  ;</div>
  )
}
