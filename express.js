const express = require('express');
const bodyparser = require('body-parser');
const path= require('path');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static('./newvisit'))

app.set('view engine', 'pug')



app.get('/new_visit', function (request, response) {
    response.sendFile('form.html',{root:path.join(__dirname,'./new_visit')})
})

app.post('/new_visit', function(request,response){
    return response.render('/reply.pug')
})

app.listen(port,()=>console.log('My server is running on http://localhost:' + port + ' yall !!'))

// function convert(){


// let fullName = document.getElementById('fullname').value
// let assistantName = document.getElementById('assistname').value;
// let age = document.getElementById('age').value;
// let date = document.getElementById('date').value;
// let time = document.getElementById('time').value;
// let comments = document.getElementById('comment').value;
// let data = {fullname, assistantName,age,date,time,comments
// }
// console.log(fullName.value);

// }
