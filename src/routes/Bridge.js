import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './Postlogin/TabNavigator';
import ViewLead from '../containers/ViewLead/ViewLead';
import StackHeader from './StackHeader';

const Stack = createNativeStackNavigator();

const Bridge = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={TabNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ViewLead"
                        component={ViewLead}
                        options={{
                            header: (props) => <StackHeader
                                title="Lead Details"
                                {...props}
                            />
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
};

export default Bridge;