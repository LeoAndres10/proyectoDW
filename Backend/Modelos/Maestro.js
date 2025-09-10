const { DataTypes } = require('sequelize');
const sequelize = require('../Conexion/db');

const Maestro = sequelize.define('maestro', {
    
    nombreAlumno: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    },
    modulos: {
        type: DataTypes.STRING
    },
    materias: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    }
},
    {
        tableName: 'maestro',
        timestamps: false
    }
)

module.exports=Maestro;