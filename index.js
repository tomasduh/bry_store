import mongoose from "mongoose";

mongoose.connect('mongodb+srv://tomasduh:Tomygamer421@cluster0.7sotzee.mongodb.net/bry_store?retryWrites=true&w=majority')

const User = mongoose.model('User',{
    name: String,
    email: String,
    password: String,
});

const crear = async () =>{
    const user = new User ({
        name: 'andres',
        email: 'andres@gmail.com',
        password: 'andres432'
})
  const save =  await user.save()
  console.log(save)
 
}

// crear()

const buscartodos = async ()=>{
    const users = await User.find()
    console.log(users)
}

buscartodos()

const buscar = async ()=>{
    const users = await User.findOne({name: 'andres'})
    console.log(users)
}

// buscar()


const actualizar = async ()=>{
    const user = await User.findOne({name: 'andres'})
    user.password = '12345'
    await user.save();
    console.log('actualizado')
}

//actualizar()

const eliminar = async ()=>{
    const user = await User.findOne({name: 'andres'})
    await user.remove();
    console.log('eliminado')
}

//eliminar()