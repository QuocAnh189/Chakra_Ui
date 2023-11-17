"use client"

import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
  Container,
} from "@chakra-ui/react";

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title:'Logged out',
      description:'Successfully logged out',
      duration:5000,
      isClosable:true,
      status:'success',
      position:'top', 
      icon:<UnlockIcon/>
    });
  };

  return (

      <Flex as="nav" p="10px" alignItems="center" gap="10px" mb="40px">
      <Heading as="h1">Dojo Task</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar  src="/img/mario.png" >
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>anhquoc18092003@gmail.com</Text>
        <Button bg="purple.400" color="white" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>

  );
};

export default Navbar;
