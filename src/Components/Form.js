import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';


const Form = () => {
  return (
    <>
    <Container  h={'110vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'2'}
          >
            <Heading  alignSelf={'center'}>COZY COVE</Heading>
  
            <Input
              placeholder={'Name'}
              type={'text'}
              required // requiured matlab chaiye hi chahiye
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Phone Number'}
              type={'Number'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button colorScheme={'purple'} type={'submit'}>
              Book Your Appointment
            </Button>
  
          </VStack>
        </form>
      </Container>
    </>
  )
}

export default Form