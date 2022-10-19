import React from "react";
import { useState } from "react";
import { VStack, Input, Heading, Select, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://boiling-coast-59139.herokuapp.com/user/signup", {
      name: name,
      email: email,
      password:password,
    });
    navigate("/login");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      h="100vh"
      marginTop="150px"
    >
      <form action="" onSubmit={handleSubmit}>
        <VStack gap="20px">
          <Heading>Signup to Check BMI</Heading>
          <Input
            type="text"
            value={name}
            placeholder = "Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          ></Input>
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
            Signup{" "}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Signup;
