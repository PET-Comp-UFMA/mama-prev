import React, { useState } from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image, ScrollView} from 'react-native';

export default ({route, navigation}) => {

    const { params } = route
    const[visible, setVisible] = useState(false);

    var res = (params.sus + params.ben + params.bar) / 3
    if(res > 3.67){
        var result = true
    }

    if(res <= 3.67){
        var result = false
    }
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
                                <Image style={styles.closeImg} source={require('../../assets/close-icon.png')}/>
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
                        <Image style={styles.navigationImg} source={require('../../assets/back-icon.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.textNavigation}> Escala de Adesão ...</Text>
                </View>
                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <Image style={styles.navigationImg} source={require('../../assets/info-icon.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                <Text style={styles.bigText}>
                    Resultado
                </Text>
                <View style={styles.textContainer}>
                {result ?
                    (
                    <View style={styles.textContainer}>
                        <Text style={styles.Boldtext}>
                            “PROVÁVEL ADESÃO”
                        </Text>
                        <Text style={styles.text}>
                            Caro profissional, a mulher avaliada PROVAVELMENTE REALIZARÁ a mamografia.
                            Lembrar de enfatizar as recomendações de acordo com a idade e periodicidade.
                        </Text>
                    </View>
                    ) : (
                        <View style={styles.textContainer}>
                            <Text style={styles.Boldtext}>
                                “PROVÁVEL NÃO ADESÃO”
                            </Text>
                            <Text style={styles.text}>
                                Caro profissional, a mulher avaliada PROVAVELMENTE NÃO REALIZARÁ a mamografia.
                                Você poderá enfatizar a importância deste exame no rastreamento do câncer de mama, esclarecer as dúvidas e encorajá-la a realizar o exame.
                                Lembrar de enfatizar as recomendações de acordo com a idade e periodicidade.
                            </Text>
                        </View>
                    )
                }
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Avaliation')}>
                        <Text style={styles.textButton}>
                            Voltar às ferramentas
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
        backgroundColor: "#ffffff",
    },
    headerContainer:{
        top: 36,
        marginBottom:40
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
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 15
    },
    text:{
        fontSize:20,
        textAlign: "center",
        marginHorizontal: 10,
        letterSpacing: -0.43,
        lineHeight: 41,
    },
    Boldtext:{
        fontSize:24,
        marginHorizontal:10,
        marginBottom: 20,
        textAlign: "center",
    },
    textContainer:{
        marginVertical: 10,
        marginHorizontal:10
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#ee88b6",
        width: 300,
        marginTop: 40,
        borderRadius: 5,
        padding: 20,
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