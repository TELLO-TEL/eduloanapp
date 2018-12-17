const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')
const methodOverride = require('method-override');


/* Define routes */
const primary = require('./routes/primary');
const emails = require('./routes/emails')
const users = require('./routes/users');
//const templates = require('./routes/templates')



var app = express();
 //middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(cors())

//routed defined
app.use('/', primary);
app.use('/emails' , emails)
app.use('/users',users)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

});

const port =  process.env.PORT || 3000
//listening on this   port
app.listen(3000,()=>{

  console.log(`alive @ ${port}`)
               
})


module.exports = app;