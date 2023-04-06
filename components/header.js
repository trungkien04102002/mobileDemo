import {View, Text, Image, TouchableWithoutFeedback, Pressable} from 'react-native';
import { StyledComponent } from "nativewind";
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import MenuSide from './menuSide';
import Notification from './notification';

const Header = ( props ) => {
    const id = props.id
    const navigation = useNavigation()

    const [menuSideState, setMenuSideState] = useState(false)
    const [notiState, setNotiState] = useState(false)

    return (
        <>
            {menuSideState && 
                <>
                    <MenuSide id={id} />

                    <TouchableWithoutFeedback onPress={() => setMenuSideState(false)}>
                        <View className='absolute right-[-4] top-[-10] w-[25%] h-screen z-50'>
                        </View>
                    </TouchableWithoutFeedback>
                </>
            }

            {notiState && 
                <>
                    <Notification />
                    
                    <TouchableWithoutFeedback onPress={() => setNotiState(false)}>
                        <View className='absolute left-0 right-0 top-0 h-screen z-40'>
                        </View>
                    </TouchableWithoutFeedback>
                </>
            }

            <View className="flex flex-row justify-between w-full px-3 items-center">
                <Pressable onPress={() => setMenuSideState(true)}>
                    <StyledComponent component={Image} className="object-cover" 
                        source={require('../img/menuIcon.png')}>
                    </StyledComponent>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Profile')}>
                <View className="flex flex-row gap-x-5 items-center">
                    <StyledComponent component={Image} className="object-cover" 
                        source={require('../img/profile.png')}>
                    </StyledComponent>
                    <StyledComponent component={View} className="flex flex-col">
                        <Text className="font-black text-xl">Hi Taylor S.</Text>
                        <Text className="font-semibold text-[#838A8F]">Monday, 20 Jan</Text>
                    </StyledComponent>
                </View>
                </Pressable>
                
                <Pressable onPress={() => setNotiState(true)}>
                    <Image className="object-cover" source={require('../img/bellicon.png')}></Image>
                </Pressable>

            </View>
        </>
    );
}

export default Header;
