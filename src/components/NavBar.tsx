import { Link } from 'react-router-dom';
import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <HStack boxSize="60px">
        <Link to="/">
          <Image src={logo} />
        </Link>
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
