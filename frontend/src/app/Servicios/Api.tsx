// archivo api.ts o similar
import axios from "axios";

const apiURL = "http://localhost:5000";

export async function login(userData: { nombreAlumno: string, contraseña: string }) {
  try {
    const response = await axios.post(`${apiURL}/login`, userData);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }

}
  export async function registro(userData: { nombreAlumno: string, contraseña: string, modulo: string, estado: string }) {
    try{

     
const response= await axios.post(`${apiURL}/api/alumnos`, userData);
  
        return response.data;
      } catch(error){
        console.log(error)
    }
    
        

    }
    export async function registroMaestro(userData: { nombreAlumno: string, contraseña: string, modulos: string, materias:string, estado: string }) {
    try{

     
const response= await axios.post(`${apiURL}/api/maestros`, userData);
  
        return response.data;
      } catch(error){
        console.log(error)
    }
    
  }
   