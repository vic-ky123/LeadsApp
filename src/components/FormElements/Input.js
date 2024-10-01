import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { TextInput, View } from "react-native";
import normalize from "react-native-normalize";

const Input = (props) => {

    const { inputLabel, labelText, value, onChange, errMsg, isOptional, placeHolder, inputContainer, keyboardType, inputStyle, errorInputStyle, errMsgStyle } = props;

    let dynamicInputStyle;

    if (errMsg !== "") {
        dynamicInputStyle = [styles.errorInputStyle, errorInputStyle]
    } else {
        dynamicInputStyle = [styles.inputStyle, inputStyle]
    }

    return (
        <>
            <View style={[styles.inputContainer, inputContainer]}>
                <View style={styles.labelContainer}>
                    <Text style={[styles.labelText, labelText]}>{inputLabel}</Text>
                    {isOptional ? <Text style={styles.optionalText}>(Optional)</Text> : null}
                </View>
                <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeHolder}
                    keyboardType={keyboardType}
                    style={dynamicInputStyle}
                />
                {errMsg ?
                    <View style={styles.errorContainer}>
                        <Image
                            source={require("../../assets/errorMark.png")}
                            style={{
                                height: normalize(21),
                                width: normalize(21),
                                marginRight: normalize(8)
                            }}
                        />
                        <Text style={[styles.errMsgStyle, errMsgStyle]}>{errMsg}</Text>
                    </View>
                    : null}
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        width: "100%",
        marginBottom: normalize(20)
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
        color: "#BBBBBB",
        fontWeight: "500",
        fontSize: normalize(13)
    },
    inputStyle: {
        height: normalize(45),
        paddingHorizontal: normalize(13),
        borderRadius: normalize(7),
        borderBottomWidth: normalize(3),
        borderBottomColor: "lightgrey",
        backgroundColor: "#F2F8F9",
        elevation: normalize(5)
    },
    errorInputStyle: {
        height: normalize(45),
        paddingHorizontal: normalize(13),
        borderRadius: normalize(7),
        borderBottomWidth: normalize(3),
        borderBottomColor: "#f72222",
        backgroundColor: "#FBD5D5",
        elevation: normalize(5)
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: normalize(9),
        marginLeft: normalize(5)
    },
    errMsgStyle: {
        color: "#f72222",
        fontSize: normalize(15)
    }
});

export default Input;