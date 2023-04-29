import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from "../../../constants"

const TabButton = ({name,activeTab,onHandleSearchType}) => (
  <TouchableOpacity 
    style={styles.btn(name,activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name,activeTab)}>{name}</Text>
  </TouchableOpacity>
)

//  @1:43:00 somehow the tabs dont want to load
const Tabs = ({ tabs,activeTab,setActiveTab}) => {
  console.log({tabs,activeTab})
  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        renderItem={({ item })=>{
          return <TabButton 
            name={item}
            activeTab={activeTab}
            onHandleSearchType={()=>setActiveTab(item)}
          />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap: SIZES.small / 2}}
      />
    </View>
  )
}

export default Tabs