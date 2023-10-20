import React, { useState } from 'react';
import {View,Text, StyleSheet,StatusBar, TouchableOpacity, Modal, Image} from 'react-native';
import NewButton from '../components/NewButton';

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
                        <Text style={{textAlign: 'center', marginTop: 20, marginVertical: 10, marginHorizontal:20, fontSize: 16}}>
                            Sobre Prevenção do Câncer de Mama
                        </Text>
                        <TouchableOpacity style={styles.buttonClose2} onPress={() => {setVisible(false)}}>
                            <Text style={styles.textButton}>
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
                    <Text style={styles.textNavigation}> Sobre Prevenção ...</Text>
                </View>
                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <MaterialIcons name="info-outline" size={38} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <NewButton textoPrincipal="O Câncer de Mama" navigation = {() => navigation.navigate("Doenca")}/>
                <NewButton textoPrincipal="Fatores de Proteção e de Risco" navigation = {() => navigation.navigate("Risco")}/>
                <NewButton textoPrincipal="Prevenção" navigation = {() => navigation.navigate("Prevencao")}/>
                <NewButton textoPrincipal="BI-RADS" navigation = {() => navigation.navigate("Birads")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: "center",
        marginBottom: 40,
        marginHorizontal: 20
    },
    headerText: {
        fontSize: 34,
        textAlign: "center",
        letterSpacing: -0.82,
        color: "#ee88b6",
        opacity: 1,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    buttonsContainer: {
        alignItems: "center",
        justifyContent: "center"
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
        position: "absolute",
        top: 0,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#ee88b6",
        alignItems: "center",
        height: 70,
        marginBottom: 50,
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
    textButton:{
        fontSize: 16,
        textAlign: "center",
        color: "#ffffff"
    },
})