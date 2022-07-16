import "./register.css"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Register () {
    
    const [ isDisabled, setIsDisabled ] = useState(false);

    const [ usernameValue, setUsernameValue ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(password.length > 5 && usernameValue.length > 5) {

            setIsDisabled(true);
        };
    }, [password, usernameValue]);

    const changeUserName = (event) => {
        const { target: {value} } = event;
        setUsernameValue(value);
    };

    const changePassword = (event) => {
        const { target: {value} } = event;
        setPassword(value);
    };

    const submitRegisterForm = (event) => {
        event.preventDefault();
        if(isDisabled) {
            const usersInLocalStorage = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
            const findedUser = usersInLocalStorage.find((user) => atob(user.login) === usernameValue && atob(user.pass) === password);
            
            if(!findedUser) {
                const users = [
                    ...usersInLocalStorage,
                    {
                        login: btoa(usernameValue),
                        pass: btoa(password)
                    }
                ];
                localStorage.setItem('users',JSON.stringify(users));
                navigate('/singIn');
            };
        }
    };

    return (
        <div className="form"  >
            <h1>Registration</h1>
            <form onSubmit={submitRegisterForm}>
                <div className="input-container" >
                    <label> Username </label>
                    <input type="text" name="uname" id="username" required onChange={changeUserName} /> 
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" id="password" required onChange={changePassword} />
                </div>
                <div className="button-container">
                    {
                        isDisabled ? 
                            <button >
                                tandz
                            </button> : 
                            <button>xndzor</button>
                    } 
                </div>
            </form>
        </div>
    )
}

export default Register;