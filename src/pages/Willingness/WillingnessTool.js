import React, { useState } from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image, ScrollView} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default ({navigation}) => {

    const[visible, setVisible] = useState(false);
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
                            Escala de Adesão a Mamografia
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
                    <Text style={styles.textNavigation}> Escala de Adesão ...</Text>
                </View>
                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <MaterialIcons name="info-outline" size={38} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        A escala <Text style={styles.textIta}>Revised Champion's Health Belief Model</Text> (RCHBMS), traduzida e adaptada culturalmente para o Brasil, auxilia na identificação de mulheres com alto risco de não adesão às diretrizes nacionais de mamografia no Brasil.
                    </Text>
                    <Text style={styles.text}>    
                        Para cada uma das afirmativas que serão apresentadas a seguir, é necessário selecionar a resposta que melhor descreve a opinião da avaliada em relação ao seu comportamento frente ao rastreamento para o câncer de mama. 
                    </Text>
                    <Text style={styles.text}>
                        Não há respostas corretas ou incorretas para as afirmativas.
                    </Text>
                    <Text style={styles.text}>
                        Para cada resposta é empregado um valor em escala Likert, variando de Discordo completamente a Concordo completamente.
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('W1')}>
                        <Text style={styles.textButton}>
                            Usar escala
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
    text:{
        fontSize: 18,
        textAlign:"center",
        opacity: 0.7,
        marginHorizontal: 20,
        marginVertical: 10
    },
    textIta:{
        fontStyle:"italic",
        fontSize: 18,
        textAlign:"center",
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#ee88b6",
        width: 300,
        marginTop: 10,
        borderRadius: 5,
        padding: 20,
        marginBottom: 40
    },
    textButton: {
        fontSize: 14,
        textAlign: "center",
        color: "#ffffff"
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