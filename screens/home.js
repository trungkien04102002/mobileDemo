import { Image, View } from 'react-native'

import styles from '../styles/style'
import HomeImg from '../assets/home.png'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <Image style={styles.home} source={HomeImg} />
        </View>
    )
}

export default Home