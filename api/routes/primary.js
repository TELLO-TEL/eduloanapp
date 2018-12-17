const express = require('express');
const router    = express.Router();
const primary =  require('../models/Primary')
const Image =  require('../models/uploadFiles')
var multer = require('multer');
//const path = require('path');




router.addImage = function(image, callback) {
  Image.create(image, callback);
 }

// set up  storage.
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
  cb(null, 'public/files')
  },
  filename: function(req, file, cb) {
  cb(null, file.originalname);
  }
 });
  
 var upload = multer({
  storage: storage
 });

router.get('/',()=>{
    res.send('we are connected')
})

/** Upload file to path and add record to database */

// @route POST /upload
// @desc  Uploads file to DB
router.post('/upload', upload.any(), (req, res) => {
 

   var path = req.files[0].path;
   var imageName = req.files[0].originalname;
   
   var imagepath = {};
   imagepath['path'] = path;
   imagepath['originalname'] = imageName;
   
   //imagepath contains two objects, path and the imageName
  
  
  
   
   //we are passing two objects in the addImage method.. which is defined above..
   router.addImage(imagepath, function(err) {
   
   });
   


});





// @route GET /files
// @desc  Display all files in JSON
router.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }

    // Files exist
    return res.json(files);
  });
});

//upload the data of a form  into the database

router.post('/data', async (req,res)=>{ 

    console.log('we are about to post data')
    let datas =  new primary(req.body) ;
    await datas.save((err) =>{
      console.log(datas)
      res.send({message:datas})
    })

})


// get all forms
router.get('/allforms', (req,res)=>{
    primary.find({},(err ,doc)=>{
      if(err){console.log(err)}
      else{console.log(doc)}
    })
            .then( async (resp) =>{
                console.log(resp)
              res.send(resp)
            })
            .catch(err=>{
                console.log(err)
            })
})


//get uneditated forms
router.get('/unedited', async (req,res)=>{
  await primary.find({edited:false})
            .then(resp=>{
                res.send(resp)
            }).catch(err =>{
                console.error(err)
            })
})

//get approved forms
router.get('/approvedforms',async (req,res) =>{
     await primary.find({approved:true})
            .then(async resp =>{
              await  res.send(resp)
            })
            .catch(error =>{
                res.send(error)
            })
})


//get rejected forms
router.get('/rejected',async (req, res) =>{
  

     await primary.find({rejected:true})
                  .then(async resp =>{
                    await res.send(resp)
                  }).catch(error=>{
                    res.send(error)
                  })

})
// editform
router.post('/editform/:id',(req,res) =>{
try{
    let  one = req.body
    primary.findByIdAndUpdate(req.params.id,{$set:one},(error ,doc )=>{
        if(error) return res.send(500,{error:error})
        return res.send('successfully saved')
    })
}
catch(ex){
console.log(ex.message)
}
   
})



router.get('/approved/:id' ,(req,res)=>{
  primary.find({_id: req.params.id}).then(resp=>{
    console.log(resp)
    res.send(resp)
  })
})


//approve forms
router.post('/approved/:id',(req,res) =>{

  try{
    let editated = req.body
    let query = {_id:req.params.id}
    primary.findByIdAndUpdate(query,{$set:editated},(error ,doc )=>{
        if(error) {return res.send({error:error})}
    }).then(resp=>{

      console.log(query)
      res.send(editated)



    })
  } 
  catch(ex){
console.log(ex.message)
  }
})


router.get('/monthlyloanData', async (req,res) =>{
    let d = new Date()
  let currentMonth = d.getMonth() 
/*

  primary.aggregate(
    [{ 
      $group:{
        _id:true,
         date: { $eq: [ "date", currentMonth ] },
        count:{$sum:1}
      }}
    ]
 ).then(resp =>{
   res.send(resp)
 })*/

})

//get devices working
router.get('/devices' , async(req , res)=>{
  
     primary.aggregate( [
      { $group: { _id:"$devices",
                  count: { $sum: 1 } ,
                },
                
    }
    ]).then(resp=>{
      res.send(resp)
    }).catch(err =>{
      res.send(err)
    })


})
module.exports = router;