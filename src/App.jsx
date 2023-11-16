import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

import './App.css'
import Table from './components/Table'
import { ChakraProvider } from '@chakra-ui/react'
import Search from './components/Search'
import Sortedbuttons from './components/Sortedbuttons'
function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
      
    axios("https://northwind.vercel.app/api/products").then((res)=>{
        // console.log(res.data)
        setProducts(res.data)
    })
            }, [products])
  
  return (
   <ChakraProvider>
    <Sortedbuttons products={products} setProducts={setProducts}/>
<Search products={products} setProducts={setProducts}/>
<Table products={products} setProducts={setProducts}/>
   </ChakraProvider>
  )
}

export default App
