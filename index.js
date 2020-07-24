const express=require('express');
const morgan=require('morgan')
const bodyParser=require('body-parser');
const http=require('http');
const hostname='localhost';
const port=3000;
console.log("first time merging");
const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

const dishRouter=require('./routes/dishRouter');//dishrouter route added
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leader',leaderRouter);

app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server </h1></body></html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})
