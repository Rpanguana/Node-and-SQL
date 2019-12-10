const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

// const helloWorld = () => {
//   pool.query(
//     "SELECT $1::text as message",
//     ["Hello world!"],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }

//       console.log(results.rows);
//     }
//   );
// };

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

    var queryString = `INSERT INTO Visitors(name, age, dateOfVisit, timeOfVisit, Assistor, comments) VALUES('Ndinga Gaba', 43, '2019-11-29', '09:00:43', 'Sister Dizzy', 'The service was poor')`;

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

// visitors();
// addNewVisitor();
showVisitors();