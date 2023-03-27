import { HStack, Image } from '@chakra-ui/react';

import { ColorModeSwitch, SearchInput } from '.';
import { logo } from '../assets';

const NavBar = () => {
  return (
    <HStack padding="6px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
