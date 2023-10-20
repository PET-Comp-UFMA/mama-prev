import React from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Image} from 'react-native';
import NewButton from '../../components/NewButton';

import { MaterialIcons } from '@expo/vector-icons';

export default ({navigation}) => {

    return(
    <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.navigationBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="chevron-left" size={50} color="white"/>
            </TouchableOpacity>
            <Text style={styles.textNavigation}> Prevenção</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <NewButton textoPrincipal="Primária" navigation = {() => navigation.navigate("Primary")}/>
            <NewButton textoPrincipal="Secundária" navigation = {() => navigation.navigate("Secondary")}/>
        </View>
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    buttonsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    navigationBar:{
        position: "absolute",
        top: 0,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#ee88b6",
        alignItems: "center",
        height: 70,
        marginBottom: 50,
    },
    textNavigation:{
        fontSize: 24,
        color: "#ffffff"
    },
    navigationImg:{
        width: 40,
        height: 40
    },
})