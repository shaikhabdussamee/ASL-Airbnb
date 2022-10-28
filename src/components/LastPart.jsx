import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import img from "../a.webp";
const image = [img,img,img,img,img,img,img,img,img,]

function LastPart() {
  return (
    <Box mt='50px'>
        <SimpleGrid columns={[4,5,6]}>
            {
                image.map((el)=>(
                    <Box>
                        <Image src={img} w='200px'/>
                    </Box>
                ))
            }
        </SimpleGrid>
    </Box>
  )
}

export default LastPart