import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 32,
    },
    img: {
        width: '100%',
        height: '70%'
    },
    title: {
        fontWeight: 700,
        fontSize: 26,
        color: '#121212',
        textAlign: 'center',
        opacity: 0.8,
        paddingHorizontal: 32,
        paddingBottom: 16
    },
    content: {
        fontWeight: 400,
        fontSize: 18,
        color: '#242424',
        opacity: 0.7,
        textAlign: 'center'
    },
    naviBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        padding: 16,

    },
    skipBtn: {
        fontWeight: 400,
        fontSize: 16,
        color: '#2D2B2E',
        opacity: 0.6
    },
    nextBtn: {
        fontWeight: 400,
        fontSize: 16,
        color: '#2D2B2E',
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    startBtn: {
        backgroundColor: '#209CEE',
        borderRadius: 10,
        width: '50%',
        alignItems: 'center',
    },
    startText: {
        margin: 10,
        fontWeight: 700,
        fontSize: 16,
        color: '#fff'
    },
    home: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    homeContainer: {
        padding: 10,
        alignItems: 'center'
    }
});
