import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles.js'

const CardComp = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default CardComp