const mongoose = require('../configs/mongoose');
var imageSchema = mongoose.Schema({
  path: {
  type: String,
  required: true,
  trim: true
  },
  originalname: {
  type: String,
  required: true
  },
  docs:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Hp'
  }
  
  
 });
  
  
 var Image = module.exports = mongoose.model('files', imageSchema);