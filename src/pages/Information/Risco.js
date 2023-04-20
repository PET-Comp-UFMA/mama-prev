import React, { useState } from 'react';
import {View, Text,StyleSheet, StatusBar, TouchableOpacity, Modal, Image, ScrollView} from 'react-native';

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
                            Fatores de Proteção e de Risco
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
                    <Text style={styles.textNavigation}> Fatores de Proteção e ...</Text>
                </View>
                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <MaterialIcons name="info-outline" size={38} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.titleText1}>Fatores de Proteção</Text>
                    <Text style={styles.text}>
                        - Amamentação;
                        {"\n"}- Prática regular de atividade física.
                    </Text>
                </View>
                <View>
                    <Text style={styles.titleText1}>Fatores de Risco</Text>
                    <Text style={styles.titleText2}> Ambientais e Comportamentais</Text>
                    <Text style={styles.text}>
                        - Excesso de peso;
                        {"\n"}- Inatividade física;
                        {"\n"}- Má alimentação;
                        {"\n"}- Ingestão de álcool;
                        {"\n"}- Uso de tabaco;
                        {"\n"}- Exposição frequente a Raio X na região do tórax.
                        {"\n\n"}OBS.: É possível que mesmo que se mude os hábitos e melhore os comportamentos, ainda se desenvolva o câncer de mama.
                    </Text>
                </View>
                <View>
                    <Text style={styles.titleText2}>História Reprodutiva e Hormonal</Text>
                    <Text style={styles.text}>
                        - Menarca antes dos 12 anos;
                        {"\n"}- Menopausa após os 55 anos;
                        {"\n"}- Nuliparidade;
                        {"\n"}- Primeira gravidez após os 30 anos;
                        {"\n"}- Uso de contraceptivos hormonais (estrogênio-progesterona);
                        {"\n"}- Reposição hormonal na pós-menopausa. 
                    </Text>
                </View>
                <View>
                    <Text style={styles.titleText2}>Genéticos e Hereditários</Text>
                    <Text style={styles.text}>
                        - História familiar de câncer no ovário;
                        {"\n"}- História familiar de câncer de mama antes dos 50 anos;
                        {"\n"}- História familiar de câncer de mama em homens;
                        {"\n"}- Alteração genética nos genes BRCA1 e BRCA2.
                        {"\n\n"}OBS.: A mulher que possui um ou mais dos fatores genéticos/hereditários é considerada com risco elevado para desenvolver câncer de mama. O câncer de mama de caráter genético/hereditário corresponde a apenas 5% a 10% do total de casos da doença.
                    </Text>
                </View>
                <View>
                    <Text style={styles.titleText2}>ATENÇÃO:</Text>
                    <Text style={styles.text}>
                        A presença de um ou mais desses fatores de risco não significa que a mulher necessariamente terá a doença.
                    </Text>
                </View>
                <View>
                    <Text style={styles.titleText1}>Fatores de risco para câncer de mama em homens</Text>
                    <Text style={styles.text}>
                        - Desordens no balanço hormonal com excesso de estrogênio e deficiência de testosterona;
                        {"\n"}- Alterações testiculares, doenças hepáticas, obesidade, Síndrome de Klinefelter;
                        {"\n"}- Usode estrógeno exógenos e anti-androgênios;
                        {"\n"}- Exposições ocupacionais a radiação ionizante;
                        {"\n"}- Fatores ambientais (álcool);
                        {"\n"}- Fator de risco genético, como história familiar de câncer de mama e mutação de genes relacionados ao câncer de mama como o BRCA1.
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
        alignItems: "flex-start",
    },
    text:{
        fontSize:18,
        marginHorizontal:20,
        textAlign: "left",
        opacity: 0.7,
        marginVertical: 10
    },
    titleText1:{
        fontWeight: "bold",
        fontSize:24,
        marginHorizontal:10,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 30,
        marginBottom:10
    },
    titleText2:{
        fontSize:22,
        marginHorizontal:10,
        textAlign: "left",
        color: "#ee88b6",
        marginTop: 10
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
})