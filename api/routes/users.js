const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

// Register
router.get('/register',  async (req, res)  =>{
	 await res.send({message:'you ca now register'});
});

// Login
router.get('/login', async (req, res) => {
	 await res.send({message:'welcome to the login page'})
});

// Register User
router.post('/register', async (req, res) => {
	let name = req.body.name;
	let email = req.body.email;
	let username = req.body.username;
	let password = req.body.password;
	
					let newUser = new User({
						name: name,
						email: email,
						username: username,
						password: password
					});
					User.createUser(newUser, async (err, user) => {
						if (err) throw err;
						console.log(user);
					}).then(()=>{
						res.send({message:'you have been registered'})
					});
				 	
}
		
	
);


//passporting the user

passport.use(new LocalStrategy(

	//get credentials
	 (username, password, done)  =>{
		User.getUserByUsername(username,  async (err, user) =>{
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			//now comparing the passwords

			User.comparePassword(password, user.password, async  (err, isMatch)  =>{
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));


passport.serializeUser( async (user, done) => {
	done(null, user.id);
});

passport.deserializeUser( async (id, done)  =>{
 await	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});


//user login
router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	async (req, res) => {
		 await res.send({user: "this is your username" + username});
	});



	//user log out
router.get('/logout', async (req, res) => {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;