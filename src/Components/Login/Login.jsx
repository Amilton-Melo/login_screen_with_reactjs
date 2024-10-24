import { FaUser, FaLock } from "react-icons/fa";

import { useState, useRef } from "react";
import "./Login.css";

const Login = () => {

    const [emailUser, setEmailUser] = useState("");
    const [password, setPassword] = useState("");
    const [checkBoxValue, setCheckBoxValue] = useState({
        checkRemember: false
    });

    const userInputRef = useRef(null);
    const passInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleCheckBoxChange = (event) => {
        const { name, checked } = event.target

        setCheckBoxValue({
            checkRemember: name === 'checkRemember' ? checked : checkBoxValue.checkRemember
        })

        console.log(name, checked)
    }

    const focusInput = (ref) => ref.current?.focus();

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Access account</h1>
                <div className="input-field">
                    <input type="email" name="emailuser" id="emailuser" placeholder="Enter your email"
                        ref={userInputRef} onChange={(e) =>
                            setUsername(e.target.value)} required />
                    <FaUser className="icon" onClick={() => focusInput(userInputRef)} />
                </div>
                <div className="input-field">
                    <input type="password" name="pass" id="pass" placeholder="Enter your password"
                        ref={passInputRef} onChange={(e) =>
                            setPassword(e.target.value)} required />
                    <FaLock className="icon" onClick={() => focusInput(passInputRef)} />
                </div>
                <div className="recall-forget">
                    <label className="customize-checkbox">
                        <input type="checkbox" name="checkRemember"
                            checked={checkBoxValue.checkRemember} onChange={handleCheckBoxChange} />
                        <span className="checkmark" />
                        Remember-me
                    </label>
                    <a href="">Forgot your password</a>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;