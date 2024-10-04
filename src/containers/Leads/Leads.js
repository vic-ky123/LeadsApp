import React, { Fragment } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import normalize from "react-native-normalize";
import SearchInput from "../../components/FormElements/SearchInput";
import leadsData from "../../components/LeadsData.json";
import { SwipeListView } from "react-native-swipe-list-view";
// import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

const Leads = () => {

    const onRefresh = () => {
        console.log("Clicked on Refresh");
    };

    const onFilter = () => {
        console.log("Clicked on Filter");
    };

    const handleEdit = (index, item) => {
        console.log("Item from Edit ---> ", item);
        console.log("Index from Edit ---> ", index);
    };

    const handleDelete = (index) => {
        leadsData.splice(index, 1);
    };

    const onSwipe = (index, item) => {
        return (
            <>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>

                    <TouchableOpacity onPress={() => handleDelete(index)}>
                        <View style={{
                            width: normalize(90),
                            height: normalize(90),
                            backgroundColor: "#D22630",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text>Delete</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleEdit(index, item)}>
                        <View style={{
                            width: normalize(90),
                            height: normalize(90),
                            backgroundColor: "#ECB527",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopRightRadius: normalize(8),
                            borderBottomRightRadius: normalize(8),
                        }}>
                            <Text>Edit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        )
    };

    const renderItem = (item, index) => {
        return (
            <Fragment key={index}>
                {/* <Swipeable renderRightActions={() => onSwipe(item, index)} > */}
                <TouchableWithoutFeedback onPress={() => { navigate.push("BeneficiaryDetails", { data: item, changes: (id, value) => { reflectChange(id, value) }, deleteObj: (id) => { deleteItem(id) } }) }}>
                    <View style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexDirection: "row",
                        padding: normalize(17),
                        height: normalize(90),
                        width: "100%",
                        backgroundColor: "#FFFFFF",
                        borderRadius: normalize(10),
                        marginBottom: normalize(13)
                    }}>
                        <Image
                            source={item.userIcon}
                            style={{
                                width: normalize(40),
                                height: normalize(40),
                                marginRight: normalize(15),
                                borderRadius: normalize(50)
                            }}
                        />
                        <View>
                            <Text style={{
                                fontSize: normalize(15),
                                color: "#666666",
                                marginBottom: normalize(8)
                            }}>{item.beneficiaryName}</Text>
                            <Text style={{
                                fontSize: normalize(13),
                                color: "#B3B3B3"
                            }}>{item.beneficiaryAcctNum}</Text>
                            <Text style={{
                                fontSize: normalize(13),
                                color: "#B3B3B3"
                            }}>{item.transTypeLabel}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                {/* </Swipeable> */}
            </Fragment>
        )
    }

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
                    <View style={styles.leadsCountContainer}>
                        <Text style={styles.leadsCount}>{`${leadsData.length} leads in total`}</Text>
                        <Pressable onPress={() => onRefresh()}>
                            <View style={[styles.iconHolder, { marginRight: normalize(8) }]}>
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
                    <View style={{ marginTop: normalize(20) }}>
                        {
                            leadsData && leadsData.length > 0 ?
                                <SwipeListView
                                    contentContainerStyle={{ paddingBottom: normalize(205) }}
                                    useFlatList={true}
                                    showsVerticalScrollIndicator={false}
                                    data={leadsData}
                                    renderItem={({ item }) => (
                                        <TouchableWithoutFeedback onPress={() => console.log("Touched on item...! ---> ", item)}>
                                            <View style={{
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignItems: "flex-start",
                                                flexDirection: "row",
                                                padding: normalize(17),
                                                height: normalize(90),
                                                width: "100%",
                                                backgroundColor: "#FFFFFF",
                                                borderRadius: normalize(10),
                                                marginBottom: normalize(13)
                                            }}>
                                                {/* <Image
                                                    source={item.userIcon}
                                                    style={{
                                                        width: normalize(40),
                                                        height: normalize(40),
                                                        marginRight: normalize(15),
                                                        borderRadius: normalize(50)
                                                    }}
                                                /> */}
                                                <View>
                                                    <Text style={{
                                                        fontSize: normalize(15),
                                                        color: "#666666",
                                                        marginBottom: normalize(8)
                                                    }}>{item.name}</Text>
                                                    <Text style={{
                                                        fontSize: normalize(13),
                                                        color: "#B3B3B3"
                                                    }}>{item.beneficiaryAcctNum}</Text>
                                                    <Text style={{
                                                        fontSize: normalize(13),
                                                        color: "#B3B3B3"
                                                    }}>{item.transTypeLabel}</Text>
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
                                            height: normalize(90),
                                            width: "100%",
                                            borderRadius: normalize(10),
                                            marginBottom: normalize(13)
                                        }}>
                                            <TouchableOpacity onPress={() => console.log("Edit item ---> ", item.name)}>
                                                <View style={{
                                                    width: normalize(90),
                                                    height: normalize(90),
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
                                                            height: normalize(30)
                                                        }}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => index[item.id].closeRow()}>
                                                <View style={{
                                                    width: normalize(80),
                                                    height: normalize(90),
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
                                :
                                <View style={{
                                    flex: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: normalize(30)
                                }}>
                                    <Text style={{
                                        color: "red"
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
        color: "#2c67f2",
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
        borderColor: "#BCBFC1",
        elevation: normalize(7)
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
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: normalize(8)
    },
    leadsCount: {
        color: "#767E8C",
        fontSize: normalize(16),
        fontWeight: "500"
    }
});

export default Leads;