import React, { useState } from 'react'
import data from './data'
import Home from './screens/Home'
import {Text, View, Button} from 'react-native'

function App() {
  const [people, setPeople] = useState(data)
  return (

      <View className='container'>
        <Text> Birthday's today </Text>
        <Home people={people} />
        <Button onClick={() => setPeople([])}>clear all</Button>
      </View>
    

  )
}
// setPeople is a function to update the states
export default App