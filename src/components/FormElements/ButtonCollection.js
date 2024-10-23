import React from "react";
import { StatusBar, Text, TouchableWithoutFeedback, View, Image, Modal, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import withDebounce from "../Debounce";

const curvedIconButton = (props) => {

    const { onPress, icon, label } = props;

    return (
        <>
            <TouchableWithoutFeedback onPress={onPress}>
                <LinearGradient
                    colors={['#2c67f2', '#62cff4']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.6, y: 0 }}
                    style={{
                        position: 'absolute',
                        bottom: normalize(80),
                        right: normalize(20),
                        borderRadius: normalize(20),
                        paddingRight: normalize(15),
                        paddingLeft: normalize(8),
                        paddingVertical: normalize(9),
                        elevation: normalize(7),
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        source={icon}
                        style={{
                            height: normalize(22),
                            width: normalize(22),
                            marginRight: normalize(8)
                        }}
                    />
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: normalize(18),
                        fontWeight: "600"
                    }}>{label}</Text>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </>
    )
};

export const CurvedIconButton = withDebounce(curvedIconButton);

const primaryButton = (props) => {

    const { onPress, label, containerStyle } = props;

    return (
        <>
            <TouchableWithoutFeedback onPress={onPress}>
                <LinearGradient
                    colors={['#2c67f2', '#62cff4']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.6, y: 0 }}
                    style={[
                        {
                            // flex: 1,
                            width: "100%",
                            borderRadius: normalize(20),
                            paddingVertical: normalize(9),
                            elevation: normalize(7),
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        containerStyle
                    ]}
                >
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: normalize(18),
                        fontWeight: "600"
                    }}>{label}</Text>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </>
    )
};

export const PrimaryButton = withDebounce(primaryButton);

const secondaryButton = (props) => {

    const { onPress, label } = props;

    return (
        <>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={[
                    {
                        // flex: 1,
                        width: "100%",
                        borderRadius: normalize(20),
                        paddingVertical: normalize(7),
                        elevation: normalize(6),
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        borderWidth: normalize(3),
                        borderColor: "#2c67f2"
                    }
                ]}>
                    <Text style={{
                        color: '#2c67f2',
                        fontSize: normalize(18),
                        fontWeight: "600"
                    }}>{label}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
};

export const SecondaryButton = withDebounce(secondaryButton);