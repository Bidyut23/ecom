import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = (password) => {
    return password.length >= 8;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');  
    }
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }
    if (isValid) {
        axios.post('/api/login', { email, password })
        .then((response) => {
      setLoggedIn(true);
    })
    .catch((error) => {
        console.error('Login error:', error);
      });
  }}

  const handleSignOut = () => {
    setLoggedIn(false);
  }

  if (loggedIn) {
    return (
      <div>
        <p>Welcome, {email}!</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <Container1>
      <Title1>E-COMMERCE LOGIN</Title1>
      <Subtitle1>WELCOME</Subtitle1>
      <Form onSubmit={handleSubmit}>
        <Label1>
          Email:
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Error>{emailError}</Error>
        </Label1>
        <br />
        <Label2>
          Password:
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Error>{passwordError}</Error>
        </Label2>
        <br />
        <Button type="submit">LogIn</Button>
        <Label3>
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
          Remember me
        </Label3>
      </Form>
      <br/>
      <p>OR</p>
      <br/>
      <Linktext to="/Signup">SignUpForm</Linktext>
    </Container1>
  );
}

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title1 = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle1 = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label1 = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 05px;
  font-size: 15px;
`;

const Label2 = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 05px;
  font-size: 15px;
`;

const Label3 = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 05px;
  font-size: 15px;
`;

const Input = styled.input`
  margin-top: 5px;
  padding: 5px;
  autocomplete: off;
`;

const Error = styled.div`
  color: red;
  margin-top: 5px;
`;

const Button = styled.button`
  margin-top: 06px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Linktext = styled(Link)`
  margin-top: 10px;
  font-size: 18px;
`;



export default LogIn;