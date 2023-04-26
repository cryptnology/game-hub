import { Link } from 'react-router-dom';
import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image boxSize="60px" objectFit="cover" src={logo} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
