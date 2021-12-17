import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';



import { Restaurant, Home } from './screens'
// import { OrderDelivery } from './screens'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import Landing from './screens/Landing';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    
      return (
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                    headerShown: false
                  }}
                  initialRouteName={'Landing'}
                >
                  <Stack.Screen name="Landing" component={Landing} />
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Restaurant" component={Restaurant} />
                  {/* <Stack.Screen name="OrderDelivery" component={OrderDelivery} /> */}
                  <Stack.Screen name="LoginScreen" component={LoginScreen} />
                  <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      )
    
}

export default App;