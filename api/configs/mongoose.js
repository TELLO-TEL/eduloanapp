const mongoose = require('mongoose')
/* connect to database */

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eduloanfinal' ,{useNewUrlParser:true} ,()=>{
      console.log('db connected')
});

//ensure indexs
mongoose.set('useCreateIndex', true);


module.exports =  mongoose