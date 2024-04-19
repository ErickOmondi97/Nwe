import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from "../../components/Trending-Movies";
import MovieList from "../../components/movieList";



const ios = Platform.OS == 'ios'

export default function HomeScreen() {
    const [trending, setTrending] = useState([1, 2, 3]);
    const [upcoming, setComing] = useState([1, 2, 3]);
    const [topRated, setTopRated] = useState([1, 2, 3]);



    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView>
                {/* Search bar and logo */}
                <SafeAreaView className={ios? "-mb-2" : "mb-3"}>
                    <StatusBar style="light" />
                    <View className="flex flex-row justify-between items-center mx-4">
                        <Bars3CenterLeftIcon size="38" strokeWidth={2} color="white"/>
                        <Text className="text-white text-3xl font-bold"><Text className="text-3xl font-bold text-yellow-500">Si</Text>nema</Text>
                        <TouchableOpacity>
                            <MagnifyingGlassIcon size="30"strokeWidth={3} color="white"/>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 10}}
            >
                {/* Trending Movies Carousel */}
                <TrendingMovies data={trending}/>
                {/* Upcoming Movies Row */}
                <MovieList title="Upcoming" data={upcoming}/> 
                
                {/* Top Rated Movies Row */}
                <MovieList title="Top Rated" data={topRated}/> 
            </ScrollView>
                
        </View>
    );
}