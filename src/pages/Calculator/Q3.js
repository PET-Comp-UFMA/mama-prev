import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default ({navigation}) => {
    const[visible, setVisible] = useState(false);
    var age;
    return (
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
            3 - Qual a idade da
            paciente? OBS: Esta ferramenta
            não calcula risco de
            desenvolver câncer de
            mama em mulheres com
            menos de 35 anos, nem
            com mais de 85.
        </Text>
        
        <RNPickerSelect
            onValueChange={(value) => age = value}
            items={[
                { label: '35 anos', value: '35' },
                { label: '36 anos', value: '36' },
                { label: '37 anos', value: '37' },
                { label: '38 anos', value: '38' },
                { label: '39 anos', value: '39' },
                { label: '40 anos', value: '40' },
                { label: '41 anos', value: '41' },
                { label: '42 anos', value: '42' },
                { label: '43 anos', value: '43' },
                { label: '44 anos', value: '44' },
                { label: '45 anos', value: '45' },
                { label: '46 anos', value: '46' },
                { label: '47 anos', value: '47' },
                { label: '48 anos', value: '48' },
                { label: '49 anos', value: '49' },
                { label: '50 anos', value: '50' },
                { label: '51 anos', value: '51' },
                { label: '52 anos', value: '52' },
                { label: '53 anos', value: '53' },
                { label: '54 anos', value: '54' },
                { label: '55 anos', value: '55' },
                { label: '56 anos', value: '56' },
                { label: '57 anos', value: '57' },
                { label: '58 anos', value: '58' },
                { label: '59 anos', value: '59' },
                { label: '60 anos', value: '60' },
                { label: '61 anos', value: '61' },
                { label: '62 anos', value: '62' },
                { label: '63 anos', value: '63' },
                { label: '64 anos', value: '64' },
                { label: '65 anos', value: '65' },
                { label: '66 anos', value: '66' },
                { label: '67 anos', value: '67' },
                { label: '68 anos', value: '68' },
                { label: '69 anos', value: '69' },
                { label: '70 anos', value: '70' },
                { label: '71 anos', value: '71' },
                { label: '72 anos', value: '72' },
                { label: '73 anos', value: '73' },
                { label: '74 anos', value: '74' },
                { label: '75 anos', value: '75' },
                { label: '76 anos', value: '76' },
                { label: '77 anos', value: '77' },
                { label: '78 anos', value: '78' },
                { label: '79 anos', value: '79' },
                { label: '80 anos', value: '80' },
                { label: '81 anos', value: '81' },
                { label: '82 anos', value: '82' },
                { label: '83 anos', value: '83' },
                { label: '84 anos', value: '84' },
                { label: '85 anos', value: '85' },

            ]}
            style={pickerSelectStyles}
        />
        <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Q4', {
                    value1: navigation.getParam('value1', ''),
                    value2: navigation.getParam('value1', ''),
                    value3: age
            })}>
                    <Text style={styles.textButton}>
                        Avançar
                    </Text>
                </TouchableOpacity>
            </View>
    </View>
  );
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
    backButton:{
        backgroundColor: "blue",
        height: 40, 
        width:40
    },
    bigText:{
        fontSize:22,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 35
    },
    text:{
        fontSize:18,
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 40
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
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
    },
  });