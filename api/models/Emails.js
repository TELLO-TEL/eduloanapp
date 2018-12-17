var mongoose = require('../configs/mongoose');

const Schema = mongoose.Schema;
 
const Emails =  new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    emailBody:{
        type:String
    },
    replied:{
    type:Boolean,
    default:false
} ,
        delivered:{
    type:Boolean,
    default:false
},
dateRecevied:{
    type:Date,
    default:Date.now
}
})



module.exports = mongoose.model('Emails', Emails);
