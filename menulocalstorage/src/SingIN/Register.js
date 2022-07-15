import "./register.css"

function Register (){
    return (
        <div className="form"  >
            <form>
            <div className="input-container" >
                <label Link to={"/homee"} >Username </label>
                <input type="text" name="uname" id="username" />
                {/* <li><Link to={"/home"}></Link>Home</li> */}
                
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" id="password" />
                
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
            </form>
        </div>
    )
}

export default Register;