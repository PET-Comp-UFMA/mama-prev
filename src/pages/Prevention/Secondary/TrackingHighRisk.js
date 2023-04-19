import React, { useState } from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Modal, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default () => {

    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
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
                            Rastreamento para População de Alto Risco
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
                    <Text style={styles.textNavigation}> Rastreamento Alto Risco ...</Text>
                </View>
                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <Image style={styles.navigationImg} source={require('../../../assets/info-icon.png')}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        As pacientes que apresentam risco aumentado para o surgimento do câncer de mama devem receber uma abordagem diferente para o diagnóstico precoce quando comparadas à população geral.
                    </Text>
                    <Text style={styles.text}>
                        De acordo com a SBM, as seguintes condições estão associadas a um maior risco de desenvolvimento de câncer de mama e devem receber uma atenção diferenciada para o diagnóstico precoce: 
                    </Text>
                    <Text style={styles.titleText}>
                        História prévia de câncer de mama
                    </Text>
                    <Text style={styles.text}>
                        - Exame físico a cada seis meses nos primeiros 2 anos e depois anualmente;{"\n"}{"\n"}- Mamografia anual ou seis meses após o término do tratamento conservador (unilateral na mama operada);{"\n"}{"\n"}- Ultrassonografia das mamas deve ser utilizado se a mamografia for classe BIRADS 0;{"\n"}{"\n"}- Ressonância magnética das mamas na suspeita de recidiva após tratamento conservador ou esclarecer dúvidas após Mamografia ou Ultrassonografia das mamas.
                    </Text>
                    <Text style={styles.titleText}> 
                        Pacientes com risco de Gail maior ou igual a 1.7% de desenvolver câncer de mama em 5 anos (a partir dos 35 anos de idade)
                    </Text>
                    <Text style={styles.text}>
                        - Exame clínico a cada 6-12 meses (iniciar na idade em que o risco de Gail seja maior ou igual a 1.7%);{"\n"}{"\n"}- Mamografia anual.
                    </Text>
                    <Text style={styles.titleText}>
                        Mulheres com risco maior que 20% de desenvolver câncer de mama ao longo da vida (“<Text style={styles.textIta}>lifetime risk</Text>”) com antecedentes de carcinoma lobular <Text style={styles.textIta}>in situ</Text> (CLIS) ou hiperplasia ductal atípica (HDA) ou hiperplasia lobular atípica (HLA)
                    </Text>
                    <Text style={styles.text}>
                        - Exame clínico a cada 6-12 meses após o diagnóstico de CLIS, HDA ou HLA;{"\n"}{"\n"}- Mamografia anual, iniciar após o diagnóstico (não iniciar antes dos 30 anos de idade);{"\n"}{"\n"}- Se disponível considerar Ressonância Magnética das Mamas (não antes dos 25 anos de idade).
                    </Text>
                    <Text style={styles.titleText}>
                        Mulheres com risco maior que 20% ao longo da vida (“<Text style={styles.textIta}>lifetime risk</Text>”) baseado em modelos que utilizam variáveis da história familiar (modelos de CLAUS, BOADICEA, BRCAPRO, Tyrer-Cuzik)
                    </Text>
                    <Text style={styles.text}>
                        - Exame físico a cada 6-12 meses;{"\n"}{"\n"}- Se disponível geneticista, encaminhar para aconselhamento genético;{"\n"}{"\n"}- Mamografia anual, iniciar 10 anos antes da idade da paciente mais jovem que teve câncer na família (não antes dos 30 anos de idade);{"\n"}{"\n"}- Ressonância Magnética das Mamas anual, iniciar 10 anos antes da idade da paciente mais jovem que teve câncer na família (não antes dos 25 anos de idade).
                    </Text>
                    <Text style={styles.titleText}> 
                        Mulheres que receberam previamente irradiação em manto no tórax com menos de 30 anos de idade
                    </Text>
                    <Text style={styles.text}>
                        - Idade atual menor que 25 anos: exame físico anual (iniciar 8-10 anos após a irradiação); autoexame (como autoconhecimento e orientar para reportar alterações ao médico);{"\n"}{"\n"}- Idade atual maior ou igual a 25 anos: exame clínico a cada 6-12 meses (iniciar 8-10 anos após a irradiação); Mamografia anual (não antes dos 30 anos, iniciar 8-10 anos após a irradiação); Ressonância Magnética das Mamas anual (não antes dos 25 anos, iniciar 8-10 anos após a radioterapia). 
                    </Text>
                    <Text style={styles.titleText}>
                        Pacientes com mutação conhecida que aumentam risco de câncer de mama ou com história familiar sugestiva
                    </Text>
                    <Text style={styles.text}>
                        - Se disponível geneticista, encaminhar para aconselhamento genético;{"\n"}{"\n"}- Ressonância Magnética das Mamas iniciar aos 25 anos de idade, anualmente;{"\n"}{"\n"}- Mamografia anual a partir dos 30 anos de idade.
                    </Text>
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
        alignItems: "center",
        marginHorizontal: 20
    },
    text:{
        fontSize:18,
        textAlign: "center",
        opacity: 0.7,
        marginVertical: 10
    },
    textIta:{
        fontStyle:"italic",
        fontSize:24,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ee88b6",
    },
    titleText:{
        fontSize:24,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ee88b6",
        marginTop:30,
        marginBottom: 10
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
    closeButton:{
        justifyContent: "center",
        height: 30, 
        width:30,
        marginRight: 10
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
})
