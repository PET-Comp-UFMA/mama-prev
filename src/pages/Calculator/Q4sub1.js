import React, { useState } from "react";
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image} from 'react-native';


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
                            <Image style={styles.closeImg} source={require('../../../assets/close-icon.png')}/>
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
                    <Image style={styles.navigationImg} source={require('../../../assets/back-icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.textNavigation}> Ferramenta de Avaliação ...</Text>
            </View>
            <TouchableOpacity onPress={() => {setVisible(true)}}>
                <Image style={styles.navigationImg} source={require('../../../assets/info-icon.png')}/>
            </TouchableOpacity>
        </View>

        <Text style={styles.bigText}>
            DADOS DEMOGRÁFICOS
        </Text>
        <Text style={styles.text}>
            4.1 - Qual a sub-etnia/sub-raça da paciente?
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonsEach}onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: 'US Hispanic'
            })}>
                <Text style={styles.buttonText}>
                    Nascida no EUA
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('Q5', {
                value1: navigation.getParam('value1', ''),
                value2: navigation.getParam('value2', ''),
                value3: navigation.getParam('value3', ''),
                value4: navigation.getParam('value4', ''),
                value5: 'Foreign Hispanic'
            })}>
                <Text style={styles.buttonText}>
                    Nascida fora do EUA
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        backgroundColor: "#ffffff"
    },
    navigationBar:{
        position: "absolute",
        top: 0,
        width: "100%",
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