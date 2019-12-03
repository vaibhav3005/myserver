var express = require("express");
var router = express();
var mysql = require("mysql");
var config = require("config");

var connection = mysql.createConnection({
    host: "172.18.4.123",
    database:"db1",
    user:"root",
    password:"root",
    port:9099
})
connection.connect();
router.use(express.json());

router.get("/",(request,response)=>{
    var queryText = "SELECT * FROM category";
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err.message));
        }
    })
})

module.exports = router;
