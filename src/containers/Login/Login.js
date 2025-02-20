import React, { useReducer } from "react";
import { Platform, StatusBar, Text, View } from "react-native";
import normalize from "react-native-normalize";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements/ButtonCollection";
import Input from "../../components/FormElements/Input";
import firestore from '@react-native-firebase/firestore';

const Login = () => {

    // firestore().collection("Users").get().then((result) => console.log(result))
    // firestore()
    //     .collection('Users')
    //     .get()
    //     .then(querySnapshot => {
    //         querySnapshot.forEach(documentSnapshot => {
    //             console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //         });
    //     });

    firestore().collection('Users').get()
        .then(querySnapshot => {
            console.log("FireStore  Users", querySnapshot)

            querySnapshot.forEach(documentSnapshot => {
                console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            });
        }).catch((error) => console.log("Firebase Error ::", error))

    const initialState = {
        formData: {
            userId: {
                name: "userId",
                displayName: "User ID",
                value: "",
                errorMsg: "",
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            password: {
                name: "password",
                displayName: "Password",
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

    const handleChange = (name, value) => {

        let tempState = { ...data };
        let tempFormData = tempState["formData"];

        value = value.trimStart();

        let field = tempFormData[name];

        field.valid = true;
        field.errorMsg = "";
        field.value = value;
        field.touched = true;

        tempState["formData"] = tempFormData;

        dispatch({
            type: "update",
            payload: tempState
        });
    };

    const validateField = (field) => {
        let isValid = true, userIdType = "", errorMsg = "";
        const mobilePattern = /^[6-9]\d{9}$/;
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (mobilePattern.test(field.value)) {
            userIdType = "mobile"
        } else if (emailPattern.test(field.value)) {
            userIdType = "email"
        }

        if (field.validationRules.isRequired && (field.value === "" || field.value === null || field.value === undefined)) {
            isValid = false;
            errorMsg = "Please fill out this field!";
        }

        if (field.validationRules.isMobile) {
            if (field.value !== "" && !mobilePattern.test(field.value)) {
                isValid = false;
                errorMsg = "Please enter a valid Mobile Number!";
            }
        }

        if (field.validationRules.isEmail) {
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

    const onLogin = () => {
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
            console.log("Form Valid");
        } else {
            console.log("Form Invalid");
        }
    };

    return (
        <>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <StatusBar
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="dark-content"
                />
                <View style={{
                    width: "80%",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    backgroundColor: "#FFFFFF",
                    borderRadius: normalize(8),
                    padding: normalize(20),
                }}>
                    <Input
                        inputLabel="State"
                        value={data.formData.userId.value}
                        placeHolder="Enter State"
                        onChange={(val) => handleChange("userId", val)}
                        errMsg={data.formData.userId.errorMsg}
                    />
                    <Input
                        inputLabel="State"
                        value={data.formData.userId.value}
                        placeHolder="Enter State"
                        onChange={(val) => handleChange("userId", val)}
                        errMsg={data.formData.userId.errorMsg}
                    />
                    <View style={{
                        flexDirection: "row",
                        width: "60%",
                        alignSelf: "center",
                        justifyContent: "space-between",
                        marginTop: normalize(15)
                    }}>
                        <PrimaryButton
                            label="Login"
                            onPress={() => onLogin()}
                        />
                    </View>
                </View>
            </View>
        </>
    )
};

export default Login;