import axios from "axios";

const apiURL = "http://localhost:5000";

export async function login(userData: { nombreAlumno: string, contraseña: string }) {
    try{

     
const response= await axios.post(`${apiURL}/login`, userData);
  
if (response.data.success===true) {
        alert('Login exitosoo');
        return response.data;
      }else if (response.data.noUser) {
        return alert('Usuario no encontrado'), window.location.reload();
         
      }
       else {
       return alert('Credenciales incorrectas'), window.location.reload();
         
       
      }
      
    }
    catch(error){
        console.log(error)
    }
    
        

    }

  export async function registro(userData: { nombreAlumno: string, contraseña: string, modulo: string, estado: string }) {
    try{

     
const response= await axios.post(`${apiURL}/api/alumnos`, userData);
  
if (response.data.success===true) {
        alert('Login exitosoo');
        return response.data;
      }
       else {
       return alert('Credenciales incorrectas'), window.location.reload();
         
       
      }
      
    }
    catch(error){
        console.log(error)
    }
    
        

    }
   