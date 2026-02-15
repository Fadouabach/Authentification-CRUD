const express =require('express')
const app =express()
const cors =require('cors');
const users = require("./data/users")


app.use(cors());
app.use(express.json());



// app.listen(5000, () => {
//   console.log("Server running on port 5000")
// })