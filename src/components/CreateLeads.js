import React, { useReducer, useState } from "react";
import { Image, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import normalize from "react-native-normalize";
import Input from "./FormElements/Input";
import Select from "./FormElements/Select";
import DatePicker from "./FormElements/DatePicker";
import { PrimaryButton, SecondaryButton } from "./FormElements/ButtonCollection";
import dayjs from "dayjs";

const CreateLeads = (props) => {

    const { modalOpen, onClose } = props;

    const initialState = {
        formData: {
            userName: {
                name: "userName",
                displayName: "Name",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            mobile: {
                name: "mobile",
                displayName: "Mobile",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true,
                    isNumber: true,
                    isMobile: true,
                    maxLength: 10,
                    absoluteLength: 10
                }
            },
            email: {
                name: "email",
                displayName: "Email ID",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: false,
                    isEmail: true
                }
            },
            loanType: {
                name: "loanType",
                displayName: "Loan Type",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                options: [
                    { title: 'Personal Loan' },
                    { title: 'Home Loan' },
                    { title: 'Bike Loan' },
                    { title: 'Car Loan' },
                    { title: 'Jewel Loan' },
                    { title: 'Business Loan' },
                    { title: 'Educational Loan' }
                ],
                validationRules: {
                    isRequired: true
                }
            },
            loanAmount: {
                name: "loanAmount",
                displayName: "Loan Amount",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true,
                    isNumber: true,
                    maxLength: 8
                }
            },
            loanDate: {
                name: "loanDate",
                displayName: "Loan Date",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            address: {
                name: "address",
                displayName: "Address",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            pinCode: {
                name: "pinCode",
                displayName: "PIN Code",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true,
                    isNumber: true,
                    maxLength: 6,
                    absoluteLength: 6
                }
            },
            city: {
                name: "city",
                displayName: "City",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            state: {
                name: "state",
                displayName: "State",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            description: {
                name: "description",
                displayName: "Description",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            }
        }
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "update": return {
                ...state,
                ...action.payload
            };
            case "reset": return initialState;
            default: return { ...state };
        }
    };


    const [data, dispatch] = useReducer(reducer, initialState);
    const [dateModal, setDateModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);

    const handleChange = (name, value) => {

        const onlyAlphaFields = ["userName", "city", "state"];

        let tempState = { ...data };
        let tempFormData = tempState["formData"];

        value = value.trimStart();

        let field = tempFormData[name];

        field.valid = true;
        field.errorMsg = "";

        if (field.validationRules.isNumber) {
            const pattern = /^[0-9\b]+$/;
            if (value !== "" && !pattern.test(value)) return;
        }

        if (onlyAlphaFields.includes(field.name)) {
            const pattern = /^[a-zA-Z.,'` \-]*$/;
            if (value !== "" && !pattern.test(value)) return;
        }

        if (field.validationRules.maxLength && value.length > field.validationRules.maxLength) return;

        if (field.validationRules.isEmail) {
            const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (value !== "" && !emailPattern.test(value)) {
                field.valid = false;
                field.errorMsg = "Please enter a valid Email ID!";
            }
        }

        field.value = value;
        field.touched = true;

        tempState["formData"] = tempFormData;

        dispatch({
            type: "update",
            payload: tempState
        });
    };

    const validateField = (field) => {
        let isValid = true;
        let errorMsg = "";


        if (field.validationRules.isRequired && (field.value === "" || field.value === null || field.value === undefined)) {
            isValid = false;
            errorMsg = "Please fill out this field!";
        }



        if (field.validationRules.isMobile) {
            const mobilePattern = /^[6-9]\d{9}$/;
            if (field.value !== "" && !mobilePattern.test(field.value)) {
                isValid = false;
                errorMsg = "Please enter a valid Mobile Number!";
            }
        }

        if (field.validationRules.isEmail) {
            const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (field.value !== "" && !emailPattern.test(field.value)) {
                isValid = false;
                errorMsg = "Please enter a valid Email ID!";
            }
        }

        if (field.value !== "" && field.validationRules.absoluteLength && field.value.length !== field.validationRules.absoluteLength) {
            isValid = false;
            if (field.name === "mobile") {
                errorMsg = "Please enter a Valid Mobile Number!";
            } else if (field.name === "pinCode") {
                errorMsg = "Please enter a Valid PIN Code!";
            }
        }

        return { isValid, errorMsg };
    };

    const onSubmit = () => {
        let isFormValid = true;
        let tempState = { ...data };
        let tempFormData = { ...tempState.formData };

        for (let item in tempFormData) {
            let field = { ...tempFormData[item] };
            const { isValid, errorMsg } = validateField(field);

            field.valid = isValid;
            field.errorMsg = errorMsg;

            if (!isValid) {
                isFormValid = false;
            }

            tempFormData[item] = field;
            console.log("Field from Submit ---> ", field);
        }

        tempState.formData = tempFormData;

        dispatch({
            type: "update",
            payload: tempState
        });

        console.log("TempState ---> ", tempState);

        if (isFormValid) {
            setConfirmModal(true);
        } else {
            setConfirmModal(false);
        }
    };

    const closeModal = () => {

        let tempState = { ...data };
        let tempFormData = tempState["formData"];

        for (let item in tempFormData) {
            tempFormData[item].value = "";
            tempFormData[item].errorMsg = "";
            tempFormData[item].valid = false;
            tempFormData[item].touched = false;
        }

        tempState["formData"] = tempFormData;

        dispatch({
            type: "update",
            payload: tempState
        });

        onClose();
    };

    const pickDate = () => {
        setDateModal(!dateModal);
    };

    const closeConfirmModal = () => {
        setConfirmModal(false);
        setTimeout(() => {
            closeModal();
        }, 100);
    };

    const onConfirmSubmit = () => {
        console.log("Confirm submit ---> ", data);
        closeConfirmModal();
    };


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
                            <TouchableWithoutFeedback onPress={() => closeModal()}>
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
                                    inputLabel="Name as per AADHAAR Card"
                                    value={data.formData.userName.value}
                                    placeHolder="Enter Name"
                                    onChange={(val) => handleChange("userName", val)}
                                    errMsg={data.formData.userName.errorMsg}
                                />
                                <Text style={styles.subTitleStyle}>Contact Details</Text>
                                <Input
                                    inputLabel="Mobile Number"
                                    value={data.formData.mobile.value}
                                    placeHolder="Enter Mobile Number"
                                    onChange={(val) => handleChange("mobile", val)}
                                    errMsg={data.formData.mobile.errorMsg}
                                    keyboardType={"phone-pad"}
                                />
                                <Input
                                    inputLabel="Email ID"
                                    isOptional={true}
                                    value={data.formData.email.value}
                                    placeHolder="Enter Email ID"
                                    onChange={(val) => handleChange("email", val)}
                                    errMsg={data.formData.email.errorMsg}
                                    keyboardType={"email-address"}
                                />
                                <Text style={styles.subTitleStyle}>Loan Requirements</Text>
                                <Select
                                    inputLabel="Loan Type"
                                    options={data.formData.loanType.options}
                                    placeHolder="Select Loan Type"
                                    errMsg={data.formData.loanType.errorMsg}
                                    onSelect={(val) => handleChange("loanType", val)}
                                />
                                <Input
                                    inputLabel="Loan Amount"
                                    value={data.formData.loanAmount.value}
                                    placeHolder="Enter Amount"
                                    onChange={(val) => handleChange("loanAmount", val)}
                                    errMsg={data.formData.loanAmount.errorMsg}
                                    keyboardType={"decimal-pad"}
                                />
                                <DatePicker
                                    openPicker={() => pickDate()}
                                    openDateModal={dateModal}
                                    closeDateModal={() => setDateModal(!dateModal)}
                                    inputLabel="Expected Disbursal Date"
                                    placeHolder="Select a Date"
                                    errMsg={data.formData.loanDate.errorMsg}
                                    onSelect={(val) => handleChange("loanDate", val)}
                                    minDate={dayjs().startOf('day')}
                                    maxDate={dayjs().add(3, 'month').endOf('day')}
                                />
                                <Text style={styles.subTitleStyle}>Address Details</Text>
                                <Input
                                    inputLabel="Address as per AADHAAR Card"
                                    value={data.formData.address.value}
                                    placeHolder="Flat / Building / Street"
                                    onChange={(val) => handleChange("address", val)}
                                    errMsg={data.formData.address.errorMsg}
                                />
                                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                    <Input
                                        inputLabel="PIN Code"
                                        value={data.formData.pinCode.value}
                                        placeHolder="Enter PIN Code"
                                        onChange={(val) => handleChange("pinCode", val)}
                                        errMsg={data.formData.pinCode.errorMsg}
                                        inputContainer={{ width: "48%" }}
                                        keyboardType={"number-pad"}
                                        errMsgStyle={{ width: "80%" }}
                                    />
                                    <View style={{ marginHorizontal: normalize(8) }} />
                                    <Input
                                        inputLabel="City"
                                        value={data.formData.city.value}
                                        placeHolder="Enter City"
                                        onChange={(val) => handleChange("city", val)}
                                        errMsg={data.formData.city.errorMsg}
                                        inputContainer={{ width: "48%" }}
                                        errMsgStyle={{ width: "80%" }}
                                    />
                                </View>
                                <Input
                                    inputLabel="State"
                                    value={data.formData.state.value}
                                    placeHolder="Enter State"
                                    onChange={(val) => handleChange("state", val)}
                                    errMsg={data.formData.state.errorMsg}
                                />
                                <Text style={styles.subTitleStyle}>About Customer</Text>
                                <Input
                                    inputLabel="Description"
                                    value={data.formData.description.value}
                                    placeHolder="Income, Co-applicant"
                                    onChange={(val) => handleChange("description", val)}
                                    errMsg={data.formData.description.errorMsg}
                                    multiline={true}
                                    inputStyle={{ height: normalize(70) }}
                                    errorInputStyle={{ height: normalize(70) }}
                                />
                                <View style={[styles.btnContainer, { marginBottom: normalize(20) }]}>
                                    <SecondaryButton
                                        label="Cancel"
                                        onPress={() => closeModal()}
                                    />
                                    <View style={{ width: normalize(15) }} />
                                    <PrimaryButton
                                        label="Create"
                                        onPress={() => onSubmit()}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={confirmModal}
            >
                <View style={styles.confirmModalParentContainer}>
                    <StatusBar
                        translucent={true}
                        backgroundColor="rgba(52, 52, 52, 0.5)"
                        barStyle="light-content"
                    />
                    <View style={styles.confirmModalContainer}>
                        <Text style={styles.subTitleStyle}>Confirm Action</Text>
                        <Text style={styles.confirmDescription}>You are about to Create a New Lead. Are you sure to proceed?</Text>
                        <View style={styles.btnContainer}>
                            <View style={{ flex: 1, marginHorizontal: normalize(5) }}>
                                <SecondaryButton
                                    label="Cancel"
                                    onPress={() => closeConfirmModal()}
                                />
                            </View>
                            {/* <View style={{ width: normalize(15) }} /> */}
                            <View style={{ flex: 1, marginHorizontal: normalize(5) }}>
                                <PrimaryButton
                                    label="Create"
                                    onPress={() => onConfirmSubmit()}
                                />
                            </View>
                        </View>
                        <Pressable onPress={() => setConfirmModal(false)}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: normalize(20)
                            }}>
                                <Text style={[styles.confirmDescription, { color: "black", fontWeight: "500" }]}>I want to EDIT!</Text>
                            </View>
                        </Pressable>
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
    },
    btnContainer: {
        // flexDirection: "row",
        // width: "100%",
        // justifyContent: "center",
        // marginTop: normalize(15),

        // flexDirection: "row",
        // width: "100%",
        // alignSelf: "center",
        // // justifyContent: "space-between",
        // marginTop: normalize(15)

        flexDirection: "row",       // Arrange buttons in a row
        width: "100%",              // Full width of the parent container
        alignSelf: "center",        // Center horizontally in the parent
        justifyContent: "space-between",
        alignItems: "center", // Ensure even spacing between buttons
        marginTop: normalize(15),
    },
    confirmModalParentContainer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        height: "100%",
        width: "100%",
        paddingTop: normalize(10),
        justifyContent: "center",
        alignItems: "center"
    },
    confirmModalContainer: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: normalize(25),
        borderRadius: normalize(15),
        justifyContent: "center",
        alignItems: "center",
        padding: normalize(20),
        paddingBottom: normalize(10)
    },
    confirmDescription: {
        marginBottom: normalize(8),
        color: "#7A7A7A",
        fontWeight: "400",
        fontSize: normalize(16),
        textAlign: "center",
        marginTop: normalize(5),
        marginBottom: normalize(15)
    }
});

export default CreateLeads;