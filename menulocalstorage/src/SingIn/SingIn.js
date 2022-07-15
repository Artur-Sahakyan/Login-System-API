import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function SingIn (){

    return (
        <div className="form"  >
            <h1>Sing In</h1>
            <form>
            <label> Username </label>

            <div className="input-container" >
                <input type="text" name="uname" id="username" /> 
            </div>
            
            <label>Password </label>
            <div className="input-container">
                <input type="password" name="pass" id="password" />
            </div>
            <div className="button-container">
                
                <Link to={"/singIn/getweather"} >
                    <input type="submit" />
                </Link>
            </div>
            </form>
        </div>
    )
}

export default SingIn;