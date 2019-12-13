const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

function visitors(){

    var queryString = `CREATE TABLE visitors (id SERIAL PRIMARY KEY,
        name VARCHAR(30),
        age INT,
        dateOfVisit DATE,
        timeOfVisit TIME,
        Assistor VARCHAR(30),
        comments VARCHAR(100)
        )`;

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function addNewVisitor(){

var queryString = `INSERT INTO Visitors(name, age, dateOfVisit, timeOfVisit, Assistor, comments) VALUES('Ndinga gaba', 43, '2019-11-29', '09:00:43', 'Sister Dizzy', 'The service was poor')`;

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function showVisitors(){
    var queryString = `SELECT * FROM visitors;`

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function deleteVisitor(idNum){
    var queryString = `DELETE FROM visitors WHERE id = ${idNum};`

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function updateVisitor(setStatement, idNum){ 
    var queryString = `UPDATE visitors SET ${setStatement} WHERE id = ${idNum};`

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function selectVisitor(idNum){ 
    var queryString = `SELECT * FROM visitors WHERE id = ${idNum};`


    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function deleteAllVisitors(){
    var queryString = `DELETE FROM visitors;`

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}


// visitors();
// addNewVisitor();
// showVisitors();
// deleteVisitor(1);
// updateVisitor();  *//*
// selectVisitor(2);
// deleteAllVisitors();
