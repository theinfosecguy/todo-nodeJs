const express = require('express');
const port = 9000;
const app = express();

const path = require('path');
const db = require('./config/mongoose');
const Todo = require('./models/todo');

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    Todo.find({}, function(err,list){
        if(err){
            console.log("Error in Getting Todo Items from DB");
            return
        }
        console.log(" List is : ", list);
        return res.render('todo', {
            title:"Todo by tigv1",
            todo_list: list
        })
    })
})

app.post('/addItem',function(req,res){
    Todo.create({
        item:req.body.item
    }, 
    function(err, newItem){
        if(err){
            // console.log("Item is: ", item);
            console.log("Error in adding Item to Database : ", err);
            return;
        }
        console.log(newItem);
        return res.redirect("/");
    })
})

app.get('/deleteItem', function(req,res){

    let id = req.query.id;
    Todo.findByIdAndDelete(id, function(err){
        if(err)
        {
            console.log("Error while deleting item from the DB");
        }
        return res.redirect('/');
    })
})

app.listen(port,function(err){
    if(err){
        console.log("Error while running the express server");
        return;
    }
    console.log("Express Server working fine on port : ", port);
})

