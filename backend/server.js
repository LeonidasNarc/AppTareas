const express = require('express');
const dotenv = require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

const app= express()
//midleware para q tengan acceso al json postman
app.use(express.json())
//para poder acceder al url
app.use(express.urlencoded({extended:false}))


// app.get('/api/tareas', (req, res)=>{
//     //res.send('obtener tareas')
//     //res.json({message: 'obtener tareas'})
//     res.status(200).json({message: 'obtener tareas'})
// })

app.use('/api/tareas', require('./routes/tareaRoutes'))



app.use(errorHandler)

app.listen(port,()=> console.log(`el servidor inicio en el puerto ${port}`) )

