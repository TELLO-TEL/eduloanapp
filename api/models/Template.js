const mongoose = require('../configs/mongoose');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
 
    type:{
        type:String
    },
    body:{
        type:String
    }
    
})

module.exports = mongoose.model('Templates', TemplateSchema);