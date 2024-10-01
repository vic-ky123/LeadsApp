import React, { Fragment, useState } from 'react';
import { StatusBar, Text, TouchableWithoutFeedback, View, Image, Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Leads from '../../containers/Leads/Leads';
import normalize from 'react-native-normalize';
import CreateLeads from '../../components/CreateLeads';
import { CurvedIconButton } from '../../components/FormElements/ButtonCollection';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const [createModal, setCreateModal] = useState(false);

    const MyTabBar = ({ state, descriptors, navigation }) => {

        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-evenly",
                alignItems: "center",
                borderTopLeftRadius: normalize(25),
                borderTopRightRadius: normalize(25),
                height: normalize(60),
                elevation: normalize(20),
                backgroundColor: "#fff",
            }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.jumpTo(route.name);
                        }
                    };

                    const icons = {
                        Dashboard: {
                            default: require('../../assets/dashboard.png'),
                            active: require('../../assets/dashboardActive.png'),
                        },
                        Leads: {
                            default: require('../../assets/leads.png'),
                            active: require('../../assets/leadsActive.png'),
                        }
                    };

                    const getIcon = (item, isFocused) => {
                        return isFocused ? icons[item].active : icons[item].default;
                    };

                    return (
                        <Fragment key={index}>
                            <TouchableWithoutFeedback
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                            >
                                <View style={[
                                    {
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingVertical: normalize(7),
                                        paddingLeft: normalize(10),
                                        paddingRight: normalize(15),
                                        borderRadius: normalize(22)
                                    },
                                    isFocused && {
                                        backgroundColor: "#F0F1FF",
                                    }
                                ]}>
                                    <Image
                                        source={getIcon(label, isFocused)}
                                        style={{
                                            height: normalize(32),
                                            width: normalize(32)
                                        }}
                                    />
                                    {isFocused ?
                                        <Text style={{
                                            color: isFocused ? "#2c67f2" : "#222",
                                            marginLeft: normalize(5),
                                            fontWeight: "600",
                                            fontSize: normalize(16)
                                        }}>{label}</Text>
                                        : null}
                                </View>
                            </TouchableWithoutFeedback>
                        </Fragment>
                    );
                })}
            </View>
        );
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <StatusBar
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="dark-content"
                />
                <Tab.Navigator
                    initialRouteName="Dashboard"
                    screenOptions={{ headerShown: false }}
                    tabBar={(props) => <MyTabBar {...props} />}
                >
                    <Tab.Screen
                        name="Dashboard"
                        component={Dashboard}
                    />
                    <Tab.Screen
                        name="Leads"
                        component={Leads}
                    />
                </Tab.Navigator>
                <CurvedIconButton
                    onPress={() => setCreateModal(true)}
                    icon={require("../../assets/createLead.png")}
                    label={"Create Lead"}
                />
            </View>
            <CreateLeads
                modalOpen={createModal}
                onClose={() => setCreateModal(!createModal)}
            />
        </>
    );
};

export default TabNavigator;