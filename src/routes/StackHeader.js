import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';

const StackHeader = (props) => {

    const { title } = props;
    const navigation = useNavigation();

    return (
        <>
            {/* <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <LinearGradient
                colors={['#023299', '#024BE8', '#3DA0FA']}
                start={{ x: 0, y: 2 }}
                end={{ x: 1.4, y: 0 }}
                style={{
                    position: 'absolute',
                    height: normalize(120),
                    width: "100%",
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: normalize(40)
                }}
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../assets/backArrowIcon.png")}
                            style={{
                                height: normalize(26),
                                width: normalize(26),
                                marginTop: normalize(5)
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
                <View style={{
                    height: normalize(15),
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    borderTopLeftRadius: normalize(18),
                    borderTopRightRadius: normalize(18),
                    alignSelf: "flex-end"
                }} />
            </LinearGradient> */}

            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle="light-content"
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
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(20),
        backgroundColor: "transparent",
        position: "absolute",
        marginTop: normalize(55)
    },
    headerTitle: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: normalize(24),
        letterSpacing: normalize(3)
    }
});

export default StackHeader;