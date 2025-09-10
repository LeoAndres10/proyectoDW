const maestro = await Maestro.findOne({ where: { nombreMaestro } });
    const administrador = await Administrador.findOne({ where: { nombreAdministrador } });
   
    
        
        else if(administrador) {
         const passwordAdministrador = await bcrypt.compare(contraseña, administrador.contraseña);
            if(passwordAdministrador){
        const tokenAd = jwt.sign({ id: administrador.idAdministrador, nombre: administrador.nombreAdministrador }, 'contraseña_secreta', {
          expiresIn: '1h'
        });
        
        if(tokenAd){
           return res.json({ message: 'Login exitoso', tokenAd });
        
            }else{
                return res.status(401).json({ error: 'Contraseña incorrecta' });
            }
        }else{
        return res.status(401).json({ error: 'Usuario no encontrado' });
        } 
        }
        