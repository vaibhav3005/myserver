var express =  require("express");
var config = require("config");
var electionRouter = require("./product");
var port =   parseInt(config.get("port"));
var app =  express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/product",electionRouter);
app.listen(9898, ()=>{
    console.log("Server Started on 9898..");
});
