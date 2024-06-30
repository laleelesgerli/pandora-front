import React, { useState, useEffect } from 'react';
import styles from './RegisterContent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../../../../redux/slices/usersApiSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { setCredentials } from "../../../../../redux/slices/authSlice";
import { toast } from "react-toastify";

const RegisterContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState("User"); // Default to User
  const [secretKey, setSecretKey] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    }
  }, [navigate, userInfo, location.state]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (userType === "Admin" && secretKey !== "ADMIN") {
      alert("Invalid Admin");
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const res = await register({ name, email, password, userType }).unwrap();
      dispatch(setCredentials({ ...res }));
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    } catch (error) {
      toast.error('Registration failed');
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.auth}>
        <h1>REGISTER</h1>
        <form onSubmit={handleRegister}>
          <div className={styles.inputContainer}>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className={styles.select}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          {userType === "Admin" && (
            <div className={styles.secretKeyContainer}>
              <input
                type="text"
                placeholder="Secret Key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                className={styles.input}
              />
            </div>
          )}
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" disabled={isLoading} className={styles.button}>
            {isLoading ? 'Creating User' : 'Register'}
          </button>
        </form>
        <p className={styles.loginmessage} onClick={() => navigate('/login')}>
          <span>Login</span>
        </p>
      </div>
    </section>
  );
};

export default RegisterContent;
