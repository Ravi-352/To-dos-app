const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", function(req, res){
    
    day = date.getDate();
    
    res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

    let item = req.body.newItem;
    let delItem = req.body.delItem;
        console.log(delItem);
        
    

    if (req.body.list === "Work"){

        if (item != undefined){
            workItems.push(item);
            
            
        }
        else{
            
        }
        
        res.redirect("/work");

        
        
    }else {

        if (item != undefined){
            items.push(item);
            // console.log(items);
            
            
            
        }
        else{
            let del = req.body.delItem;
            // console.log(del);
            delIndex = items.indexOf(del);
            items.splice(delIndex,1);
        }

        res.redirect("/");
        
        
        
        
            

        


    }       
    

    

});


app.get("/work", function(req, res){
    
    res.render("list", {listTitle: "Work List", newListItems: workItems});

});





app.listen(3000, function(){
    console.log("server is up and running");
})