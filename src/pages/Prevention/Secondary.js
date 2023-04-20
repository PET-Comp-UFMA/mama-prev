import React from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView} from 'react-native';
import NewButton from '../../components/NewButton';

import { MaterialIcons } from '@expo/vector-icons';

export default ({navigation}) => {

    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="chevron-left" size={40} color="white" />
                </TouchableOpacity>
                <Text style={styles.textNavigation}> Prevenção Secundária</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Diz respeito ao diagnóstico precoce e rastreamento, onde são identificadas, por meio de exames, as mulheres que têm risco de desenvolver o câncer de mama, e são tratadas em fase inicial, visando a diminuição da morbimortalidade da doença e a melhora da qualidade de vida das pacientes.
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <NewButton textoPrincipal="Rastreamento para população geral" navigation = {() => navigation.navigate("TrackingGeneralPopulation")}/>
                    <NewButton textoPrincipal="Rastreamento para população de alto risco" navigation = {() => navigation.navigate("TrackingHighRisk")}/>
                    <NewButton textoPrincipal="Diagnóstico precoce" navigation = {() => navigation.navigate("Diagnostic")}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff"
    },
    textContainer:{
        alignItems: "center"
    },
    text:{
        fontSize:18,
        textAlign: "center",
        opacity: 0.7,
        marginHorizontal: 20,
        marginTop: 40
    },
    buttonsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 40
    },
    navigationBar:{
        flexDirection: "row",
        backgroundColor: "#ee88b6",
        alignItems: "center",
        height: 70,
    },
    textNavigation:{
        fontSize: 24,
        color: "#ffffff"
    },
    backImg:{
        width: 40,
        height: 40
    }
})
