const asyncHandler=require('express-async-handler')

const getTareas=asyncHandler(async(req, res)=>{
    res.status(200).json({message: 'obtener tareas'})
   
}) 

const postTareas=asyncHandler(async(req, res)=>{
     
    if(req.body.text){
      
        //res.status(400).json({message: 'por favor teclea una tarea'})
        res.status(400)
        throw new Error('por favor teclea una tarea')
    }
    //console.log(req.body);

    res.status(200).json({message: 'crear una tarea'})
   
}) 
const putTareas=asyncHandler( async (req, res)=>{
    res.status(200).json({message: `modificar tarea ${req.params.id}`})
   
})
const deleteTareas=asyncHandler( async(req, res)=>{
    res.status(200).json({message: `eliminar tarea ${req.params.id}`})
   
})


module.exports ={
    getTareas, 
    postTareas,
    putTareas,
    deleteTareas,
    
}