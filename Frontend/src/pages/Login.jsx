
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginApi } from '../Redux/UserReducer/action'
import { Link, useNavigate } from 'react-router-dom';
import { VStack, Heading, Select, Button, Box,Input} from "@chakra-ui/react";
const Login = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {token} = useSelector((state)=>state.user);
  const {isAuth} = useSelector((state)=>state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginApi(email,password))
  };
  useEffect(()=>{
    if(token){
        navigate("/checkbmi", { replace: true })
    }
  },[token,isAuth])
  return (
    <Box
      display="flex"
      justifyContent="center"
      h="100vh"
      marginTop="150px"
    >
      <form action="" onSubmit={handleSubmit}>
        <VStack gap="20px">
          <Heading>Login to Check BMI</Heading>
            <Input
            type="email"
            value={email}
            placeholder = "Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
            <Input
            type="password"
            value={password}
            placeholder = "Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button type="submit" colorScheme="pink">
            Login{" "}
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default Login