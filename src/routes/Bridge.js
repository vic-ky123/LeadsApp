import React from 'react';
import PostLoginNavigator from './Postlogin/PostLoginNavigator';

const Bridge = () => {

    return (
        <>
            {/* <NavigationContainer>
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
            </NavigationContainer> */}

            <PostLoginNavigator />
        </>
    )
};

export default Bridge;