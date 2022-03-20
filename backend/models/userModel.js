const mongoose=require ('mongoose')

//se crea un esquema
const userSchema=mongoose.Schema({

    name: {
        type: 'string',
        require:[true, 'por favor teclea un nombre']
    },
    email: {
        type: 'string',
        require: [true, 'por favor teclea un email'],
        unique: true
    },
    password: {
        type: 'string',
        require: [true, 'por favor teclea un password']
    }
  },
  { //para q mongoose se ponga las fechas de creado (createdAt) y modificado (updatedAt) de sus documentos
      timestamps: true,

  }

)
//User es el primer parametro con el que lo vamos a identificar
//segundo paramentro es el esquema que vamos a pasar

module.exports=mongoose.model('User', userSchema )