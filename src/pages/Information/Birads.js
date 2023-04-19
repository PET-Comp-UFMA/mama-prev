import React from 'react';
import {View, Text,StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../../assets/back-icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.textNavigation}> BI-RADS</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Sistema de Laudos e
                        Registro de Dados de
                        Imagem da Mama
                    </Text>
                    <Text style={styles.text}>
                        O termo BI-RADS é um acrônimo em inglês para <Text style={styles.textIta}>Breast Image Reporting and Data System</Text>, é uma forma padronizada de relatar os achados da mamografia, auxiliando na redução do risco de interpretações subjetivas de laudos.
                        A classificação também ajuda a saber quando a investigação de um nódulo suspeito deve ser complementada com outros métodos e quando ela pode ser satisfatoriamente interrompida apenas com o resultado da mamografia. O BI-RADS também auxilia na padronização das condutas médicas frente aos resultados e ainda apresenta uma probabilidade de câncer de mama de acordo com as categorias.
                    </Text>
                </View>
                <ScrollView horizontal={true}>
                    <Image style={styles.img} source={require('../../assets/tabela-birads2.png')}/>
                </ScrollView>
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
        marginHorizontal:10,
        marginBottom:25,
        alignItems: "center"
    },
    firstText:{
        fontWeight: "bold",
        fontSize:34,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 30,
        textAlign: "center",
    }, 
    titleText:{
        fontWeight: "bold",
        fontSize:24,
        textAlign: "center",
        color: "#ee88b6",
        marginTop: 30,
        marginBottom: 10,
        textAlign: "center",
    },
    subTitleText:{
        fontWeight: "bold",
        fontSize:20,
        textAlign: "center",
        color: "#ee88b6",
        marginVertical: 5,
        textAlign: "center",
    },
    text:{
        fontSize:18,
        textAlign: "center",
        opacity: 0.7,
        marginVertical: 10,
        marginHorizontal: 20
    },
    textIta:{
        fontStyle: "italic",
        fontSize:18,
        textAlign: "center",
    },
    img:{
        height:300,
        width:1064,
        marginHorizontal: 20,
        marginVertical:20
    },
    navigationBar:{
        flexDirection: "row",
        backgroundColor: "#ee88b6",
        alignItems: "center",
        height: 70,
    },
    textNavigation:{
        fontSize: 24,
        color: "#ffffff"
    },
    backImg:{
        width: 40,
        height: 40
    }
})