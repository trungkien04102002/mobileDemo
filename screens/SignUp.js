import {View, Text, Image, TouchableOpacity,TextInput, Animated} from 'react-native';
import login_img from '../img/login_img.png'
import { StyledComponent } from "nativewind";
import React, {useEffect, useRef, useLayoutEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
import styles from '../style.js';

const SignUp = ({ navigation }) => {
    const translateY = useRef(new Animated.Value(600)).current

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    }, [])

    const handleHide = () => {
        Animated.timing(translateY, {
            toValue: 600,
            duration: 200,
            useNativeDriver: true
        }).start(() => navigation.navigate("SignIn"));
    }

    return (
       <View className="flex flex-col bg-white h-full px-4 items-center ">
            <Image source={login_img} className="mt-16 mb-16 scale-125"></Image>
            {/* <Text className="text-2xl font-bold">Welcome</Text>
            <Text className="text-lg text-gray-800">By signing in, you are agree our</Text>
            <Text className="text-lg text-blue-400 font-semibold">Term and Conditions</Text> */}

            <Animated.View 
                style={{ transform: [{ translateY }] }} 
                className="flex flex-col gap-y-4 bg-gray-300 rounded-3xl w-full items-center h-full"
            >
                <StyledComponent component={Text} className="font-black text-2xl pt-4 pb-2">Sign Up</StyledComponent>
                <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white" placeholder="Enter Full Name" style={styles.shadow}/>
                <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white" placeholder="Enter Phone Number" style={styles.shadow}/>
                <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white" placeholder="Enter Email" style={styles.shadow}/>
                <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white mb-8" placeholder="Enter Password" style={styles.shadow}/>

                <StyledComponent component={TouchableOpacity} onPress={() => navigation.navigate("Home")} className="mb-4 px-8 py-3 bg-[#4682B4] rounded-md w-3/4 " style={styles.shadow}>
                    <StyledComponent component={Text} className="font-bold text-white text-xl text-center">Sign Up</StyledComponent>
                </StyledComponent>
                
                <StyledComponent component={View} className="flex flex-col ">
                        <StyledComponent component={Text} className="font-black font-medium text-center opacity-75">Already have an account yet?</StyledComponent>
                        <StyledComponent component={Text} onPress={handleHide} className="font-bold text-center text-blue-600 underline">Login here</StyledComponent>
                    </StyledComponent>

            </Animated.View>
       </View>
    );
}

export default SignUp;
