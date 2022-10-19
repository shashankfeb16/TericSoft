import React from "react";
import { useState } from "react";
import { VStack, Input, Heading, Select, Button, Box } from "@chakra-ui/react";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getData, postData } from "../Redux/DataReducer/action";
import { useEffect } from "react";

const Bmi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const { data } = useSelector((state) => state.data);
  let id = data?._id;
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(name, age, height, weight));
  };
  useEffect(() => {
    if (data.length == 0) {
      dispatch(getData());
    }
  }, [data]);

  return (
    <Box>
      <Box display="flex" justifyContent="center"marginTop="150px">
        <form action="" onSubmit={handleSubmit}>
          <VStack gap="20px">
            <Heading>Enter details to Check BMI</Heading>
            <Input
              type="text"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <Input
              type="number"
              value={age}
              placeholder="Enter Your Age"
              onChange={(e) => setAge(e.target.value)}
            ></Input>
            <Input
              type="number"
              value={height}
              placeholder="Enter Your Height in meters"
              onChange={(e) => setHeight(e.target.value)}
            ></Input>
            <Input
              type="number"
              value={weight}
              placeholder="Enter Your Weight in Kg"
              onChange={(e) => setWeight(e.target.value)}
            ></Input>
            <Button type="submit" colorScheme="pink">
              Check{" "}
            </Button>
          </VStack>
        </form>
      </Box>
      <Heading>Your BMI is {data?.bmi}</Heading>
    </Box>
  );
};

export default Bmi;
