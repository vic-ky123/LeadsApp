import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateLeads from "../../containers/CreateLeads/CreateLeads";

const Stack = createNativeStackNavigator();

const StackNavigtor = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CreateLeads" component={CreateLeads} />
        </Stack.Navigator>
    );
}

export default StackNavigtor;