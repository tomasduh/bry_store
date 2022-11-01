import express from 'express';
import user from './UserController.js';
const app = express()
const port = 3000

app.get('/', user.list)
app.get('/:id', user.get)
app.post('/', user.create)
app.put('/:id', user.update)
app.delete('/:id', user.destroy)


app.get('*', (req, res) =>{
    res.status(404).send('page not found')
})

app.listen(port, ()=>{
    console.log('servidor en el puerto 3000')
})