import React from 'react'
import {Button, Container, Heading,Text} from '@chakra-ui/react'
import '../Styles/Home.css';
import {FaArrowDown} from 'react-icons/fa'

const Home = () => {
  return (
    <>
    <Container className='fit' mt={-20} borderRadius={30} maxW={'container.x1'} minH={'120vh'} >
    <a href={"#items"}>
        <Button css={{
         
          transform:'translate(10%,900%)'
        }} className='btnt' w={170} h={50}  backgroundColor="transparent"
        border="3px solid"
        borderColor="white"
        color="white"
        _hover={{ backgroundColor: 'white', color: 'black' }}> <Text marginEnd={2}>Scroll</Text><FaArrowDown color='black' /></Button></a>
    </Container>
    <Container id='items' className='fitt' mt={10} mb={5} borderRadius={30} maxW={'container.x1'} minH={'120vh'} >
          <Heading color={'white'} ml={420} css={{
            transform:'translateY(160%)'
          }}>
          Voices for the Voiceless
          </Heading>
          <Text width={'180vh'} fontSize={20}  align={'start'} color={'white'} css={{
            transform:'translate(10%,30%)'
          }}>
            Animal cruelty and the plight of stray animals are deeply connected issues that call for urgent attention. Animal cruelty, whether through neglect, abuse, or exploitation, causes immense suffering and is prevalent in various environments such as homes, farms, and public spaces. Stray animals, often abandoned by their owners or born on the streets, face a harsh existence. They struggle to find food, water, and shelter, and are vulnerable to disease, injury, and mistreatment. Many strays endure brutal conditions, including extreme weather and lack of medical care, which leads to high mortality rates.

Moreover, stray animals can become victims of human cruelty, targeted by individuals who see them as a nuisance rather than living beings deserving of care and respect. Addressing these issues requires comprehensive solutions: enforcing stricter anti-cruelty laws, promoting responsible pet ownership, and implementing widespread spay and neuter programs to control stray populations. Education plays a crucial role in fostering empathy and understanding towards animals, encouraging communities to treat them with kindness.

Rescue organizations and shelters also need support to provide care and find homes for stray and abused animals. By combining legal action, community engagement, and compassionate practices, we can significantly reduce animal suffering and improve the lives of stray animals, ensuring they receive the protection and love they deserve.
          </Text>
</Container>
    </>
  )
}

export default Home