import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image, ScrollView} from 'react-native';
import axios from 'axios';

import { MaterialIcons } from '@expo/vector-icons';

export default ({route, navigation}) => {
    const { params } = route
    var bodyFormData = new FormData();
    bodyFormData.append('cancerAndRadiationHistory', params.value1)
    bodyFormData.append('geneticMakeup', params.value2)
    bodyFormData.append('age', params.value3)
    bodyFormData.append('race', params.value4)
    bodyFormData.append('sub_race', params.value5)
    bodyFormData.append('biopsy', params.value6)
    bodyFormData.append('biopsy_result', params.value7)
    bodyFormData.append('biopsy_ah', params.value8)
    bodyFormData.append('age_period', params.value9)
    bodyFormData.append('childbirth_age', params.value10)
    bodyFormData.append('relatives', params.value11)

    const[visible, setVisible] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('https://bcrisktool.cancer.gov/calculate',
        bodyFormData,
        {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }    
    )
        .then(function(response){
            setData(JSON.parse(response.data.message))
        })
        
        .catch((error) => console.error(error))
    }, []);

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
                     <MaterialIcons name="chevron-left" size={50} color="white" />
                </TouchableOpacity>
                <Text style={styles.textNavigation}> Ferramenta de Avaliação ...</Text>
            </View>
            <TouchableOpacity onPress={() => {setVisible(true)}}>
                <MaterialIcons name="info-outline" size={38} color="white" />
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
            
            <Text style={styles.bigText}>
                RESULTADO
            </Text>
            <View style={styles.textContainer}>
                <Text style={styles.Boldtext}>
                    Risco de desenvolver câncer de mama nos próximos cinco anos
                </Text>
                <Text style={styles.text}>
                    Risco do paciente: {data.risk}%
                    {"\n"}Risco médio da população: {data.averageFiveRisk}%
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.Boldtext}>
                    Risco de desenvolver câncer de mama ao longo da vida
                </Text>
                <Text style={styles.text}>
                    Risco do paciente: {data.lifetime_patient_risk}%
                    {"\n"}Risco médio da população: {data.lifetime_average_risk}%
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResultsChart', {
                    risk: data.risk,
                    averageFiveRisk: data.averageFiveRisk,
                    lifetime_patient_risk: data.lifetime_patient_risk,
                    lifetime_average_risk: data.lifetime_average_risk
                })}>
                    <Text style={styles.textButton}>
                        Gráficos
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.bigText}>
                ATENÇÃO
            </Text>
            <Text style={styles.textAten}>
                Devido esta ferramenta não estar calibrada para a população brasileira, não utilize este resultado como diagnóstico. Apenas use-o como norteamento para focar mais ainda nos exames de rastreamento para aquela paciente que apresentar percentual de risco elevado
            </Text>
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
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 15
    },
    text:{
        fontSize:24,
        textAlign: "justify",
        marginHorizontal: 10
    },
    Boldtext:{
        fontSize:24,
        marginHorizontal:10,
        textAlign: "justify",
        fontWeight: "bold"
    },
    textContainer:{
        marginVertical: 10,
        marginHorizontal:10
    },
    buttonsContainer:{
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center"
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
    textAten:{
        fontSize:16,
        textAlign: "justify",
        marginHorizontal: 10,
        marginBottom: 10
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
        height: 40,
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
        fontSize: 14,
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