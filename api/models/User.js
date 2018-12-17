const mongoose = require('../configs/mongoose');
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema
// User Schema
var UserSchema = new Schema({
	username: {
		type: String,
		unique:true
	},
	password: {
		type: String
	},
	email: {
		type: String,
		unique:true,
		dropDups: true
		
	},
	name: {
		type: String
	}
});

module.exports = mongoose.model('User', UserSchema);


module.exports.createUser = async (newUser, callback) => {
 await 	bcrypt.genSalt(10,  async (err, salt)  => {
	 await    bcrypt.hash(newUser.password, salt, async (err, hash) => {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = async (username, callback) => {
	let query = {username: username};
	 await User.findOne(query, callback);
}

module.exports.getUserById =  async (id, callback) =>{
	 await User.findById(id, callback);
}

module.exports.comparePassword = async (candidatePassword, hash, callback) =>{
 await	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
