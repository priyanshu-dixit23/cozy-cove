import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Radio, RadioGroup, Stack, Button, Table, Heading, Toast } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, Navigate ,useNavigate} from 'react-router-dom'
import data from "../Data/data.json"

const DogAge = ({name,isOpen, onClose}) => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (value) => {
        setSelectedOption(value);
      };
      const handleSubmit =()=>{
        
           if(selectedOption=="0to7" && name=="Golden Retriever"){
              const Dataa =  data.seven.filter(item=>
                item.category.toLowerCase().includes(name.toLowerCase())
              )
              const searchData = { prop1: Dataa };
          navigate('/dogsDesc', { state: searchData });
              
           }
          else if(selectedOption=="0to7" && name=="Indian Pariah dog"){
            const Dataa =  data.seven.filter(item=>
              item.category.toLowerCase().includes(name.toLowerCase())
              
            )
            const searchData = { prop1: Dataa };
          navigate('/dogsDesc', { state: searchData });
         }
        else if(selectedOption=="0to7" && name=="German Shepherd"){
            const Dataa =  data.seven.filter(item=>
              item.category.toLowerCase().includes(name.toLowerCase())
            )
            const searchData = { prop1: Dataa };
         // Navigate to another page with props
          navigate('/dogsDesc', { state: searchData });
         }


        //  if(selectedOption=="8to15" && name=="German Shepherd"){
        //     const Dataa =  data.eight.filter(item=>
        //       item.category.toLowerCase().includes(name.toLowerCase())
        //     )
        //     const searchData = { prop1: Dataa };
        //  // Navigate to another page with props
        //   navigate('/dogsDesc', { state: searchData });
        //  }
         if(selectedOption=="8to15" && name=="Indian Pariah dog"){
            const Dataa =  data.eight.filter(item=>
              item.category.toLowerCase().includes(name.toLowerCase())
            )
            const searchData = { prop1: Dataa };
         // Navigate to another page with props
          navigate('/dogsDesc', { state: searchData });
         }
        else if(selectedOption=="8to15" && name=="Golden Retriever"){
            const Dataa =  data.eight.filter(item=>
              item.category.toLowerCase().includes(name.toLowerCase())
            )
            const searchData = { prop1: Dataa };
         // Navigate to another page with props
          navigate('/dogsDesc', { state: searchData });
         }




         if(selectedOption=="16to20" && name=="Indian Pariah dog"){
            const Dataa =  data.sixteen.filter(item=>
              item.category.toLowerCase().includes(name.toLowerCase())
            )
            const searchData = { prop1: Dataa };
         // Navigate to another page with props
          navigate('/dogsDesc', { state: searchData });
         }

         
      }
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent>
        {isOpen?<><ModalHeader>Age</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            <Stack direction="column">
              <Radio value="0to7">0-7 Years</Radio>
              <Radio value="8to15">8-15 Years</Radio>
              <Radio value="16to20">16-20 Years</Radio>

            </Stack>
          </RadioGroup>
          <Button colorScheme="blue" onClick={handleSubmit} mt={4}>Submit</Button>
        </ModalBody></>:<>
            <ModalCloseButton/>
            <ModalBody >
                <Heading size={'small'}>Enter Table Number First</Heading>
            </ModalBody>
        </>}
      </ModalContent>
    </Modal>
  
    </>
  )
}


export default DogAge