import { View, Text, FlatList } from 'react-native'
import React, { useEffect ,useState} from 'react'
import { getAllProducts } from '../../service'
import ProductCard from './productCard'

const Product = () => {

  const [listOfProducts,setProducts]= useState([])

  const fetchProducts= async()=>{
    const res= await getAllProducts()
    // console.log("res in Product Screen",res)
    setProducts(res)
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <View>
      <FlatList data={listOfProducts}
        renderItem={ProductCard}
      />
    </View>
  )
}

export default Product