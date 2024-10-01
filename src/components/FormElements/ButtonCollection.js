import React from "react";
import { StatusBar, Text, TouchableWithoutFeedback, View, Image, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';

export const CurvedIconButton = (props) => {

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