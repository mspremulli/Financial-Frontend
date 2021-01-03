import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //runs the validators in the backend when login is clicked
 
   const Login = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setEmail(data.get('email'));
    setPassword(data.get('password'));
    console.log(email, password);

    let headers = {
      header1:"Access-Control-Allow-Origin",
      header2:"LOGIN"
    }

    axios.put('http://localhost:8080/LOGIN', {email, password}, headers)
  }
  //input form to submit login email & password
  return(
    <div className = "loginForm">
      <form onSubmit =  {(e) => Login(e)}>
        <input
          type = "text"
          id = "email"
          name = 'email'
          placeholder = "Your email here"
          required
        />
        <input
          type = "text"
          id = "password"
          name = 'password'
          placeholder = "Enter password"
          required
        />
        <br />
        <button >
          Login
        </button>
      </form>
    </div>
    )
  
}

export default Login;

