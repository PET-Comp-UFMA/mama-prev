import React, { useState } from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
                Barreiras
            </Text>
            <Text style={styles.text}>
                Eu tenho medo de fazer uma mamografia porque não entendo o que vai ser feito.
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonsEach}onPress={() => navigation.navigate('WillResult', {
                    sus: navigation.getParam('sus', 0),
                    ben: navigation.getParam('ben', 0),
                    bar: (navigation.getParam('bar', 0) + 5) / 2
                })}>
                    <Text style={styles.buttonText}>
                        Discordo completamente
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('WillResult', {
                    sus: navigation.getParam('sus', 0),
                    ben: navigation.getParam('ben', 0),
                    bar: (navigation.getParam('bar', 0) + 4) / 2
                })}>
                    <Text style={styles.buttonText}>
                        Discordo em parte
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('WillResult', {
                    sus: navigation.getParam('sus', 0),
                    ben: navigation.getParam('ben', 0),
                    bar: (navigation.getParam('bar', 0) + 3) / 2
                })}>
                    <Text style={styles.buttonText}>
                        Não concordo e nem discordo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('WillResult', {
                sus: navigation.getParam('sus', 0),
                ben: navigation.getParam('ben', 0),
                bar: (navigation.getParam('bar', 0) + 2) / 2
                })}>
                    <Text style={styles.buttonText}>
                        Concordo em parte
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsEach} onPress={() => navigation.navigate('WillResult', {
                    sus: navigation.getParam('sus', 0),
                    ben: navigation.getParam('ben', 0),
                    bar: (navigation.getParam('bar', 0) + 1) / 2
                })}>
                    <Text style={styles.buttonText}>
                        Concordo completamente
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
    bigText:{
        fontSize:22,
        marginBottom: 40,
        textAlign: "center",
        fontWeight: "bold",
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