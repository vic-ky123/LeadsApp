import React, { useState } from "react";
import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import normalize from "react-native-normalize";
import Input from "./FormElements/Input";
import Select from "./FormElements/Select";
import DatePicker from "./FormElements/DatePicker";

const CreateLeads = (props) => {

    const { modalOpen, onClose } = props;

    const [dateModal, setDateModal] = useState(false);

    const pickDate = () => {
        setDateModal(!dateModal);
    };

    const handleChange = (name, value, index) => {
        console.log("Name ---> ", name);
        console.log("Value ---> ", value);
        console.log("Index ---> ", index);
    };

    const loanTypes = [
        { title: 'Personal Loan' },
        { title: 'Home Loan' },
        { title: 'Bike Loan' },
        { title: 'Car Loan' },
        { title: 'Jewel Loan' },
        { title: 'Business Loan' },
        { title: 'Educational Loan' }
    ];

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOpen}
            >
                <View style={styles.modalContainer}>
                    <StatusBar
                        translucent={true}
                        backgroundColor="rgba(52, 52, 52, 0.5)"
                        barStyle="light-content"
                    />
                    <View style={styles.parentContainer}>
                        <View style={styles.headerContainer}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image
                                    source={require("../assets/leadsActive.png")}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(28),
                                        marginRight: normalize(7),
                                        marginTop: normalize(5)
                                    }}
                                />
                                <Text style={{
                                    fontSize: normalize(21),
                                    fontWeight: "700",
                                    color: "#3F3F3F"
                                }}>Create New Lead</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={onClose}>
                                <Image
                                    source={require("../assets/closeIcon.png")}
                                    style={{
                                        height: normalize(23),
                                        width: normalize(23)
                                    }}
                                />
                            </TouchableWithoutFeedback>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.scrollContainer}>
                                <Input
                                    inputLabel="Name"
                                    value=""
                                    placeHolder="Enter Name"
                                    onChange={(val) => handleChange("name", val)}
                                    errMsg=""
                                />
                                <Text style={styles.subTitleStyle}>Contact Details</Text>
                                <Input
                                    inputLabel="Mobile Number"
                                    value=""
                                    placeHolder="Enter Mobile Number"
                                    onChange={(val) => handleChange("mobile", val)}
                                    errMsg=""
                                />
                                <Input
                                    inputLabel="Email ID"
                                    isOptional={true}
                                    value=""
                                    placeHolder="Enter Email ID"
                                    onChange={(val) => handleChange("email", val)}
                                    errMsg=""
                                />
                                <Text style={styles.subTitleStyle}>Loan Requirements</Text>
                                <Select
                                    inputLabel="Loan Type"
                                    options={loanTypes}
                                    value=""
                                    placeHolder="Select Loan Type"
                                    errMsg=""
                                    onSelect={(val, ind) => handleChange("select", val, ind)}
                                />
                                <Input
                                    inputLabel="Email ID"
                                    isOptional={true}
                                    value=""
                                    placeHolder="Enter Email ID"
                                    onChange={(val) => handleChange("email", val)}
                                    errMsg=""
                                />
                                <DatePicker
                                    openPicker={() => pickDate()}
                                    openDateModal={dateModal}
                                    closeDateModal={() => setDateModal(!dateModal)}
                                    inputLabel="Expected Disbursal Date"
                                    placeHolder="Select a Date"
                                    errMsg=""
                                    onSelect={(val) => handleChange("loanDate", val)}
                                />
                                <Text style={styles.subTitleStyle}>Address Details</Text>
                                <Input
                                    inputLabel="Email ID"
                                    value=""
                                    placeHolder="Enter Email ID"
                                    onChange={(val) => handleChange("email", val)}
                                    errMsg=""
                                />
                                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                    <Input
                                        inputLabel="Email ID"
                                        value=""
                                        placeHolder="Enter Email ID"
                                        onChange={(val) => handleChange("email", val)}
                                        errMsg=""
                                        inputContainer={{ width: "48%" }}
                                    />
                                    <Input
                                        inputLabel="Email ID"
                                        value=""
                                        placeHolder="Enter Email ID"
                                        onChange={(val) => handleChange("email", val)}
                                        errMsg=""
                                        inputContainer={{ width: "48%" }}
                                    />
                                </View>
                                <Input
                                    inputLabel="Email ID"
                                    value=""
                                    placeHolder="Enter Email ID"
                                    onChange={(val) => handleChange("email", val)}
                                    errMsg=""
                                />
                                <Text style={styles.subTitleStyle}>About Customer</Text>
                                <Input
                                    inputLabel="Email ID"
                                    value=""
                                    placeHolder="Enter Email ID"
                                    onChange={(val) => handleChange("email", val)}
                                    errMsg=""
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        height: "100%",
        width: "100%",
        paddingTop: normalize(10)
    },
    parentContainer: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        position: "absolute",
        bottom: normalize(0),
        borderTopLeftRadius: normalize(23),
        borderTopRightRadius: normalize(23),
        paddingTop: normalize(20)
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: normalize(10),
        marginBottom: normalize(20),
        marginHorizontal: normalize(15),
        paddingBottom: normalize(15),
        borderBottomColor: "#30313440",
        borderBottomWidth: normalize(3)
    },
    scrollContainer: {
        marginTop: normalize(5),
        paddingHorizontal: normalize(25),
        marginBottom: normalize(15)
    },
    subTitleStyle: {
        marginTop: normalize(5),
        marginBottom: normalize(12),
        color: "#2c67f2",
        fontWeight: "600",
        fontSize: normalize(20)
    }
});

export default CreateLeads;