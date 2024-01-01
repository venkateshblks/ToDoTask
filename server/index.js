const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const cors=require('cors')
app.use(express.urlencoded({extended:true}))
// app.use(express.json())
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://scaling-invention-5p4vgvwxg6jc7wqw-1234.app.github.dev');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });
app.get("/", cors(), async (req, res) => {
	res.send("This is working")
})

app.get("/home", cors(), async (req, res) => {
	res.send("This is the data for the home pagejjjjjjjjjjjj")
})

app.post("/post_name", async (req, res) => {
	let { name } = req.body
	console.log(name)
})


const connection = mysql.createConnection({
  host: "mysqlservice-3ba9f31c-testvenkat.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_KRH-2_9mVNnikO7l12z",
  database: "defaultdb",
  port: 13330
});

// connection.connect();
// connection.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error getting MySQL connection:', err);
//     throw err;
//   }
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL');})

  // const sql = "INSERT INTO your_table_name (`taskName`, `startDate`, `deadline`, `status`) VALUES ('venkatesh', '2023-12-09', '2023-12-01', 'review')";
app.post('/api/addTask', (req, res) => {
  const formData = req.body;
  console.log(formData)

  // Insert data into MySQL
  connection.query('INSERT INTO mahesh SET ?', formData, (error, results) => {
    // connection.query("INSERT INTO mahesh (taskName,startDate) VALUES (?,?)",['formData','hello'], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json({ message: 'Task added successfully', results });
    }
  });
});
app.get('/api/getData', (req, res) => {
  connection.query('SELECT * FROM mahesh', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});



app.listen(PORT, () => { console.log(`Server listening on ${PORT}`);});
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });