import { useState } from "react"
import axios from "axios"
import "./Form.css"


function Form() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    

    const response = await axios.post("http://localhost:5000/register", formData);
    console.log('User created', response.data);

    setFormData({
      firstname:"",
      lastname:"",
      birthdate:"",
      email:"",
      password:"",

    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Last name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>

      
      <div>
        <label>birthdate:</label>
        <input
          type="text"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
      </div>

      
      <div>
        <label>email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      
      <div>
        <label>password:</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Create</button>
    </form>
  )
}

export default Form
