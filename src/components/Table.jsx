import React from 'react'
import { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'


function Tablepro({products,setProducts}) {
// State for use products data everywhere
    // Axios for to get products
  
  return (
   <>
    <h1>Table</h1>
    <TableContainer>
  <Table variant='striped' colorScheme='gray'>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Price</Th>
        <Th>Discounted</Th>
        <Th>UnitsInStock</Th>
        <Th>Edit</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>

    <Tbody>

     {
        products.map((product,index)=> {
            // console.log(product.name ,index,product.id)
              return (
            <Tr key={product.id}
            style={{
                backgroundColor:
                  product.unitsInStock <= 20 ? "red" : "transparent",
              }}
            >
            <Td>{product.id}</Td>
            <Td>{product.name}</Td>
            <Td>{product.unitPrice}</Td>
            <Td>{product.discontinued? "True":"False"}</Td>
            <Td>{product.unitsInStock}</Td>
{/* EDIT BTN */}
            <Td><Button id={product.id} colorScheme='teal' variant='outline'
           onClick={(e)=> {
            console.log("edit",e.target.id)
           }}
            >Edit</Button></Td>

{/* DELETE BTN */}
            <Td><Button id={product.id} 
            colorScheme='teal' variant='outline'
        onClick={(e)=> {
            console.log(e.target.id)
            // console.log(products)
            let arr=[...products]
            let deletedarr=arr.filter((element)=>element.id!==e.target.id)
            // Delete from table
            setProducts(deletedarr)
            // Delete from API
            axios.delete(
                "https://northwind.vercel.app/api/products/" +
                  e.target.id
              );
        }}>Delete</Button></Td>
          </Tr>
          )
        })
       
     }

    </Tbody>
  </Table>
</TableContainer>
   </>
  )
}

export default Tablepro