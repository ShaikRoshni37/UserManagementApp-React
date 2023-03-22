import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./UpdateEmployee.css";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [empId, setEmpId] = useState("");
  const [passWord, setPassWord] = useState("");
//   const [employee, setEmployee] = useState({
//     firstName: " ",
//     lastName: " ",
//     emailId: " ",
//     empId: " ",
//     passWord: " ",
// });
const {empid} = useParams()
 
const onFirstNameChange = (e) => {
  setFirstName(e.target.value);
};
const onLastNameChange = (e) => {
  setLastName(e.target.value);
};
const onEmailChange = (e) => {
  setEmailId(e.target.value);
};
const onEmpIdChange = (e) => {
  setEmpId(e.target.value);
};
const onPasWordChange = (e) => {
  setPassWord(e.target.value);
};
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(firstName, lastName, emailId,empId,passWord);
    const employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      empId:empId,
      passWord:passWord
    }
    console.log(employee.firstName);
    console.log(JSON.stringify(employee));
    await axios.put(`http://localhost:8094/employee/${employee.empId}`,employee);
    // navigate("/home");
  }; 
  useEffect(() => {
    loadEmployee();
  },[]);
  const loadEmployee = async()=> {
    console.log("empId: ",empid);
    await fetch(`http://localhost:8094/employee/${empid}`)
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmailId(data.emailId);
      setEmpId(data.empId);
      setPassWord(data.passWord)
    })
  }
  return (
    <>
    <div className='update-employee-background-container'>
      <div className='update-employee-container'>
        <h2 className="texr center m-4">Update Employee</h2>
        <form>
        <div className="input-container">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-input"
            type="text"
            value={firstName}
            onChange={(e) => onFirstNameChange(e)}
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
            onChange={(e) => onLastNameChange(e)}
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
            value={emailId}
            onChange={(e) => onEmailChange(e)}
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
            onChange={(e) => onEmpIdChange(e)}
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
            onChange={(e) => onPasWordChange(e)}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className='update-buttons-container'>
        <button onClick={() => handleSubmit()} type="submit" className="update-button">
            Update
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
export default UpdateEmployee;