import React from 'react'
import { Box, Container, Heading, Text, Flex, Avatar, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import img2 from "../Assests/img1.jpg"
import img1 from "../Assests/img2.jpg"
import img3 from "../Assests/t.jpeg"
import img4 from "../Assests/p.jpeg"



const About = () => {
  return (
    <>
      <Box id="about" py={12} >
      <Container maxW="container.lg">
        <MotionHeading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          color="blue.300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </MotionHeading>
        <Stack spacing={6} mb={12} px={[4, 8]}>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.400"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          > Welcome to Cozy Cove, your ultimate digital animal adoption solution! We are passionate about revolutionizing the pet community and helping as many stray animals as we can, making the adoption process more efficient, convenient, and helpful for both for adopters and the owners.
          </MotionText>
         
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.500"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
           Our mission is simple: To help as many stray animals as we can by providing the most suitable and safe surroundings that are both helpful and enjoyable for them.
By means of this website, we are diminishing the space between adopters and the pets. We are helping them get a safe home and a family to spend the rest of their lives with.
 Our platform is designed to adapt and evolve with the changing needs, ensuring the effortless help of all stray animals
          </MotionText>
        </Stack>
        <MotionHeading
          as="h3"
          size="lg"
          mb={6}
          textAlign="center"
          color="blue.300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Meet Our Team
        </MotionHeading>
        <Flex justifyContent="center" flexWrap="wrap">
          <TeamMember name="Tushar"  imageUrl={img1} delay={0.8} />
          <TeamMember name="Yuvraj"  imageUrl={img2} delay={1.0} />
          <TeamMember name="Abhishek"  imageUrl={img3} delay={1.3} />

          <TeamMember name="Priyanshu"  imageUrl={img4} delay={1.6} />

          
          {/* Add more TeamMember components as needed */}
        </Flex>
      </Container>
    </Box>
    </>
  )
}
const TeamMember = ({ name, role, imageUrl, delay }) => {
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
        borderRadius="lg"
        bg="white"
        p={4}
        boxShadow="lg"
        maxWidth="250px"
      >
        <Avatar size="2xl" src={imageUrl} name={name} mb={4} borderColor="blue.800" borderWidth={2} />
        <Text fontSize="xl" fontWeight="bold" color="blue.800">{name}</Text>
        <Text fontSize="lg" color="gray.700">{role}</Text>
      </MotionBox>
    )
  }
  
  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
export default About