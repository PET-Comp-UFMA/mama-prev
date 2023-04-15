import React, { useState } from 'react';
import {View, Text, StyleSheet,StatusBar, Image, Modal, TouchableOpacity} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';


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

            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        Esta ferramenta de avaliação de risco de câncer de mama é baseada em um modelo estatístico conhecido como Modelo Gail, que foi traduzido, adaptado culturalmente e validado para o português brasileiro.
                    </Text>
                    <Text style={styles.text}>
                        A ferramenta usa as informações pessoais de uma mulher para estimar o risco de desenvolver câncer de mama.
                    </Text>
                    <Text style={styles.text}>
                        O cálculo apresentado neste aplicativo é feito externamente, utilizando a calculadora <Text style={styles.textIta}>"Breast Cancer Risk Assessment Tool" </Text> disponível em: {"\n"}https://bcrisktool.cancer.gov/calculator.html
                    </Text>
                    <Text style={styles.text}>
                        OBS.: Esta ferramenta ainda não está calibrada para a população brasileira, porém, Gail recomenda que seja utilizada a etnia “Hispânica/Latina” nascida fora dos EUA, que é a que mais se aproxima.
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Q1')}>
                        <Text style={styles.textButton}>
                            Usar ferramenta
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