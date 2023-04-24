import OnBoard from './screens/onboard';
import Home from './screens/home'
import {useState,createContext,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/SignIn';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import {AsyncStorage} from 'react-native'
import Barcode from './screens/barCode';
const Stack = createNativeStackNavigator();
export const AddContext = createContext();
const App = () => {



  // useEffect(()=>{

  //   _storeData = async()=>{
  //     try{
  //       await AsyncStorage.setItem('isLogin',false)
  //     }
  //     catch(error){}
  //   }
    
  // },[isLogin])
  const [isLogin, setisLogin] = useState(false)

  // _retrieveData = async()=>{
  //   const value =  await AsyncStorage.getItem('isLogin')
  //   setisLogin(value)
  // }

  
  return (
    <AddContext.Provider value={setisLogin}>
       <NavigationContainer>
          <Stack.Navigator
            initialRouteName= {"OnBoard"}
            screenOptions={{ headerShown: false }}
          >
          <Stack.Screen name="OnBoard" component={OnBoard} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            {/* <Stack.Screen name="Camera" component={Barcode} /> */}


            <Stack.Screen name="Home" component={Home} />
        
          </Stack.Navigator>
      </NavigationContainer>
    </AddContext.Provider>
   
  );
}

export default App