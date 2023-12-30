const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;
const cors=require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
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
app.listen(PORT, () => { console.log(`Server listening on ${PORT}`);});
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });