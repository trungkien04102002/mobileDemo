
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import styles from '../styles/style'
import Onboard1 from '../assets/onboard1.png'
import Onboard2 from '../assets/onboard2.png'
import Onboard3 from '../assets/onboard3.png'
import Onboard4 from '../assets/onboard4.png'
import {useState,createContext,useEffect,useContext} from 'react'

import Home from './home'
import {AddContext} from '../App'
const docs = [
    {
        image: Onboard1,
        title: 'Welcome to Runaway',
        content: 'We provide hi-tech features allowing you to connect with other runners...'
    },
    {
        image: Onboard2,
        title: 'Friends indeed',
        content: 'Customize your own preferences when finding friends. They could be boys or girls or whatever...'
    },
    {
        image: Onboard3,
        title: 'Run for health ... and rewards',
        content: 'Follow our events board to make sure you come home with not only better muscle but some gifts'
    },
    {
        image: Onboard4,
        title: 'In case, you have no plan',
        content: 'Use our recommendation feature to get well-personalized route. '
    },
]

const OnBoard = ({ navigation }) => {

    const setIsLogin = useContext(AddContext)
    // const onPress = (i) => (index + i > -1) ? setIndex(index => index + i) : index
    return (
        <Onboarding
            bottomBarHeight={80}
            onSkip={() => {navigation.navigate('SignIn'); 
            
            _storeData = async()=>{
                try{
                await AsyncStorage.setItem('isLogin',true)
                }
                catch(error){}
            }
            setIsLogin(true)

            }}
            onDone={() => {navigation.navigate('SignIn');; 
            
            _storeData = async()=>{
                try{
                await AsyncStorage.setItem('isLogin',true)
                }
                catch(error){}
            }
            setIsLogin(true)
            }}

            pages={[
                {
                backgroundColor: '#fff',
                image: <Image source={Onboard1} />,
                title: 'Welcome to Runaway',
                subtitle: 'We provide hi-tech features allowing you to connect with other runners...',
                },
                {
                backgroundColor: '#fff',
                image: <Image source={Onboard2} />,
                title: 'Friends indeed',
                subtitle: 'Customize your own preferences when finding friends. They could be boys or girls or whatever...',
                },
                {
                backgroundColor: '#fff',
                image: <Image source={Onboard3} />,
                title: 'In case, you have no plan',
                subtitle: 'Use our recommendation feature to get well-personalized route.',
                },
                
            ]}
        />
    );
}

export default OnBoard