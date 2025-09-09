'use client'
import React from 'react'
import Link from 'next/link'
import Login from '../src/app/(general)/login/page'
import InicioAlumno from '@/app/(general)/InicioAlumno/page'
import InicioAdmin from '@/app/(general)/InicioAdmin/page'
import Inicio from '../src/app/page'
export default function Navegacion() {
  return (
    <div>
     <nav>
      <Link href="/">Inicio</Link>
      <Link href="/login">Login</Link>
    </nav>
    </div>
  )
}
