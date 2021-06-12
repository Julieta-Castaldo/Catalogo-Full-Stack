const mongoose = require('../bin/mongodb');

const productoSchema = new mongoose.Schema({  //esquema del documento para la colección productos, crea un modelo y lo exporta
    name:String,
    id:Number,
    price:Number,
    image:String
})

module.exports=mongoose.model('producto', productoSchema);