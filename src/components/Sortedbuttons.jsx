import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function Sortedbuttons({products,setProducts}) {

  return (
    <>
    <Button
    onClick={(e)=> {
        e.preventDefault()
    let newArr=[...products].sort((a,b)=>a.name.localeCompare(b.name))
    setProducts(newArr)
    }}
    >A to Z</Button>
    <Button
    onClick={(e)=> {
      e.preventDefault()
  let newArr=[...products].sort((a,b)=>a.name.localeCompare(b.name))
  setProducts(newArr)
  }}
  >Z to A</Button>
    <Button>Min to Max</Button>
    <Button>Max to Min</Button>

    </>
  )
}

export default Sortedbuttons