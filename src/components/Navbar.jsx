import React from 'react'
import { Box, 
    Image, 
    Button, 
    Flex,
    Hide,
    Show,
} from '@chakra-ui/react';
import logo from "./images/logo.png";
import logo2 from "./images/logo2.webp";

import { BiGlobe } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import { HamburgerIcon } from '@chakra-ui/icons'

function Navbar() {
  return (
      <Box w={'100%'} borderBottom='1px solid gray' pt={3} pb={2}>
        <Box w={'90%'} m={'auto'}>
            <Flex justifyContent={'space-between'}>
                <Hide below={'800px'}>    
                    <Box><Image w={'125px'} src={logo} alt="logo"/></Box>
                </Hide>
                <Show below='800px'>
                    <Box><Image w={'50px'} h={'50px'} src={logo2} alt="logo2"/></Box>
                </Show>
                <Hide below='500px'>
                    <Box mt={2}>
                        <Flex w={'300px'} justifyContent={"space-evenly"}>
                            <Button 
                                borderRadius={'20px'} 
                                borderColor={'gray.100'} 
                                colorScheme='black' 
                                variant='outline'
                                _hover={{
                                    background: "gray.100",
                                  }}
                            >Become a host</Button>
                            <Box w={5} mt={3}><BiGlobe /></Box>
                            <Box 
                                boxShadow='sm' 
                                border={'1px solid gray'} 
                                borderRadius={'20px'} 
                                p={1}
                                _hover={{
                                    boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
                                  }}
                            >
                                <Flex gap={3}>
                                    <Box mt={1} >
                                        <HamburgerIcon w={6}/>
                                    </Box>
                                    <Box mt={2}>
                                        <CgProfile w={6} h={6}/>
                                    </Box>
                                </Flex>
                        </Box>
                    </Flex>
                </Box>
                </Hide>
                
            </Flex>
        </Box>
    </Box>
  )
}

export default Navbar