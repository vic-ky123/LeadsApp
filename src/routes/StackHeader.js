import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

const StackHeader = (props) => {

    const { title } = props;
    const navigation = useNavigation();

    return (
        <>
            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../assets/backArrowIcon.png")}
                        style={{
                            height: normalize(25),
                            width: normalize(25),
                        }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: normalize(100),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F3F2F2",
        justifyContent: 'space-between',
        paddingTop: normalize(40),
        paddingHorizontal: normalize(20)
    },
    headerTitle: {
        color: "#2c67f2",
        fontWeight: "700",
        fontSize: normalize(25),
        letterSpacing: normalize(3)
    }
});

export default StackHeader;