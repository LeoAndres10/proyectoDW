
  'use client'
import Image from "next/image";
import Link from "next/link";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./(general)/login/page";
import InicioAlumno from "./(general)/InicioAlumno/page";

  import ReactDOM from 'react-dom/client';
  import React from 'react';
import { Plantilla } from "./Modelos/Plantilla";

 const Home=()=> {

  
  
      
    return (
 <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <h1>Pagina Inicial</h1>

        <Link href="/login" className="btn btn-info">Ir a la pagina de Login</Link>
      
      </main>
   
    </div>
    );
    
  }
  


export default Home;
