import { View, Text, Button } from 'react-native'
import React,{useEffect, useState} from 'react'

const CountValue = () => {
    const [currentCountValue,setCountValue]= useState(0);

    const onPress=()=>{
        setCountValue(currentCountValue+1);
    }


  return (
    <View>
      <Text style={{fontSize:70}}>{currentCountValue}</Text>
      <Button title='Increment' onPress={onPress}/>
    </View>
  )
}

export default CountValue