import React from 'react'
import { Input } from '@chakra-ui/react'

function Search({products,setProducts}) {

  return (
    <Input onChange={(e) =>{
        console.log("niv")
    }} variant='flushed' type="text" placeholder='Search product'/>
  )
}

export default Search