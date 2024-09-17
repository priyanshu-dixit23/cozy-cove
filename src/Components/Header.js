import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Button, Menu, MenuButton, MenuList, MenuItem, Image, Text, Center } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import logo from '../Assests/logo.png'; // Make sure to replace this with the path to your logo
import '../Styles/Header.css';

const Header = () => {
  return (
    <HStack id='nav' className="header-container" p={'-50'} gap={5}>
      <Link className="logo" to='/'>

      </Link>
<Center css={{
    transform:'translateX(117%)'
}}>
      <Button variant={'ghost'} colorScheme='white' className="nav-button">
        <Link to='/'>Home</Link>
      </Button>

      

      <Button variant={'ghost'} colorScheme='white' className="nav-button">
        <Link to='/form'>Register</Link>
      </Button>

      <Menu>
        <MenuButton as={Button} rightIcon={<FaArrowDown/>} variant={'ghost'} colorScheme='white' className="nav-button">
          Explore
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link color='white' to='/dogs'>Dogs</Link>
          </MenuItem>
          <MenuItem>
            <Link color='whilte' to='/cats'>Cats</Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <Button variant={'ghost'} colorScheme='white' className="nav-button">
        <Link to='/about'>About</Link>
      </Button>

      <Text className="placeholder-text"> </Text>
      </Center>
    </HStack>
  );
}

export default Header;
