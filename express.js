const addNewVisitor = require('./prospective_students')
const express = require('express');
const bodyparser = require('body-parser');
const path= require('path');
const app = express();
const port = process.env.PORT || 4000;

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 9090
});

app.use(express.static('./newvisit'))

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine', 'pug')



app.get('/new_visit', function (request, response) {
    response.sendFile('form.html',{root:path.join(__dirname,'./new_visit')})
})

app.post('/visits', function(request,response){
   var sending = request.body; 
   addNewVisitor(sending.fullname, sending.assistname, sending.age, sending.dateOfVisit, sending.timeOfVisit, sending.comment)
  response.send('./reply.pug');
})

// app.post('/new_visit', function(request,response){
//     return response.render('/reply.pug')
// })

app.listen(port,()=>console.log('My server is running on http://localhost:' + port + ' yall !!'))
