import {View, Text, Image, ScrollView, Pressable, TextInput} from 'react-native'


import Header from '../components/header'
import activity_card from '../img/activity_card.png'
import yoga from '../img/yoga.png'
import loveIcon from '../img/icon.png'
import running from '../img/running.png'
import clock from '../img/clock.png'

const Home = () => {
    return (
        <ScrollView className="flex flex-col h-screen bg-white">
            
            <View className='pt-8 z-30'>
                    <Header/>
            </View>
            <View className='px-4'>
                <Text className='text-2xl pt-4'>Find your</Text>
                <Text className='text-2xl font-bold'>Friends now!</Text>

                <TextInput placeholder="search" className='rounded-full border px-4 py-2 mt-2'></TextInput>
                <Image source={activity_card} className="items-center mx-auto my-6 scale-110"></Image>

                <View className='flex flex-row justify-between py-2'>
                    <Text className='font-bold text-xl'>Recommendation Friends</Text>
                    <Text className='text-blue-500 text-xl'>See all</Text>
                </View>

                <View className='flex flex-row justify-between bg-emerald-100 rounded-2xl items-center p-2 py-4'>
                    <Image source={yoga} className></Image>
                    <View className='flex flex-col'>
                        <Text className='font-bold text-xl'>Running at New York</Text>
                        <Text className='font-bold text-lg text-blue-500'>With Rachael Wisdom</Text>
                    </View>
                    <Image source={loveIcon} className></Image>
                </View>

                <View className='flex flex-row gap-x-4 py-8'>
                    <View className='flex flex-row bg-blue-500 items-center p-2 rounded-xl px-6 gap-x-2'>
                        <Image source={clock}></Image>
                        <Text className='font-bold text-white text-xl'>10.00 mins</Text>
                    </View>
                    <View className='flex flex-row bg-orange-200 items-center p-2 rounded-xl px-6 gap-x-2'>
                        <Image source={running}></Image>
                        <Text className='font-bold  text-xl'>Running</Text>
                    </View>
                </View>

                <View className='flex flex-col gap-y-2 bg-yellow-200 p-3 rounded-xl'>
                    <View className='flex flex-row items-center gap-x-3'>
                        <Image source={running}></Image>
                        <Text className='font-bold  text-xl'>Running</Text>
                        <Text className='font-bold text-'>8.00 AM - 9.30 AM</Text>
                    </View>

                    <View className="flex flex-row gap-x-4 items-center">
                        <Text className='font-bold text-4xl'>1.32</Text>
                        <Text className='font-semibold'>hours</Text>
                        <Text className='font-bold text-4xl'>9.50</Text>
                        <Text className='font-semibold'>kilometers</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home