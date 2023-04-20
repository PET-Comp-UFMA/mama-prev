import React, { useState } from "react";
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image, ScrollView} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default ({route, navigation}) => {
    const[visible, setVisible] = useState(false);
    const { params } = route

    return(
    <View style={styles.container}>
        <StatusBar hidden={true} />
        <Modal
        transparent={true}
        visible = {visible}
        >   
            <View style={{flex: 1, backgroundColor:"rgba(0,0,0,0.5)", alignItems: "center", justifyContent: "center"}}>
                <View style={{position: "absolute",flex:1,backgroundColor: '#ffffff', alignItems: 'center', marginHorizontal: 30, marginTop: 10,borderRadius: 20, paddingTop: 60, paddingBottom: 20}}>
                    <View style={styles.modalBar}>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text style={{textAlign: 'center', marginVertical: 10, fontSize: 20, color: "#ffffff", marginLeft:20, fontWeight: "bold"}}>Título da Página</Text>
                        </View>
                        <TouchableOpacity style={styles.closeButton} onPress = {() => {setVisible(false)}}>
                            <MaterialIcons name="close" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={{textAlign: 'center', marginVertical: 10, marginHorizontal:20, fontSize: 16}}>
                        Ferramenta de Avaliação de Risco de Câncer de Mama
                    </Text>
                    <TouchableOpacity style={styles.buttonClose2} onPress={() => {setVisible(false)}}>
                        <Text style={styles.textButtonM}>
                            Fechar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

        <View style={styles.navigationBar}>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                     <MaterialIcons name="chevron-left" size={40} color="white" />
                </TouchableOpacity>
                <Text style={styles.textNavigation}> Ferramenta de Avaliação ...</Text>
            </View>
            <TouchableOpacity onPress={() => {setVisible(true)}}>
                <MaterialIcons name="info-outline" size={38} color="white" />
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
            <Text style={styles.bigText}>
                DADOS DEMOGRÁFICOS
            </Text>
            <Text style={styles.text}>
                8 - Quantas parentes de primeiro grau da paciente (mãe, irmãs, filhas) tiveram câncer de mama?
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                    value1: params.value1,
                    value2: params.value2,
                    value3: params.value3,
                    value4: params.value4,
                    value5: params.value5,
                    value6: params.value6,
                    value7: params.value7,
                    value8: params.value8,
                    value9: params.value9,
                    value10: params.value10,
                    value11: '0'
                })}>
                    <Text style={styles.buttonText}>
                        Desconhecido
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                    value1: params.value1,
                    value2: params.value2,
                    value3: params.value3,
                    value4: params.value4,
                    value5: params.value5,
                    value6: params.value6,
                    value7: params.value7,
                    value8: params.value8,
                    value9: params.value9,
                    value10: params.value10,
                    value11: '0'
                })}>
                    <Text style={styles.buttonText}>
                        Nenhum
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                    value1: params.value1,
                    value2: params.value2,
                    value3: params.value3,
                    value4: params.value4,
                    value5: params.value5,
                    value6: params.value6,
                    value7: params.value7,
                    value8: params.value8,
                    value9: params.value9,
                    value10: params.value10,
                    value11: '1'
                })}>
                    <Text style={styles.buttonText}>
                        Um paciente
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Results', {
                    value1: params.value1,
                    value2: params.value2,
                    value3: params.value3,
                    value4: params.value4,
                    value5: params.value5,
                    value6: params.value6,
                    value7: params.value7,
                    value8: params.value8,
                    value9: params.value9,
                    value10: params.value10,
                    value11: '2'
                })}>
                    <Text style={styles.buttonText}>
                        Mais do que um paciente
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
        justifyContent:"space-between"
    },
    textNavigation:{
        fontSize: 24,
        color: "#ffffff"
    },
    bigText:{
        fontWeight: "bold",
        fontSize:22,
        marginBottom: 40,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 35
    },
    text:{
        fontSize:18,
        textAlign: "center",
        marginHorizontal: 20
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 50
    },
    buttonsEach:{
        backgroundColor: "#ee88b6",
        borderRadius: 5,
        height:50,
        width: 300,
        padding: 8,
        justifyContent: "center",
        marginVertical: 2
    },
    buttonText:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color:"#ffffff"
    },
    modalBar:{
        position: "absolute",
        top: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#ee88b6",
        alignItems: "center",
        height: 50,
        marginBottom: 20,
        justifyContent:"space-between"
    },
    closeImg:{
        width: 30,
        height: 30
    },
    navigationImg:{
        width: 40,
        height: 40
    },
    buttonClose2:{
        backgroundColor: "#ee88b6",
        borderRadius: 5,
        padding: 10,
    },
    textButtonM:{
        fontSize: 16,
        textAlign: "center",
        color: "#ffffff"
    },
    closeButton:{
        justifyContent: "center",
        height: 30, 
        width:30,
        marginRight: 10
    },
})