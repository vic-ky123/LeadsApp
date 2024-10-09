import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import normalize from "react-native-normalize";
import SearchInput from "../../components/FormElements/SearchInput";
import leadsData from "../../components/LeadsData.json";
import { SwipeListView } from "react-native-swipe-list-view";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const Leads = () => {

    const navigation = useNavigation();

    const onRefresh = () => {
        console.log("Clicked on Refresh");
    };

    const onFilter = () => {
        console.log("Clicked on Filter");
    };

    const handleEdit = (item, index) => {
        console.log("Item from Edit ---> ", item);
        console.log("Index from Edit ---> ", index);
    };

    const handleDelete = (index) => {
        console.log("Index from Delete ---> ", index);
    };

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
            <View style={styles.mainContainer}>
                <Text style={styles.header}>All Leads</Text>
                <View style={styles.searchBarHolder}>
                    <SearchInput
                        value=""
                        onSearch={() => console.log("On Search")}
                        inputContainer={{ width: "87%", marginRight: normalize(10) }}
                    />
                    <Pressable onPress={() => onFilter()}>
                        <View style={styles.iconHolder}>
                            <Image
                                source={require("../../assets/filterIcon.png")}
                                style={{
                                    height: normalize(24),
                                    width: normalize(24),
                                }}
                            />
                        </View>
                    </Pressable>
                </View>
                <View style={styles.dataContainer}>
                    <View style={[styles.leadsCountContainer, { justifyContent: leadsData && leadsData.length ? "space-between" : "flex-end" }]}>
                        {leadsData && leadsData.length ? <View style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            flexDirection: "row"
                        }}>
                            <Text style={[styles.leadsCount, { fontWeight: "500", color: "#3F3844" }]}>{`${leadsData.length} Leads `}</Text>
                            <Text style={[styles.leadsCount, { fontSize: normalize(14), paddingBottom: normalize(2), lineHeight: normalize(20) }]}>in total.</Text>
                        </View> : null}
                        <Pressable onPress={() => onRefresh()}>
                            <View style={[styles.iconHolder, { marginRight: normalize(8), alignSelf: "flex-end" }]}>
                                <Image
                                    source={require("../../assets/refreshIcon.png")}
                                    style={{
                                        height: normalize(21),
                                        width: normalize(21),
                                    }}
                                />
                            </View>
                        </Pressable>
                    </View>
                    <View style={{ marginTop: normalize(10) }}>
                        {
                            leadsData && leadsData.length ?
                                <>
                                    <SwipeListView
                                        contentContainerStyle={{ paddingBottom: normalize(205) }}
                                        useFlatList={true}
                                        showsVerticalScrollIndicator={false}
                                        data={leadsData}
                                        renderItem={({ item }) => (
                                            <TouchableWithoutFeedback onPress={() => navigation.push("ViewLead", { data: item })}>
                                                <View style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "flex-start",
                                                    flexDirection: "row",
                                                    padding: normalize(17),
                                                    height: normalize(100),
                                                    width: "100%",
                                                    backgroundColor: "#FFFFFF",
                                                    borderRadius: normalize(10),
                                                    marginBottom: normalize(13)
                                                }}>
                                                    <View style={{
                                                        flex: 1,
                                                        flexDirection: "column",
                                                        justifyContent: "space-between",
                                                        alignItems: "flex-start",
                                                        height: "100%",
                                                        marginRight: normalize(10)
                                                    }}>
                                                        <Text style={{
                                                            fontSize: normalize(19),
                                                            fontWeight: "600",
                                                            color: "#2c67f2",
                                                            marginBottom: normalize(10)
                                                        }}>{item.name}</Text>
                                                        <View>
                                                            <Text style={{
                                                                fontSize: normalize(15),
                                                                color: "grey",
                                                                marginBottom: normalize(5)
                                                            }}>{item.loanType}</Text>
                                                            <Text style={{
                                                                fontSize: normalize(15),
                                                                color: "#3F3844",
                                                                fontWeight: "500"
                                                            }}>{formatCurrency(item.loanAmount)}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        flexDirection: "column",
                                                        justifyContent: "space-between",
                                                        alignItems: "flex-end",
                                                        marginRight: normalize(-5),
                                                        marginTop: normalize(-3)
                                                    }}>
                                                        <Image
                                                            source={require("../../assets/dropDownArrow.png")}
                                                            style={{
                                                                width: normalize(23),
                                                                height: normalize(23),
                                                                marginTop: normalize(5),
                                                                transform: [{ rotate: '270deg' }]
                                                            }}
                                                        />
                                                        <View style={{
                                                            flexDirection: "column",
                                                            justifyContent: "flex-end",
                                                            alignItems: "flex-end",
                                                            marginTop: normalize(12),
                                                            marginRight: normalize(5)
                                                        }}>
                                                            <Text style={{
                                                                marginRight: normalize(5),
                                                                fontSize: normalize(13),
                                                                color: "#99A3A4"
                                                            }}>{item.loanCreatedDate}</Text>
                                                            <View style={{
                                                                flexDirection: "row",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                marginTop: normalize(8)
                                                            }}>
                                                                <Text style={{
                                                                    fontSize: normalize(15),
                                                                    fontWeight: "500",
                                                                    color: getStatusInfo(item.loanStatus, "textColor")
                                                                }}>{item.loanStatus}</Text>
                                                                <Image
                                                                    source={getStatusInfo(item.loanStatus, "icon")}
                                                                    style={{
                                                                        width: normalize(item.loanStatus === "Approved" || item.loanStatus === "Rejected" ? 20 : 23),
                                                                        height: normalize(item.loanStatus === "Approved" || item.loanStatus === "Rejected" ? 20 : 23),
                                                                        marginLeft: normalize(7)
                                                                    }}
                                                                />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )}
                                        renderHiddenItem={({ item, index }) => (
                                            <View style={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                alignItems: "center",
                                                flexDirection: "row",
                                                height: normalize(100),
                                                width: "100%",
                                                borderRadius: normalize(10),
                                                marginBottom: normalize(13)
                                            }}>
                                                <TouchableOpacity onPress={() => handleEdit(item, index)}>
                                                    <View style={{
                                                        width: normalize(90),
                                                        height: normalize(100),
                                                        backgroundColor: "#ECB527",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <Image
                                                            source={require("../../assets/editRecordIcon.png")}
                                                            style={{
                                                                width: normalize(30),
                                                                height: normalize(30),
                                                                marginLeft: normalize(8)
                                                            }}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => handleDelete(index)}>
                                                    <View style={{
                                                        width: normalize(80),
                                                        height: normalize(100),
                                                        backgroundColor: "#D22630",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderTopRightRadius: normalize(10),
                                                        borderBottomRightRadius: normalize(10)
                                                    }}>
                                                        <Image
                                                            source={require("../../assets/trashBinIcon.png")}
                                                            style={{
                                                                width: normalize(30),
                                                                height: normalize(30)
                                                            }}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                        rightOpenValue={-165}
                                        onRowOpen={(rowKey, rowMap) => {
                                            setTimeout(() => {
                                                rowMap[rowKey].closeRow()
                                            }, 2000)
                                        }}
                                    />
                                </>
                                :
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: normalize(20)
                                }}>
                                    <LottieView
                                        source={require("../../assets/noDataFound.json")}
                                        style={{
                                            width: normalize(230),
                                            height: normalize(230)
                                        }}
                                        progress={1}
                                    />
                                    <Text style={{
                                        color: "#3F3844",
                                        fontSize: normalize(18),
                                        fontWeight: "600",
                                        marginTop: normalize(-20)
                                    }}>No Data Found</Text>
                                </View>
                        }
                    </View>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: normalize(50),
        backgroundColor: "#FFFFFF"
    },
    header: {
        marginTop: normalize(8),
        marginBottom: normalize(12),
        marginLeft: normalize(5),
        paddingHorizontal: normalize(20),
        color: "#3F3F3F",
        // color: "#2c67f2",
        fontWeight: "700",
        fontSize: normalize(25),
        letterSpacing: normalize(3)
    },
    searchBarHolder: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(5),
        paddingHorizontal: normalize(20)
    },
    iconHolder: {
        height: normalize(35),
        width: normalize(35),
        borderRadius: normalize(40),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: normalize(3),
        borderColor: "#BCBFC1"
    },
    dataContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#F3F2F2",
        marginTop: normalize(20),
        borderTopLeftRadius: normalize(18),
        borderTopRightRadius: normalize(18),
        paddingHorizontal: normalize(20),
        paddingTop: normalize(20)
    },
    leadsCountContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingLeft: normalize(8),
        marginBottom: normalize(12)
    },
    leadsCount: {
        color: "#767E8C",
        fontSize: normalize(16)
    }
});

export default Leads;