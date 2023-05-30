import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email,
        firstName,
        lastName,
        password,
        role: 'user',
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Container>
        <Title>E-COMMERCE SIGNUP</Title>
        <Subtitle>WELCOME</Subtitle>
        <FormLabel htmlFor="firstName">First Name:</FormLabel>
        <FormInput
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          
        />

        <FormLabel htmlFor="lastName">Last Name:</FormLabel>
        <FormInput
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
         
        />

        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          
          />

        <FormLabel htmlFor="password">Password:</FormLabel>
        <FormInput
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
         />

        <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
        <FormInput
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          />

        {!passwordMatch && <ErrorMessage>Passwords do not match!</ErrorMessage>}

        <SignUpButton type="submit">Sign Up</SignUpButton>
      </Container>
    </form>
    <br />
    <p>OR</p>
    <br />
    <Linktext to="/Login">Log In</Linktext>
  </>
);
};

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 32px;
`;

const Subtitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  auto-complete: off;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 10px;
`;
const Linktext = styled(Link)`
  margin-top: 10px;
  font-size: 18px;
`;

export default SignUpForm;