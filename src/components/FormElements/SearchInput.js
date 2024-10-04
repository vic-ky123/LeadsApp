import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import normalize from "react-native-normalize";

const SearchInput = (props) => {

    const { value, onSearch, inputContainer, keyboardType, inputStyle } = props;

    return (
        <>
            <View style={[styles.inputContainer, inputContainer]}>
                <TextInput
                    value={value}
                    onChangeText={onSearch}
                    placeholder={"Search..."}
                    keyboardType={keyboardType}
                    style={[styles.inputStyle, inputStyle]}
                />
                <View style={styles.searchBtn}>
                    <Image
                        source={require("../../assets/searchIcon.png")}
                        style={{
                            height: normalize(28),
                            width: normalize(28),
                        }}
                    />
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: normalize(45),
        paddingLeft: normalize(13),
        paddingRight: normalize(6),
        borderRadius: normalize(27),
        borderWidth: normalize(3),
        borderColor: "#BCBFC1",
        backgroundColor: "#FFFFFF",
        elevation: normalize(7)
    },
    labelContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },
    labelText: {
        marginLeft: normalize(5),
        marginBottom: normalize(8),
        color: "#7A7A7A",
        fontWeight: "500",
        fontSize: normalize(16)
    },
    optionalText: {
        marginLeft: normalize(5),
        marginBottom: normalize(5),
        color: "#A4A4A4",
        fontWeight: "500",
        fontSize: normalize(13)
    },
    inputStyle: {
        height: normalize(45),
    },
    searchBtn: {
        height: normalize(34),
        width: normalize(34),
        borderRadius: normalize(40),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3F9AFB"
    }
});

export default SearchInput;