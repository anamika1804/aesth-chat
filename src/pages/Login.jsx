import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom';
import login from '../assets/login.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
const Login= () => {
  const [err , setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    }catch(err){
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='formImage'>
          <img src={login} alt="" />
        </div>
        <div className='formText'>
          <span className='logo'>Babble</span>
          <span className='title'>Login</span>
          <form onSubmit={handleSubmit}>
            <input required type="email" placeholder='Email'/>
            <input required type="password" placeholder='Password'/>

            <button>Sign In</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>Don't have an account?<Link to ="/register">Register</Link></p>
          <span className='help'>//try typing in <br/>Email - hrushiborhade123@gmail.com <br/> Password - 123456</span>
        </div>
      </div>
    </div>
  )
}

export default Login