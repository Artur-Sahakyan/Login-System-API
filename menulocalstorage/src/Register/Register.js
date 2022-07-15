import "./register.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Register (){
    return (
        <div className="form"  >
            <h1>Registration</h1>
            <form>
            <div className="input-container" >
                <label> Username </label>
                <input type="text" name="uname" id="username" /> 

            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" id="password" />
                
            </div>
            <div className="button-container">
                
                <Link to={"singIn"} >
                    <input type="submit" />
                </Link>
            </div>
            </form>
        </div>
    )
}

export default Register;