import React, { useEffect } from "react";
import { BackHandler, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import normalize from "react-native-normalize";
import CommonBG from "../../components/CommonBG";
import { useNavigation } from "@react-navigation/native";

const ViewLead = (props) => {

    const { data } = props.route.params;
    const navigation = useNavigation();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => {
                navigation.goBack();
                return true;
            }
        );

        return () => backHandler.remove();
    }, []);

    let address = `${data.address} ${data.city} - ${data.pinCode}.`;

    const getStatusInfo = (status, type) => {
        if (type === "icon") {
            switch (status) {
                case "Approved": return require("../../assets/approvedFileIcon.png");
                case "Rejected": return require("../../assets/rejectedFileIcon.png");
                case "In Progress": return require("../../assets/inProgressIcon.png");
                case "Created": return require("../../assets/createdFileIcon.png");
            }
        }

        if (type === "textColor") {
            switch (status) {
                case "Approved": return "#5DB150";
                case "Rejected": return "#EB5032";
                case "In Progress": return "#FAC200";
                case "Created": return "#34ADFD";
            }
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    };

    return (
        <>
            <CommonBG>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: normalize(10)
                }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.mainLabel}>{data.name}</Text>
                        <View style={{ marginTop: normalize(15) }}>
                            <Text style={[styles.value, { fontWeight: "600", fontSize: normalize(18) }]}>{formatCurrency(data.loanAmount)}</Text>
                            <View style={{ flexDirection: "row", marginTop: normalize(5) }}>
                                <View style={[styles.cardDataHolder]}>
                                    <Text style={styles.cardLabel}>Loan Type</Text>
                                    <Text style={styles.cardValue}>{data.loanType}</Text>
                                </View>
                                <View style={{
                                    height: normalize(25),
                                    width: normalize(3),
                                    marginHorizontal: normalize(13),
                                    backgroundColor: "grey",
                                    alignSelf: "center"
                                }} />
                                <View style={styles.cardDataHolder}>
                                    <Text style={styles.cardLabel}>Expected Disbursal Date</Text>
                                    <Text style={styles.cardValue}>{data.loanDate}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        marginTop: normalize(5)
                    }}>
                        <Text style={{
                            fontSize: normalize(14),
                            color: "#525252"
                        }}>{data.loanCreatedDate}</Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: normalize(8)
                        }}>
                            <Text style={{
                                fontSize: normalize(15),
                                fontWeight: "500",
                                color: getStatusInfo(data.loanStatus, "textColor")
                            }}>{data.loanStatus}</Text>
                            <Image
                                source={getStatusInfo(data.loanStatus, "icon")}
                                style={{
                                    width: normalize(data.loanStatus === "Approved" || data.loanStatus === "Rejected" ? 20 : 23),
                                    height: normalize(data.loanStatus === "Approved" || data.loanStatus === "Rejected" ? 20 : 23),
                                    marginLeft: normalize(7)
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{
                    height: normalize(3),
                    width: "90%",
                    backgroundColor: "#A5A4A4",
                    alignSelf: "center",
                    marginVertical: normalize(20)
                }} />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: normalize(20) }}>
                    <Text style={styles.subTitleStyle}>Contact Details</Text>
                    <View style={styles.dataHolder}>
                        <Text style={styles.label}>Mobile Number</Text>
                        <Text style={styles.value}>{data.mobile}</Text>
                    </View>
                    <View style={styles.dataHolder}>
                        <Text style={styles.label}>Email ID</Text>
                        <Text style={styles.value}>{data.email}</Text>
                    </View>
                    <Text style={styles.subTitleStyle}>Loan Requirements</Text>
                    <View style={styles.dataHolder}>
                        <Text style={styles.label}>Loan Type</Text>
                        <Text style={styles.value}>{data.loanType}</Text>
                    </View>
                    <View style={styles.dataHolder}>
                        <Text style={styles.label}>Loan Amount</Text>
                        <Text style={styles.value}>{data.loanAmount}</Text>
                    </View>
                    <View style={styles.dataHolder}>
                        <Text style={styles.label}>Expected Disbursal Date</Text>
                        <Text style={styles.value}>{data.loanDate}</Text>
                    </View>
                    <Text style={styles.subTitleStyle}>Address Details</Text>
                    <View style={styles.dataHolder}>
                        <Text style={styles.label}>Address as per AADHAAR Card</Text>
                        <Text style={styles.value}>{address}</Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            marginTop: normalize(10)
                        }}>
                            <Text style={[styles.label, { paddingBottom: normalize(-1) }]}>State - </Text>
                            <Text style={[styles.value, { paddingBottom: normalize(5) }]}>{data.state}</Text>
                        </View>
                    </View>
                    <Text style={styles.subTitleStyle}>About Customer</Text>
                    <View style={styles.dataHolder}>
                        <Text style={styles.label}>Description</Text>
                        <Text style={styles.value}>{data.description}</Text>
                    </View>
                </ScrollView>
            </CommonBG>
        </>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: normalize(22),
        paddingTop: normalize(10),
        marginTop: normalize(100)
    },
    subTitleStyle: {
        marginBottom: normalize(15),
        color: "#4B9CF9",
        fontWeight: "600",
        fontSize: normalize(20)
    },
    dataHolder: {
        flex: 1,
        marginBottom: normalize(20),
        marginLeft: normalize(12)
    },
    label: {
        fontSize: normalize(15),
        color: "#A5A4A4",
        marginBottom: normalize(5),
        lineHeight: normalize(25)
    },
    value: {
        fontSize: normalize(17),
        fontWeight: "400",
        color: "#525252",
        lineHeight: normalize(25)
    },
    cardDataHolder: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    cardLabel: {
        fontSize: normalize(14),
        color: "#A5A4A4"
    },
    cardValue: {
        fontSize: normalize(16),
        fontWeight: "400",
        color: "#525252",
        lineHeight: normalize(23)
    },
    mainLabel: {
        color: "#2c67f2",
        fontWeight: "600",
        fontSize: normalize(22)
    }
});

export default ViewLead;