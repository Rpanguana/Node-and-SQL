const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

function visitors(){ /* create a new Visitors Table on SQL*/

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

function addNewVisitor(fullname, assistname, age, dateOfVisit, timeOfVisit, comment){ /* create a new visitor and upload to the database */ 

var queryString = `INSERT INTO Visitors(fullname, age, dateOfVisit, timeOfVisit, Assistor, comments)
VALUES(${fullname}, ${age}, ${assistname}, ${dateOfVisit}, ${timeOfVisit}, ${comment})`;

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function showVisitors(){ /* select to view all visitors to show information of */ 
    var queryString = `SELECT * FROM visitors;`

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function deleteVisitor(idNum){ /* delete specified visitor using idNumber */
    var queryString = `DELETE FROM visitors WHERE id = ${idNum};`

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function updateVisitor(setStatement, idNum){ /* update visitor information using specific fields and their inputs*/
    var queryString = `UPDATE visitors SET ${setStatement} WHERE id = ${idNum};`

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function selectVisitor(idNum){ /* select a specific visitor to view their data */
    var queryString = `SELECT * FROM visitors WHERE id = ${idNum};`


    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}

function deleteAllVisitors(){ /* delete all visitors remotely*/
    var queryString = `DELETE FROM visitors;`

    pool.query(queryString, (error, results) => {
        console.log(error, results);
        pool.end();
        
    })
}


// let submit = document.getElementById("submit").onclick="addNewVisitor";

// visitors();
// addNewVisitor();
// showVisitors();
// deleteVisitor(1);
// updateVisitor();  *//*
// selectVisitor(2);
// deleteAllVisitors();
