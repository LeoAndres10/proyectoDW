const { DataTypes } = require('sequelize');
const sequelize = require('../Conexion/db');

const Alumno = sequelize.define('alumno', {
   
    nombreAlumno: {
        type: DataTypes.STRING
    },

    contraseña: {
        type: DataTypes.STRING
    },
    modulo: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    }
    
},
    {
        tableName: 'alumno',
        timestamps: false
    }
)

module.exports=Alumno;