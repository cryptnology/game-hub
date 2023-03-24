import { HStack, Image } from '@chakra-ui/react';

import { ColorModeSwitch } from '.';
import { logo } from '../assets';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="6px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
