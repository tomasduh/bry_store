const Product ={
    list: (req, res) =>{
        res.status(200).send('listado de productos')
    },
    get: (req, res) =>{
        res.status(200).send('producto')
    },
    create: (req, res)=>{
        res.status(201).send('Crear producto')
    },
    update: (req, res)=>{
        res.status(204).send('Actualizando producto')
    },
    destroy: (req, res)=>{
        res.status(204).send('Eliminando producto')
    },
}
export default Product