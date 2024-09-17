import React from 'react'
import cat from '../Data/cat.json'
import { Link } from 'react-router-dom'
import { Box, Container, Heading, Text, Flex, Avatar, Stack, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Cats = () => {
  return (
   <>
    <Container maxW={'container.x1'} minH={'88vh'}>
    <Flex justifyContent="center"   flexWrap="wrap">
          
          {cat.cats.map((item)=>(
            <TeamMember   name={item.title} role={item.description} imageUrl={item.imgSrc} delay={0.8} age={item.age} size={item.size} />
          ))}
         
          {/* Add more TeamMember components as needed */}
        </Flex>
    </Container>
   </>
  )
}

const TeamMember = ({ name, role, imageUrl, delay , age , size }) => {
   
     
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
        
        <VStack mt={3} css={{
            transform:'translateX(25%)'
        }} align="start">
        <Text  fontSize="xl" fontWeight="bold" color="blue.800">• Age - {age}</Text>
        <Text  fontSize="xl" fontWeight="bold" color="blue.800">• Size - {size}</Text>
        </VStack>
        <Text mt={4} fontSize="lg" color="gray.700">"{role}"</Text>
        <Button  mt={4} ><Link to={'/form'}>Adpot Me 🐾</Link></Button>
        
        
      </MotionBox>
    )
  }
  const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default Cats