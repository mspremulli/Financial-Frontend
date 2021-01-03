import React, {useState} from 'react'
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //runs the validators in the backend to register a user
   const handleSignup = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setEmail(data.get('email'));
    setPassword(data.get('password'));
    console.log(email, password);
    
    try {
      axios.post('http://localhost:8080/LOGIN', {email, password})
      .then(console.log("logged in!"))
    } catch (error) {
      console.log("login failed")
    }

  } 
  //input form to submit login email & password
  return(
    <div className = "loginForm">
      <form onSubmit =  {(e) => handleSignup(e)}>
        <input
          type = "text"
          id = "email"
          name = 'email'
          placeholder = "Your email"
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
          Sign up
        </button>
      </form>
    </div>
    )
  
}

export default Signup;
