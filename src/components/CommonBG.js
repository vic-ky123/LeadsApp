import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import normalize from "react-native-normalize";

const CommonBG = ({ children }) => {

    return (
        <>
            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <LinearGradient
                colors={['#3DA0FA', '#024BE8', '#023299']}
                start={{ x: 0, y: 3 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientBackground}
            >
                <View style={styles.bottomWhiteSection} />
            </LinearGradient>
            <View style={styles.childrenContainer}>
                {children}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    gradientBackground: {
        position: 'absolute',
        height: normalize(118),
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: normalize(40)
    },
    bottomWhiteSection: {
        height: normalize(15),
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: normalize(20),
        borderTopRightRadius: normalize(20)
    },
    childrenContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: normalize(22),
        marginTop: normalize(118)
    }
});

export default CommonBG;