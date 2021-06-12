var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pwa2020', { UserNewUrlParser: true}, function (error) {

       if(error){
           throw error;
       }
       else{
           console.log("Conectado a MongoDB");
       }
}); 

module.exports = mongoose;
