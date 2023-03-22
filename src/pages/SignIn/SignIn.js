import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate, Redirect } from "react-router-dom";
import "./SignIn.css";
import { useRef } from "react";

// import { useState } from "react";
export const SignIn =() => {
  let navigate = useNavigate()
    const[adminName,setAdminName]=useState("");
    const[passWord,setPassWord]=useState("");
    const[dbData, setDbData]=useState("");
    // const [error,setError] =useState(false);
    const [errorStatus, setErrorStatus] = useState(false);
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
      // Navigate("/home");
        console.log(response.data);
        // setDbData = response.data;
        const dataFromDb = response.data;
        console.log("DB Data", dataFromDb);
        const foundObject = dataFromDb.find((object) => object.adminName === adminData.adminName);
        console.log("Found Obj",foundObject);
        if(foundObject.adminName === adminData.adminName && foundObject.passWord === adminData.passWord)
      {
        console.log("login Sucess");
        navigate('/home')
      }
      else{
        console.log("failed");
        // setError(current => !current);
        // errorStatus.current = true;
        setErrorStatus(!errorStatus);
       console.log(errorStatus);
        // navigate('/');
        // window.alert("Invalid Credentials.");
        // return  prompt("User Name/Password is wrong");
      }
    };
     return(
    <div>
        <div className="form">
        <form onSubmit={handleSubmit} >
      <div className="form-body form-container" >
      <h2 className="text center m-4">Login Form</h2>
      <div>
      <div className="adminName">
          <label className="form-label" htmlFor="adminName">
            Email{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="adminName"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            placeholder="Enter Admin Name"
            required
          />
          </div>
          <div className="password">
          <label className="form-label" htmlFor="passWord">
            Password{" "}
          </label>
          <input
            className="form-input"
            type="password"
            name=""
            id="passWord"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="Enter Your Password"
            required
          />
        </div>
        </div>
       
          <button className="btn btn-outline-primary" >Login</button>
          {errorStatus== true ? <p>Please enter right credentials.</p>:""}
        </div>
        </form>
      </div>
    </div>
  )
}
export default SignIn;