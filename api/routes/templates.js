const router = require('express').Router()
const Template = require('./../models/Template');

//Gets all templates by type

router.get('/getAllTemplates', (req,res) =>{
	//The req.body object -
	// - type
	// - body
	console.log('we are about to post data')
    let datas =  new primary(req.body) ;
    await datas.save((err) =>{
      console.log(datas)
      res.send({message:datas})
    })
 
});

router.post('/getTemplate',(req,res) =>{

 
});






module.exports = router;