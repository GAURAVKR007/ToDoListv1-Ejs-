const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');
const app = express();

var items = ["Buy Food" , "Cook Food", "Eat Food"];
var workListItems = [];

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));  // To use the body Parser

app.use(express.static("public"));

app.get("/",function(req,res){

  let day = date.getDate();

  res.render("list",{
    listTitle: day,
    newListItems: items
  });


});

app.post("/",function(req,res){    // To handle the post request from the list.ejs
  var item = req.body.newItem;

  if(req.body.list === "Work"){
    workListItems.push(item);
    res.redirect("/work")
  }else{
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work",function(req,res){

  res.render("list",{
    listTitle: "Work List",
    newListItems: workListItems
  })
})

app.get("/about",function(req,res){
  res.render("about");
})


app.listen(3000,function(){
  console.log("Server Started at port 3000");
})

// lets make it Awesome