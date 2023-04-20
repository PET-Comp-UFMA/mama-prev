import React from 'react';
import {View, Text, StyleSheet,StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="chevron-left" size={40} color="white" />
                </TouchableOpacity>
                <Text style={styles.textNavigation}> Ferramentas Úteis</Text>
            </View>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        Estas duas ferramentas de avaliação vão auxiliar os profissionais tanto em suas auto avaliações, quanto para utilização com suas pacientes no momento da assistência.
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculator')}>
                        <Text style={styles.textButton}>
                            Ferramenta de avaliação de risco de câncer de mama
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WillingnessTool')}>
                        <Text style={styles.textButton}>
                            Escala de adesão a mamografia
                        </Text>
                    </TouchableOpacity>
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
    },
    text:{
        fontSize:18,
        marginHorizontal:20,
        textAlign: "center",
        opacity: 0.7,
        marginBottom: 10,
        marginTop: 30
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 20
    },
    button: {
        backgroundColor: "#ee88b6",
        width: 300,
        borderRadius: 5,
        padding: 20,
    },
    textButton: {
        fontSize: 14,
        textAlign: "center",
        color: "#ffffff"
    }
})