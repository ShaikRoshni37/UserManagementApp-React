import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
class Edit extends Component {
// constructor(props) {
//   super(props);

    state= {
        firstName: "",
        lastName: "",
        emailId:"",
        empId:"",
        passWord:"",
        dbData:"" 
    }
  // }
    handleSubmit = async(e) => {
        const {firstName, lastName,emailId,empId,passWord,dbData} = this.state
        const employee = {
          firstName: firstName,
          lastName: lastName,
          emailId: emailId,
          empId:empId,
          passWord:passWord
      }
        console.log(employee.firstName);
        console.log(JSON.stringify(employee));
        await axios.put(`http://localhost:8094/employee/${empId}`,employee);
        // navigate("/home");
        Navigate("/home");
}; 
      // withParams(Component) {
      //   return props => <Component {...props} params={useParams()} />;
      // }
    componentDidMount() {
        const empid =this.props.params;
        // axios.get(`http://localhost:8094/employee/${empid}`)
        // .then(response => {
        //   this.setState({employee: response.data});
        // })
        // .catch (error => {
        //   console.log(error);

        // })
        const loadEmployee = async()=> {
            console.log("empId: ",empid);
            await fetch(`http://localhost:8094/employee/${empid}`)
            .then((res)=>{
              return res.json()
            }).then((data)=>{
              this.dbData = data;
            })
        }
        loadEmployee();
  }
    onFirstNameChange = (e) => {
        this.setState ({
        firstName:e.target.value
        })
      };
      onLastNameChange = (e) => {
        this.setState ({
            lastName:e.target.value,
        })
      };
      onEmailIdChange = (e) => {
        this.setState ({
            emailId:e.target.value,
        })
      };
      onEmpIdChange = (e) => {
        this.setState ({
            empId:e.target.value,
        })
      };
      onPassWordChange = (e) => {
        this.setState ({
            passWord:e.target.value,
        })
      };
  

    render(){
        const {firstName, lastName,emailId,empId,passWord,dbData} = this.state
        return(
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
            onChange={this.onFirstNameChange}
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
            onChange={this.onLastNameChange}
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
            onChange={this.onEmailIdChange}
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
            onChange={this.onEmpIdChange}
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
            onChange={this.onPassWordChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className='update-buttons-container'>
        <button onClick={this.handleSubmit} type="submit" className="update-button">
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
}

export default Edit;