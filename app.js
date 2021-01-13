'use strict';

var express = require('express');
var app = express();

var populationRouter = require('./src/routes/populationRoutes');
var authorRouter = require('./src/routes/authorRoutes');

var port = process.env.PORT || 5000;


//used by express first
app.use(express.static('./public'));
app.use(express.static('./src'));
app.use(express.static('./sampledata'));



//templating engine
app.set('views', './src/views');      
app.set('view engine', 'ejs');


app.use('/population', populationRouter);

app.use('/authors', authorRouter);

app.get('/', function (req, res) {
   res.send('okay')
});

app.get('/health',function(req,res){
    res.status(200)
    res.send('server running good')
})


app.listen(port, function () {
    console.log('running server on port ' + port) 
});
