import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/routes/Postlogin/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      {/* <NavigationContainer>
        <TabNavigator />
      </NavigationContainer> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
