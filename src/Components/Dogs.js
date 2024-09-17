import React from 'react'
import { Box, Container, Heading, Text, Flex, Avatar, Stack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import img1 from "../Assests/GR.jpg"
import img2 from "../Assests/gs.avif"
import img3 from "../Assests/IP.jpg"
import { useState } from 'react';
import DogAge from './DogAge';

const Dogs = () => {
    
  return (
    <>
    <Container maxW={'container.x1'} minH={'88vh'}>
    <Flex justifyContent="center"   flexWrap="wrap">
          <TeamMember   name="Golden Retriever" role="Affectionate, energetic, and highly trainable, making them excellent family pets" imageUrl={img1} delay={0.8} />
          <TeamMember name="Indian Pariah dog" role="Intelligent, hardy, and loyal with short coats and pointed ears with a strong survival instinct" imageUrl={img3} delay={1.3} />
          <TeamMember name="German Shepherd" role="Versatile, energetic, and devoted, excelling in various roles and tasks" imageUrl={img2} delay={1.0} />
         
          {/* Add more TeamMember components as needed */}
        </Flex>
    </Container>
    </>
  )
  
}

const TeamMember = ({ name, role, imageUrl, delay }) => {
    const [dogname, Setdogname] = useState(name);
    const [isOpen, setIsOpen] = useState(false);
    var [bol,setBol]=useState(false);
    const handleOpen = () => {
        setIsOpen(true);
       
      };
      const handleClose = () => {
        setIsOpen(false);
      };
   
      const box=()=>{
        console.log("live")
        setBol(true)
      }
    return (
      <MotionBox
         
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        textAlign="center"
        mx={6}
        my={8}
        height={400}
        borderRadius="lg"
        bg="white"
        p={4}
        boxShadow="lg"
        width={300}
        
      >
        <Avatar size="2xl" src={imageUrl} name={name} mb={4} borderColor="blue.800" borderWidth={2} />
        <Text  fontSize="xl" fontWeight="bold" color="blue.800">{name}</Text>
        <Text mt={6} fontSize="lg" color="gray.700">{role}</Text>
        <Button onClick={handleOpen} mt={5}>Proceed🐾</Button>
        <DogAge isOpen={isOpen} onClose={handleClose} name={name}/>
      </MotionBox>
    )
  }
  const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default Dogs