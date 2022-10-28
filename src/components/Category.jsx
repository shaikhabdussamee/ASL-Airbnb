import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
const category = [
    'Dates', 'Group Size', 'More Filter', "Great for Groups", "Family-Friendly", "Animals",
    "Art & Writing", "Baking", "Cooking", "Danca", "Drink", "Entertainment","Honey" 
]

function Category() {
  return (
    <Box w={'90%'} m='auto' mt={'-40px'}>
        <Flex justifyContent={'space-evenly'}>
            {
                category.map((el)=>(
                    <Button colorScheme='teal' variant='outline' border={'none'} p={8} borderRadius={'20px'}>{el}</Button>
                ))
            }
        </Flex>
    </Box>
  )
}

export default Category