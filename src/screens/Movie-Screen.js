import { View, Text, Platform, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import { Navigation } from 'react-native-navigation'

var {width, height} = Dimensions.get('window')
const ios = Platform.OS = 'ios'
const topMargin = ios ? ' ' : 'mt-3';
export default function MovieScreen() {
  const {params: item} = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  useEffect(()=>{
    //call movie details using api

  }, {item})
  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className="flex-1 bg-neutral-900"
    >
        {/* back button and movie poster */}
        <View className="w-full">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4" + topMargin}>
                <TouchableOpacity onPress={()=> Navigation.goBack()} className="rounded-xl p-1 bg-yellow-500">
                    <ChevronLeftIcon size="28" stokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
                  <HeartIcon size="35" color={isFavourite ?'gray' : 'white'} />
                </TouchableOpacity>    
            </SafeAreaView>
            <View>
              <Image
                source={require('../../images/2.jpg')}
                style={{width, height: height*0.55}}
              />
              <linearGradient
                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23, 1)']}
                 style={{width, height: height*0.40}}
                 start={{x: 8.5, y: 0}}
                 end={{x:0.5, y:1}}
                 className=',absolute bottom-0'
                />
            </View>
        </View>
    </ScrollView>    
  )
}