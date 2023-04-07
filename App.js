import OnBoard from './screens/onboard';
import Home from './screens/home'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/SignIn';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />


        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OnBoard" component={OnBoard} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App