const User = {
    list: (req, res) =>{
        res.status(200).send('listado de usuarios')
    },
    get: (req, res) =>{
        res.status(200).send('usuario')
    },
    create: (req, res)=>{
        res.status(201).send('Crear usuario')
    },
    update: (req, res)=>{
        res.status(204).send('Actualizando usuario')
    },
    destroy: (req, res)=>{
        res.status(204).send('Eliminando usuario')
    },

}

export default User;