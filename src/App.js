
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './employees/AddEmployee/AddEmployee';
import UpdateEmployee from './employees/UpdateEmployee/UpdateEmployee';
import ViewEmployee from './employees/ViewEmployee/ViewEmployee';
import { SignIn } from './pages/SignIn/SignIn';
import Login from './pages/Login/Login';
import Edit from './employees/UpdateEmployee/Edit';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/home" element={<Home />} />
        <Route  path="/addemployee" element={<AddEmployee />} />
        <Route  path="/" element={<SignIn />} />
        <Route path="/edit" element={<Edit />}/>
        <Route path = "/editEmployee/:empid" element={<UpdateEmployee/>}/>
        <Route path ="/viewEmployee/:employeeId" element={<ViewEmployee/>}/>
      </Routes>
    </BrowserRouter>
  );
}


// const  App = () =>{
//   return (
//     <div className="App">
//       <h1>APP Component</h1>
//     <BrowserRouter>

//       <Navbar/>
//       <Router>
//         <Route exact path="/" element ={<Home/>}/>
//         <Route exact path="/addemployee" element ={<AddEmployee/>}/>
//       </Router>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;
