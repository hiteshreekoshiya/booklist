/*eslint-disable react-hooks/exhaustive-deps*/ 
import React,{useContext, useEffect} from "react";
import { useState } from "react";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./Auth/Auth.jsx";

const SignIn = () => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, pass);
      history.push("/home");
    } catch (err) {
      alert(err.message);
    }
  };


  useEffect(() => {
    if(currentUser){
        history.push("/home");
    }
  }, [])
  return (
    <>
      <div className="main_div">
        <form onSubmit={handleSubmit}>
          <h3>Please Sign In...</h3>
          <input
            type="email"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
