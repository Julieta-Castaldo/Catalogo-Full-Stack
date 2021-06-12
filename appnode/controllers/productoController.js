const productosModel = require('../models/productosModel')

module.exports ={
    getAll: async function(req, res, next) {
      try{
        const producto= await productosModel.find({});  //consulta los productos que tengo en la base de datos con el esquema creado en models
        res.json(producto);    //lo que obtiene, lo transforma a un json //
      }
      catch(error){
        next(error);
      }
       
    },

  
    create: async function(req,res,next) {
      console.log(req.body)
      res.json(req.body);
      try{
            const producto= new productosModel({  //creo un producto con estos datos
              name:req.body.name,
              image:req.body.image,
              price:req.body.price

            })
            const prod = await producto.save()   //al hacer el save, lo inserta en base de datos
            res.json(prod);
          }catch(e){
            next(e);
          }
        },  

    
        update: async function(req,res,next) {
          try{
            let producto = await productosModel.updateOne({_id: req.params.id}, {$set:{name:req.body.name, price:req.body.price, image:req.body.image}}, { multi: false})
            res.json(producto);
          }catch(e){
            next(e);
          }
          
      },

  delete: async function(req,res,next){
    try{
      let producto = await productosModel.deleteOne({_id: req.params.id})
      res.json(producto);
    }catch(e){
      next(e);
    }
  
},


    getById: async function(req, res, next) {
      try{
        const producto= await productosModel.findById(req.params.id);  //consulta los productos que tengo en la base de datos con el esquema creado en models
        res.json(producto);    //lo que obtiene, lo transforma a un json //
      }
      catch(error){
        next(error);
      }
       
    }


}