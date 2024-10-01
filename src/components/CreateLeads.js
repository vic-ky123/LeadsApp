import React from "react";
import { Image, Modal, ScrollView, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import normalize from "react-native-normalize";

const CreateLeads = (props) => {

    const { modalOpen, onClose } = props;

    // To test

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOpen}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(52, 52, 52, 0.5)',
                    height: "100%",
                    width: "100%",
                    paddingTop: normalize(10)
                }}>
                    <StatusBar
                        translucent={true}
                        backgroundColor="rgba(52, 52, 52, 0.5)"
                        barStyle="light-content"
                    />
                    <View style={{
                        flex: 1,
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#FFFFFF",
                        position: "absolute",
                        bottom: normalize(0),
                        borderTopLeftRadius: normalize(23),
                        borderTopRightRadius: normalize(23),
                        paddingTop: normalize(20)
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginHorizontal: normalize(10),
                            marginBottom: normalize(20),
                            marginHorizontal: normalize(15),
                            paddingBottom: normalize(15),
                            borderBottomColor: "#30313440",
                            borderBottomWidth: normalize(3)
                        }}>
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
                                    fontWeight: "600",
                                    color: "#202124"
                                }}>Create New Lead</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={onClose}>
                                <Image
                                    source={require("../assets/closeIcon.png")}
                                    style={{
                                        height: normalize(25),
                                        width: normalize(25)
                                    }}
                                />
                            </TouchableWithoutFeedback>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{
                                backgroundColor: "#FFFFFF",
                                elevation: normalize(15),
                                paddingHorizontal: normalize(25)
                            }}>
                                <Text>Form field</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    )
};

export default CreateLeads;