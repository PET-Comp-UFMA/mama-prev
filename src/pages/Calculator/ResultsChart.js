import React, { useState } from "react";
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {PieChart} from 'react-native-chart-kit'
import { Dimensions } from "react-native";

export default ({navigation}) => {
    const[visible, setVisible] = useState(false);
    const screenWidth = Dimensions.get("window").width;

    if(navigation.getParam('risk', 0) <= navigation.getParam('averageFiveRisk', 0)){
        var color_risk = "#00ff00"
    }else{
        var color_risk = "#ff0000"
    }

    if(navigation.getParam('lifetime_patient_risk', 0) <= navigation.getParam('lifetime_average_risk', 0)){
        var color_lifetimerisk = "#00ff00"
    }else{
        var color_lifetimerisk = "#ff0000"
    }

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        barPercentage: 0.5,
      };


      const data_risk = [
        {
          name: "%",
          percentage: navigation.getParam('risk', 0),
          color: color_risk,
          legendFontColor: "#7F7F7F",
          legendFontSize: 18
        },
        {
          name: "",
          percentage: 100 - navigation.getParam('risk', 0),
          color: "#d3d3d3",
        },
      ];

      const data_averagerisk = [
        {
          name: "%",
          percentage: navigation.getParam('averageFiveRisk', 0),
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 18
        },
        {
          name: "",
          percentage: 100 - navigation.getParam('averageFiveRisk', 0),
          color: "#d3d3d3",
          legendFontColor: "#ffffff",
          legendFontSize: 18
        },
      ];

      const data_lifetimerisk = [
        {
          name: "%",
          percentage: navigation.getParam('lifetime_patient_risk', 0),
          color: color_lifetimerisk,
          legendFontColor: "#7F7F7F",
          legendFontSize: 18
        },
        {
          name: "",
          percentage: 100 - navigation.getParam('lifetime_patient_risk', 0),
          color: "#d3d3d3",
          legendFontColor: "#ffffff",
          legendFontSize: 18
        },
      ];

      const data_avglifetimerisk = [
        {
          name: "%",
          percentage: navigation.getParam('lifetime_average_risk', 0),
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 18
        },
        {
          name: "",
          percentage: 100 - navigation.getParam('lifetime_average_risk', 0),
          color: "#d3d3d3",
          legendFontColor: "#ffffff",
          legendFontSize: 18
        },
      ];

    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
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
                        <Image style={styles.navigationImg} source={require('../../assets/back-icon.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.textNavigation}> Ferramenta de Avaliação...</Text>
                </View>
                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <Image style={styles.navigationImg} source={require('../../assets/info-icon.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                
                <Text style={styles.bigText}>
                    GRÁFICOS
                </Text>
                <Text style={styles.Boldtext}>
                    Risco de desenvolver câncer de mama nos próximos 5 anos
                </Text>
                <Text style={styles.text}>
                    Risco do Paciente:
                </Text>
                <PieChart
                    data={data_risk}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"percentage"}
                    backgroundColor={"transparent"}
                    paddingLeft={"10"}
                    center={[20, 20]}
                    absolute
                />
                <Text style={styles.text}>
                    Risco médio da população:
                </Text>
                <PieChart
                    data={data_averagerisk}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"percentage"}
                    backgroundColor={"transparent"}
                    paddingLeft={"10"}
                    center={[20, 20]}
                    absolute
                />
                <Text style={styles.Boldtext}>
                    Risco de desenvolver câncer de mama ao longo da vida
                </Text>
                <Text style={styles.text}>
                    Risco do Paciente:
                </Text>
                <PieChart
                    data={data_lifetimerisk}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"percentage"}
                    backgroundColor={"transparent"}
                    paddingLeft={"10"}
                    center={[20, 20]}
                    absolute
                />
                <Text style={styles.text}>
                    Risco médio da população:
                </Text>
                <PieChart
                    data={data_avglifetimerisk}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"percentage"}
                    backgroundColor={"transparent"}
                    paddingLeft={"10"}
                    center={[20, 20]}
                    absolute
                />
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
        marginBottom: 20
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
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 15
    },
    Boldtext:{
        fontSize:24,
        marginTop:10,
        marginHorizontal:10,
        textAlign: "justify",
        fontWeight: "bold"
    },
    text:{
        fontSize:20,
        marginHorizontal:15,
        textAlign: "justify",
        fontWeight: "bold"
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
})