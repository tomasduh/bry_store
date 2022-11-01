import express from 'express';
import user from './UserRoutes.js';
import Product from './ProductRoutes.js';

const app = express()
const port = 3000


//rutas para usuarios
app.get('/', user.list)
app.get('/:id', user.get)
app.post('/', user.create)
app.put('/:id', user.update)
app.delete('/:id', user.destroy)


//rutas para productos
app.get('/', Product.list)
app.get('/:id', Product.get)
app.post('/', Product.create)
app.put('/:id', Product.update)
app.delete('/:id', Product.destroy)


app.get('*', (req, res) =>{
    res.status(404).send('page not found')
})

app.listen(port, ()=>{
    console.log('servidor en el puerto 3000')
})