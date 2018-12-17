const express = require('express');
const router = express.Router();
const emails = require('../models/Emails')
const nodeMailer = require('nodemailer')


router.get('/emails', async (req, res) => {
    //get all emails
    emails.find({})
        .then(async resp => {
            await res.send(resp)
            console.log(resp)
        })
        .catch(err => {
            res.send(err)
        })


})

//post emails
router.post('/', async (req, res) => {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pateltanaka22@gmail.com',
            pass: '13dochesterSS'
        }
    });


    const mailOptions = {
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.name + '<br>' + '<br>' + req.body.phoneNumber + '<br>' + req.body.emailBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            try {
                let Emails = new emails(req.body)
                Emails.save((err) => {
                    if (err) {console.log(err)}else{

                            


                    }

                    
                }).then(res.send('done'))
            } catch (ex) {
                console.error(ex.message)
            }
        }
    });


})



//post bulk  emails 
router.post('/bulkemail' , (req , res) =>{


    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pateltanaka22@gmail.com',
            pass: '13dochesterSS'
        }
    });

   var  addemail =  req.body.email
     //initilize the bulk array
     let b  = addemail.toString().split(',')
    const mailOptions = {

        to: b,
        subject: req.body.subject,
        text: req.body.name + '<br>' + req.body.email + '<br>' + req.body.phoneNumber + '<br>' + req.body.emailBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            try {
                let Emails = new emails(req.body)
                Emails.save((err) => {
                    if (err) console.log(err)
                    console.log('done')
                }).then(res.send('done'))
            } catch (ex) {
                console.error(ex.message)
            }
        }
    });

})


router.get('/undeliveredEmails', (req, res) => {

    emails.find({
        delivered: false,
        replied: true
    }).then(resp => {
        res.send(resp)
    }).catch(err => {
        res.send(err)
    })
})


router.post('/replyEmail/:id', (req, res) => {


    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pateltanaka22@gmail.com',
            pass: '13dochesterSS'
        }
    });

    emails.find({
        id: req.params.id
    }).select({
        email: 1
    }).then(resp => {

        const mailOptions = {
            to: resp.email,
            subject: req.body.subject,
            text: req.body.text
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                try {

                    Emails.findByIdAndUpdate({
                        id: req.params.id
                    }, {
                        $set: {
                            delivered: true,
                            replied: true
                        }
                    }).then(res.send('done'))
                } catch (ex) {

                    Emails.findByIdAndUpdate({
                        id: req.params.id
                    }, {
                        $set: {
                            delivered: false,
                            replied: true
                        }
                    }).then(res.send(ex.message))
                }
            }
        });


    })


})


module.exports = router