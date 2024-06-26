import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';
import { useLoginMutation } from "../../../redux/slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../../redux/slices/authSlice";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigation = useNavigate();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation('/dashboard');
    }
  }, [navigation, userInfo]);

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation('/dashboard');
    } catch (error) {
      toast.error('Wrong email or password')
    }
  }

  return (
    <div>
        <Header/>
      <section className={styles.container}>
      <div className={styles.auth}>
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginError && <div className={styles.error}>{loginError}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging...' : 'Login'}
          </button>
        </form>
        <p className={styles.loginmessage} onClick={() => navigation('/register')}>
          <span>Register</span>
        </p>
      </div>
    </section>  
    <Footer/>
    </div>
    
  );
};

export default Login;