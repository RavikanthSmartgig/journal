import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import MIcon from '@expo/vector-icons/MaterialCommunityIcons'

const Header = ({onCancel,title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={onCancel}>
        <MIcon name="window-close" size={24} color="red"/>
      </TouchableOpacity>
    </View>
  )
}

export default Header