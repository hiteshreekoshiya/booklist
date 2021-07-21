import React from 'react';
import { useState } from 'react';
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await auth.createUserWithEmailAndPassword(email, pass);
            alert(`${response.user.email}`);
            history.push("/home");
        }
        catch (err) {
            alert(err.message);
        }
    }

    return (
        <>
            <div className="main_div">
                <form>
                    <h3>Please Sign Up...</h3>
                    <input type="email" placeholder="Enter Email Id" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                    <input type="password" placeholder="Enter Password" value={pass} onChange={(e) => { setPass(e.target.value) }} /><br />
                    <button onClick={(e) => { handleSubmit(e) }} type="button" class="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
