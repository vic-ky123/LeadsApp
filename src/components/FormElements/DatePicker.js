import moment from "moment";
import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import normalize from "react-native-normalize";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from 'dayjs';

const DatePicker = (props) => {

    const { inputLabel, openDateModal, openPicker, isOptional, closeDateModal, labelText, value, onSelect, errMsg, placeHolder, inputContainer, keyboardType, selectStyle, errorSelectStyle, errMsgStyle } = props;

    const [date, setDate] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState("");

    let dynamicSelectStyle;

    if (errMsg !== "") {
        dynamicSelectStyle = [styles.errorSelectStyle, errorSelectStyle]
    } else {
        dynamicSelectStyle = [styles.selectStyle, selectStyle]
    }

    const onDatePick = (params) => {
        if (params && params.date) {
            setDate(params.date);
            const formattedDate = dayjs(params.date).toDate();
            setSelectedDate(moment(formattedDate).format('DD/MM/YYYY'));
            onSelect(moment(formattedDate).format('DD/MM/YYYY'));
        } else {
            console.error("Invalid params in onDatePick", params);
        }

        closeDateModal();
    };

    return (
        <>
            <View style={[styles.inputContainer, inputContainer]}>
                <View style={styles.labelContainer}>
                    <Text style={[styles.labelText, labelText]}>{inputLabel}</Text>
                    {isOptional ? <Text style={styles.optionalText}>(Optional)</Text> : null}
                </View>
                <TouchableWithoutFeedback onPress={() => openPicker()}>
                    <View style={dynamicSelectStyle}>
                        {selectedDate ? <Text style={styles.selectedOptionStyle}>{selectedDate}</Text> : <Text style={styles.placeHolderStyle}>{placeHolder}</Text>}
                        <Image
                            source={require("../../assets/calenderIcon.png")}
                            style={{
                                height: normalize(19),
                                width: normalize(19),
                                marginRight: normalize(5)
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={openDateModal}
            >
                <TouchableWithoutFeedback onPress={closeDateModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.parentContainer}>
                            <DateTimePicker
                                mode="single"
                                date={date}
                                onChange={(params) => onDatePick(params)}
                                headerTextStyle={{ color: "#2c67f2", fontSize: normalize(20) }}
                                todayContainerStyle={{ borderRadius: normalize(8) }}
                                selectedItemColor={"#2c67f2"}
                                dayContainerStyle={{ borderRadius: normalize(8) }}
                            // minDate={dayjs().min(dayjs())}
                            // maxDate={dayjs().add(1, 'year').toDate()}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        height: "100%",
        width: "100%",
        paddingTop: normalize(10)
    },
    parentContainer: {
        flex: 1,
        height: "auto",
        width: "100%",
        backgroundColor: "#FFFFFF",
        position: "absolute",
        bottom: normalize(0),
        borderTopLeftRadius: normalize(23),
        borderTopRightRadius: normalize(23),
        paddingTop: normalize(20)
    },
});

export default DatePicker;