import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
export default function Home() {
//   const updateEmployee = (empId) => {
//     this.props.history.push(`/add-employee/${empId}`);
// };
    const[employees, setEmployees]=useState([]);
    // const {empId} = useParams()

    useEffect(() => {
      loadEmployees();
    },[]);
    const loadEmployees = async() =>{
        const result = await axios.get("http://localhost:8094/employees");
        setEmployees(result.data);
    };
  
    const deleteEmployee = async(empId) => {
      console.log("deleted employee :" ,empId);
      await axios.delete(`http://localhost:8094/employee/${empId}`)
      loadEmployees()
  };
  return (
    <>
    <div className="add-button-container">
    <Link to="/addemployee">
    <button className="btn btn-outline-dark">Add Employee</button>
    </Link>
    </div>
    
    <div className="container">
        <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email Id</th>
      <th scope="col">Employee Id</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map((employee, index) => (
            <tr>
               <th scope="row" key={index}>{index+1}</th>
               <td>{employee.firstName}</td>
               <td>{employee.lastName}</td>
               <td>{employee.emailId}</td>
               <td>{employee.empId}</td>
               <td>
               <Link to={`/viewEmployee/${employee.empId}`}>
                <button className="btn btn-outline-primary mx-2">View</button>
                </Link>
                <Link to={`/editEmployee/${employee.empId}`}>
                <button className="btn btn-outline-primary mx-2">Update</button>
                </Link>          
                {/* onClick={ () => this.updateEmployee(employee.empId)} */}
                <button onClick={() => deleteEmployee(employee.empId)} className="btn btn-danger mx-2">
                  Delete
                </button>
               </td>
            </tr>
        ))
    }
  </tbody>
</table>
        </div>

    </div>
    </>
  )
}