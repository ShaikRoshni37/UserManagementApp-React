import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./AddEmployee.css";
import axios from 'axios';
const AddEmployee = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [empId, setEmpId] = useState(null);
  const [passWord, setPassWord] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "empId") {
      setEmpId(value);
    }
    if (id === "passWord") {
      setPassWord(value);
    }
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
   
    console.log(firstName, lastName, email, empId, passWord);
    const employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: email,
      empId: empId,
      passWord: passWord
    }
    console.log(employee);
    console.log(JSON.stringify(employee));
    // await axios.post("http://localhost:8094/employees",JSON.stringify(employee))
    // await axios.post("http://localhost:8094/employees", employee);
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },

      body: JSON.stringify(employee)
    }
     fetch( "http://localhost:8094/employees", options)
        .then(res =>
        res.json())
        .then(d => {
        console.log(d)
        })
    
    // navigate("/home");
    if(employee !=={}){
      navigate("/home");
    }
   
  };
  return (
    <>
      <div className='add-employee-background-container'>
        <div className='add-employee-container'>
          <h2 className="texr center m-4">Register Employee</h2>
          <form>
          <div className="input-container">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form-input"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              id="firstName"
              placeholder="Enter Your First Name"
              required
            />
          </div>
          <div className="input-container">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form-input"
              type="text"
              name=""
              id="lastName"
              value={lastName}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter Your LastName"
              required
            />
          </div>
          <div className="input-container">
            <label className="form-label" htmlFor="email">
              Email{" "}
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="input-container">
            <label className="form-label" htmlFor="empId">
              Employee Id{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name=""
              id="empId"
              value={empId}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter Your Employee Id"
              required
            />
          </div>
          <div className="input-container">
            <label className="form-label" htmlFor="passWord">
              Password{" "}
            </label>
            <input
              className="form-input"
              type="password"
              name=""
              id="passWord"
              value={passWord}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className='signup-buttons-container'>
          <button onClick={() => handleSubmit()} type="submit" className="register-button">
              Register
            </button>
            <Link to="/home">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default AddEmployee;