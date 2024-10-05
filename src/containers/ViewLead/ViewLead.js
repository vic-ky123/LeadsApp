import React from "react";
import { StyleSheet, Text, View } from "react-native";
import normalize from "react-native-normalize";

const ViewLead = (props) => {

    const { data } = props.route.params;

    return (
        <>
            <View style={styles.mainContainer}>
                <Text style={styles.subTitleStyle}>Loan Requirements</Text>
                <Text>{data.name}</Text>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: normalize(18),
        borderTopRightRadius: normalize(18),
        paddingHorizontal: normalize(20),
        paddingTop: normalize(20)
    },
    subTitleStyle: {
        marginTop: normalize(5),
        marginBottom: normalize(12),
        color: "#2c67f2",
        fontWeight: "600",
        fontSize: normalize(20)
    }
});

export default ViewLead;