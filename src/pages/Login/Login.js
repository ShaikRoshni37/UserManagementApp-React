import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function Login() {
  const [errorStatus, setErrorStatus] = useState(false);
  const [loginMsg, setLoginMsg] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [passWord, setPassWord] = useState("");
  const onAdminNameChange = (e) => {
    setAdminName(e.target.value);
  };
  const onPasWordChange = (e) => {
    setPassWord(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(adminName,passWord);
    const adminData = {
      adminName: adminName,
      passWord: passWord
    }
    console.log(adminData);
    console.log(JSON.stringify(adminData));
    const response = await axios.get("http://localhost:8094/admin");
      console.log(response.data);
      const dataFromDb = response.data;
      console.log("DB Data", dataFromDb);
      const foundObject = dataFromDb.find((object) => object.adminName === adminData.adminName);
      console.log("Found Obj",foundObject);
      if(foundObject.adminName === adminData.adminName && foundObject.passWord === adminData.passWord)
      {
        console.log("login Sucess");
        // Navigate('/home')
      }
      else{
        console.log("failed");
       setErrorStatus(false);
       console.log(errorStatus);
      }
    };
  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="adminName">Admin Name:</label>
        <input
          type="text"
          placeholder="Enter Admin Name"
          onChange={onAdminNameChange}
        />
        <br />
        <label htmlFor="passWord">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={onPasWordChange}
        />
        <br />
        <button type="submit">Login</button>
        {errorStatus ? <p>Please Enter right credentials</p> : ""}
        {loginMsg ? alert("Login Success") : ""}
      </form>
    </div>
  );
}
