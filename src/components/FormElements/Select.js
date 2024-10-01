import React, { Fragment } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import normalize from "react-native-normalize";
import SelectDropdown from "react-native-select-dropdown";

const Select = (props) => {

    const { inputLabel, options, labelText, value, isOptional, onSelect, errMsg, placeHolder, inputContainer, keyboardType, selectStyle, errorSelectStyle, errMsgStyle } = props;

    let dynamicSelectStyle;

    if (errMsg !== "") {
        dynamicSelectStyle = [styles.errorSelectStyle, errorSelectStyle]
    } else {
        dynamicSelectStyle = [styles.selectStyle, selectStyle]
    }


    return (
        <>
            <View style={[styles.inputContainer, inputContainer]}>
                <View style={styles.labelContainer}>
                    <Text style={[styles.labelText, labelText]}>{inputLabel}</Text>
                    {isOptional ? <Text style={styles.optionalText}>(Optional)</Text> : null}
                </View>
                <SelectDropdown
                    data={options}
                    onSelect={(selectedItem, index) => onSelect(selectedItem, index)}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={dynamicSelectStyle}>
                                {selectedItem && selectedItem.title ?
                                    <Text style={styles.selectedOptionStyle}>
                                        {selectedItem && selectedItem.title}
                                    </Text> : <Text style={styles.placeHolderStyle}>{placeHolder}</Text>}
                                <Image
                                    source={require("../../assets/dropDownArrow.png")}
                                    style={{
                                        height: normalize(24),
                                        width: normalize(24),
                                        transform: [{ rotate: isOpened ? '180deg' : '0deg' }]
                                    }}
                                />
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <Fragment key={index}>
                                <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                    <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                                </View>
                            </Fragment>
                        );
                    }}
                    showsVerticalScrollIndicator={true}
                    dropdownStyle={styles.dropdownMenuStyle}
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
    selectStyle: {
        height: normalize(45),
        paddingHorizontal: normalize(13),
        borderRadius: normalize(7),
        borderBottomWidth: normalize(3),
        borderBottomColor: "lightgrey",
        backgroundColor: "#F2F8F9",
        elevation: normalize(5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorSelectStyle: {
        height: normalize(45),
        paddingHorizontal: normalize(13),
        borderRadius: normalize(7),
        borderBottomWidth: normalize(3),
        borderBottomColor: "#f72222",
        backgroundColor: "#FBD5D5",
        elevation: normalize(5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    selectedOptionStyle: {
        flex: 1,
        fontSize: normalize(15),
        color: '#151E26',
    },
    placeHolderStyle: {
        flex: 1,
        fontSize: normalize(15),
        color: 'grey',
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: normalize(8),
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: normalize(12),
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: normalize(17),
        color: '#151E26',
        paddingVertical: normalize(10),
        borderBottomWidth: normalize(3),
        borderBottomColor: "lightgrey"
    }
});

export default Select;