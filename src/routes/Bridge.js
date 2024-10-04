import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './Postlogin/TabNavigator';

const Stack = createNativeStackNavigator();

const Bridge = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
};

export default Bridge;