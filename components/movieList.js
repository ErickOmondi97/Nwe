import { View, TouchableOpacity, Image, Text, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import { Navigation } from 'react-native-navigation';

var {width, height} = Dimensions.get('window')
export default function MovieList({title, data}){
  let movieName = 'Any Movie You can Think of'; 

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text className="text-lg text-yellow-500" >See All</Text>
        </TouchableOpacity>
      </View>
      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
          {
            data.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={()=> Navigation.navigate('Movie', item)}
                >
                  <View className="space-y-1 mr-4">
                    <Image
                      source={require('../images/4.jpg')}
                      style={{width: width*0.33, height: height*0.22}}
                    />  
                    <Text className="text-neutral-300 ml-1">{movieName.length > 14 ? movieName.slice(0, 14) + "..." : movieName}</Text>
                  </View>
                </TouchableWithoutFeedback>
              
              )
            })  
          }
        </ScrollView>
    </View>
  )
}