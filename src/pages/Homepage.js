import React, { useState, useEffect } from 'react';
import {View,Text, StyleSheet, StatusBar, Modal, TouchableOpacity, Image} from 'react-native';
import NewButton from '../components/NewButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ManageProfile from './ManageProfile'
const Homepage = ({navigation}) => {
    const[visible, setVisible] = useState(true);

    
    return(
        <View style={{flex:1,flexDirection: "column",justifyContent: "center", backgroundColor:"#ffffff"}} transparent={true}> 
            <StatusBar hidden={true} />
            <Modal
            transparent={true}
            visible = {visible}
            >   
                <View style={{flex: 1, backgroundColor:"rgba(0,0,0,0.5)", alignItems: "center", justifyContent: "center"}}>
                    <View style={{position: "absolute",flex:1,backgroundColor: '#ffffff', alignItems: 'center', marginHorizontal: 30, marginTop: 10,borderRadius: 20, paddingTop: 60, paddingBottom: 40}}>
                        <View style={styles.modalBar}>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <Text style={{textAlign: 'center', marginVertical: 10, fontSize: 20, color: "#ffffff", marginLeft:20, fontWeight: "bold"}}>Atenção!</Text>
                            </View>
                            <TouchableOpacity style={styles.closeButton} onPress = {() => {setVisible(false)}}>
                                <Image style={styles.closeImg} source={require('../assets/close-icon.png')}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{textAlign: 'center', marginBottom: 10, marginTop:20, marginHorizontal:20, fontSize: 16}}>
                        Você profissional de saúde também precisa se cuidar!{"\n"}{"\n"}
                        Fique atento as recomendações quanto a presença de sinais e sintomas, fatores de risco e periodicidade dos exames para rastreamento e detecção precoce do câncer de mama.{"\n"}{"\n"}
                        Cuide-se!
                        </Text>
                        <NewButton textoPrincipal="Fechar"
                        navigation = {() => {setVisible(false)}} />
                    </View>
                </View>
            </Modal>
                <View>
                    <View style={styles.button }>
                        <Text style={styles.text}>Muito bem! Agora selecione a opção desejada para começarmos</Text>
                    </View>
                    <View style={styles.button }>
                        <NewButton textoPrincipal="Sobre o aplicativo" navigation = {() => navigation.navigate("Sobre")}/>
                    </View>
                    <View style={styles.button }>
                        <NewButton textoPrincipal="Ferramentas úteis" navigation = {() => navigation.navigate("Avaliation")}/> 
                    </View>
                    <View style={styles.button }>
                        <NewButton textoPrincipal="Sobre prevenção do cancêr de mama" navigation = {() => navigation.navigate("Information")}/>
                    </View> 
                </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
    text:{
        textAlign:"center",
        fontSize:24,
        color: "#ee88b6",
        fontWeight: "bold",
        marginHorizontal: 30,
        marginBottom: 50,
    },
    button:{
        alignItems: "center"
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
        marginBottom: 10,
        justifyContent:"space-between"
    },
    closeButton:{
        justifyContent: "center",
        marginRight: 10
    },
    closeImg:{
        width: 30,
        height: 30

    }
})

export default Homepage;