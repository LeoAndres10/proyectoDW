const express = require('express');
const cors = require('cors');
const Alumno = require('./Modelos/Alumno');
const Maestro = require('./Modelos/Maestro');
const Administrador = require('./Modelos/Administrador');
const sequelize = require('./Conexion/db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', async(req,res)=> {

  try {
    const { nombreAlumno} = req.body;
    const { nombreMaestro} = req.body;
    const { nombreAdministrador} = req.body;
    const  {contraseña} = req.body;

    const alumno = await Alumno.findOne({ where: { nombreAlumno } });
   
    if (alumno){
    const passwordAlumno = await bcrypt.compare(contraseña,alumno.contraseña);
  
    if(passwordAlumno){
    const tokenA = jwt.sign({ id: alumno.idAlumno, nombre: alumno.nombre }, 'contraseña_secreta', {
      expiresIn: '1h'
    });
    if(tokenA){
        return res.json({ message: 'Login exitoso'});
    
        }else{
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }
    }else{
    return res.status(401).json({ error: 'Usuario no encontrado' });
    } 

    }
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' + error.message });
  }
});

app.post('/api/alumnos', async (req, res) => {
  try {
    const { nombreAlumno, contraseña, modulo, estado } = req.body;

    // Validación básica
    if (!nombreAlumno || !contraseña || !modulo || !estado) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

    
    const newAlumno = await Alumno.create({
      nombreAlumno,
      contraseña: hashedPassword, 
      modulo,
      estado
    });

    console.log(newAlumno);

    res.status(201).json({
      message: 'Usuario creado correctamente',
      user: {
        id: newAlumno.id,
        nombreAlumno: newAlumno.nombreAlumno,
        modulo: newAlumno.modulo,
        estado: newAlumno.estado
      
      }
    });

  } catch (error) {
    console.error('Error al crear alumno:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

  
   
    


app.listen(5000, () =>{
    console.log('Aplicacion Iniciada en el puerto 5000')
});
