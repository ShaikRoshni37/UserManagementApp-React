import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { Params } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ViewEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: " ",
        lastName: " ",
        emailId: " ",
        empId: " ",
        passWord: " ",
    });
    //   const [firstName, setFirstName] = useState(null);
    //   const [lastName, setLastName] = useState(null);
    //   const [emailId, setEmailId] = useState(null);
    //   const [empId, setEmpId] = useState(null);
    //   const [passWord, setPassWord] = useState(null);
    const { employeeId } = useParams();
    useEffect(() => {
        console.log(employeeId);
        axios.get(`http://localhost:8094/employee/${employeeId}`)
        .then((response) => { setEmployee(response.data) });

    }, [])
    return (
        <div className="form">
            <div className="form-body">
                <h2 className="texr center m-4">Details Of Employee</h2>
                <div className="card">
                    <div className="card-header">
                        Details of Employee Id : {employee.empId}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>First Name: </b>
                                {employee.firstName}
                            </li>
                            <li className="list-group-item">
                                <b>Last Name: </b>
                                {employee.lastName}
                            </li>
                            <li className="list-group-item">
                                <b>Email Id: </b>
                                {employee.emailId}
                            </li>
                            <li className="list-group-item">
                                <b>Employee Id: </b>
                                {employee.empId}
                            </li>
                            <Link className="btn btn-primary my-2" to={"/home"}>Back to Home</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee;