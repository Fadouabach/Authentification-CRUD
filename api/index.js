const express =require('express');
const app =express();
const cors =require('cors');
const users = require("./data/users");


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json('users')
})

app.post('/register', (req, res) => {
  const { firstname, lastname, birthdate,email, password } = req.body
  const newUser = {
    firstname,
    lastname,
    email,
    birthdate,
    password
  }
  users.push(newUser);

  res.json(newUser)

})








app.listen(5000, () => {
  console.log("Server running on port 5000")
})