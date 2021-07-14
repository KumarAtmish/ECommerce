import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

import { CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const adminPassword = {
    email: "admin",
    password: "123"
  };

export default function App() {
    let history = useHistory();
    const [onLoading, setOnLoading] = useState(false);
    const [successSnackbar, setSuccessSnackbar] = useState(false);
    const [errorSnackbar, setErrorSnackbar] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const[ login, setLogin] = useState({
        userId:"",
        password:"",
      })
      const {userId, password } = login;
      
      const onInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
      };

      // on submit function
    const loginHandler = async (e) => {
      e.preventDefault();

      if(login.userId &&
        login.password 
        ){
         try {
           setOnLoading(true);
           if (
            login.userId === adminPassword.email &&
            login.password === adminPassword.password
          ){
            history.push('/home');
            setOnLoading(false)
            setSuccessSnackbar(true);
          }else{
            setErrorMessage("Incorrect Password");
            setErrorSnackbar(true);
          }
           
           setOnLoading(false)
           setSuccessSnackbar(true);
          //  console.log("stickyPost",data);
         } catch (error) {
           setOnLoading(false);
           setErrorMessage( error.response && error.response.data.message ? error.response.data.message : error.message);
           setErrorSnackbar(true);
         }
        }else{
         setErrorMessage("Please fill all required fields");
         setErrorSnackbar(true);
        }
    }

  return (
    <div className="Login">
      <div className="container">
        <form onSubmit={(e) => loginHandler(e)}>
         <div className="loginTitle">Login</div>
         <div className="inputContainer">
          <div>
            <p>User Id</p>
            <input
              type="text"
              name="userId"
              placeholder="Enter Your User ID"
              value={userId}
              onChange={(e)=> onInputChange(e)} 
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={(e)=> onInputChange(e)} 
            />
          </div>
         </div>
         <button >{onLoading? <CircularProgress /> : "LOGIN"}</button>
        </form>
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={successSnackbar}
            autoHideDuration={1200}
            onClose={() => setSuccessSnackbar(false)}
        >
            <Alert severity='success' variant='filled'>
                Login Success
            </Alert>
        </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={errorSnackbar}
                autoHideDuration={1600}
                onClose={() => setErrorSnackbar(false)}
            >
            <Alert severity='error' variant='filled'>
                {errorMessage.substring(0,50)}
            </Alert>
        </Snackbar>
      </div>
    </div>
  );
}