import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline';


const ios = Platform.OS == 'ios'

export default function HomeScreen() {
    const [trending, setTrend] = useState(1,2,3)
    return (
        <View className="flex flex-1 bg-neutral-800">
            <SafeAreaView>
                {/* Search bar and logo */}
                <SafeAreaView className={ios? "-mb-2" : "mb-3"}><StatusBar style="light" />
                    <View className="flex flex-row justify-between items-center mx-4"><Bars3CenterLeftIcon size="38" strokeWidth={2} color="white"/>
                    <Text className="text-white text-3xl font-bold"><Text className="text-3xl font-bold text-yellow-500">Si</Text>nema</Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30"strokeWidth={2} color="white"/>
                    </TouchableOpacity>
                    </View>
                </SafeAreaView>

                <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 10}}>
                    {/* Trending Movies Carousel */}

                </ScrollView>
                <TrendingMovies data={trending} />
            </SafeAreaView>
        </View>    
    )
}