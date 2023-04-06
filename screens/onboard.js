import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import styles from '../styles/style'
import Onboard1 from '../assets/onboard1.png'
import Onboard2 from '../assets/onboard2.png'
import Onboard3 from '../assets/onboard3.png'
import Onboard4 from '../assets/onboard4.png'

import Home from './home'

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
    // const [index, setIndex] = useState(0);
    // const onPress = (i) => (index + i > -1) ? setIndex(index => index + i) : index

    return (
        // <View
        //     onTouchStart={e => touchX = e.nativeEvent.pageX}
        //     onTouchEnd={e => {
        //         if (touchX - e.nativeEvent.pageX > 40)
        //             onPress(-1)
        //     }}
        //     className="bg-white flex flex-col h-full"
        // >

        //     <Image style={styles.img} source={docs[index].image} />
        //     <Text style={styles.title}>{docs[index].title}</Text>
        //     <Text style={styles.content}>{docs[index].content}</Text>

        //     {index < 3 ?
        //         <View className="flex flex-row justify-between px-16 pt-8">
        //             <TouchableOpacity onPress={() =>
        //                 navigation.navigate('Home')
        //             }>
        //                 <Text className="font-semibold text-xl text-gray-800">Skip</Text>
        //             </TouchableOpacity>

        //             <TouchableOpacity onPress={() => onPress(1)}>
        //                 <Text className="font-semibold text-xl">Next</Text>
        //             </TouchableOpacity>
        //         </View>
        //         :
        //         <View style={styles.btn}>
        //             <TouchableOpacity style={styles.startBtn} onPress={() =>
        //                 navigation.navigate('Home')
        //             }>
        //                 <Text style={styles.startText}>Get Started</Text>
        //             </TouchableOpacity>
        //         </View>
        //     }
        // </View>

        <Onboarding
            bottomBarHeight={80}
            onSkip={() => navigation.navigate('Home')}
            onDone={() => navigation.navigate('Home')}

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