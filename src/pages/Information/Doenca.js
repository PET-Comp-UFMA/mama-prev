import React, { useState } from 'react';
import {View, Text,StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';

export default ({navigation}) => {
    const [shouldShow1, setShouldShow1] = useState(false);
    const [shouldShow2, setShouldShow2] = useState(false);
    const [shouldShow3, setShouldShow3] = useState(false);
    const [shouldShow4, setShouldShow4] = useState(false);
    const [shouldShow5, setShouldShow5] = useState(false);
    const [shouldShow6, setShouldShow6] = useState(false);
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../../assets/back-icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.textNavigation}> O Câncer de Mama</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        O que é câncer de mama?
                    </Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/doenca.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        O câncer de mama é uma doença causada pela multiplicação desordenada de células da mama. Esse processo gera células anormais que se multiplicam, formando um tumor.
                    </Text>
                    <Text style={styles.text}>
                        Menos de 1% dos cânceres de mama acometem homens. No entanto, tem apresentado aumento na sua incidência nos últimos anos. Apresenta ainda maior mortalidade quando comparado ao câncer de mama em mulheres, grande parte em razão do diagnóstico tardio.
                    </Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Como ele se manifesta?</Text>
                    </View>
                    <Text style={styles.text}>
                        Na maioria das vezes se manifesta com um nódulo na mama, mas também pode se apresentar de outras formas:
                    </Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/alteracaoDoTamanho.png')}/>
                </View>
                
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Alteração no tamanho ou na forma da mama.
                    </Text>
                </View>
                <View style={styles.textContainer}>
                {shouldShow1 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            O tumor deforma os tecidos mamários e com isso pode alterar o formato da mama, que pode apresentar inchaço, ou diminuição da mama, por conta da retração dos tecidos.
                        </Text>
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow1(!shouldShow1)}>
                            <Text style={styles.textButton}>
                                Ocultar
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow1(!shouldShow1)}>
                        <Text style={styles.textButton}>
                            Saiba Mais
                        </Text>
                    </TouchableOpacity>
                )}
                </View>

                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/abaulamentoDaMama.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Vermelhidão ou coceira na mama.
                    </Text>
                </View>
                <View style={styles.textContainer}>
                {shouldShow2 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Quando o câncer ainda não conseguiu penetrar nos tecidos, se manifesta externamente dessa maneira.
                        </Text>
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow2(!shouldShow2)}>
                            <Text style={styles.textButton}>
                                Ocultar
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow2(!shouldShow2)}>
                        <Text style={styles.textButton}>
                            Saiba Mais
                        </Text>
                    </TouchableOpacity>)}
                </View>

                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/descargaMamilar.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Descarga mamilar (eliminação de secreção), sem apertar.
                    </Text>
                </View>
                <View style={styles.textContainer}>
                {shouldShow3 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Nesses casos o tumor deve estar no início e alojado nos dutos mamários.
                        </Text>
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow3(!shouldShow3)}>
                            <Text style={styles.textButton}>
                                Ocultar
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow3(!shouldShow3)}>
                        <Text style={styles.textButton}>
                            Saiba Mais
                        </Text>
                    </TouchableOpacity>)}
                </View>

                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/vermelhidao.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}> 
                        Nódulo na mama.
                    </Text>
                </View>
                <View style={styles.textContainer}>
                {shouldShow4 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Que está sempre presente e não diminui de tamanho, fixo e de consistência endurecida.
                        </Text>
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow4(!shouldShow4)}>
                            <Text style={styles.textButton}>
                                Ocultar
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow4(!shouldShow4)}>
                        <Text style={styles.textButton}>
                            Saiba Mais
                        </Text>
                    </TouchableOpacity>)}
                </View>

                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/noduloAxila.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}> 
                        Edema na axila ou ao redor da clavícula.
                    </Text>
                </View>
                <View style={styles.textContainer}>
                {shouldShow5 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Isso demonstra que o câncer está avançando pelos gânglios linfáticos.
                        </Text>
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow5(!shouldShow5)}>
                            <Text style={styles.textButton}>
                                Ocultar
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow5(!shouldShow5)}>
                        <Text style={styles.textButton}>
                            Saiba Mais
                        </Text>
                    </TouchableOpacity>)}
                </View>

                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/nodulo.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}> 
                        Abaulamento da mama, endurecimento ou retração da pele (aspecto casca de laranja).
                    </Text>
                </View>
                <View style={styles.textContainer}>
                {shouldShow6 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Devido a degeneração das glândulas mamárias. Também são indicativos de um processo inflamatório nos vasos que irrigam a região.
                        </Text>
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow6(!shouldShow6)}>
                            <Text style={styles.textButton}>
                                Ocultar
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow6(!shouldShow6)}>
                        <Text style={styles.textButton}>
                            Saiba Mais
                        </Text>
                    </TouchableOpacity>)}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}> 
                        OBS.: A paciente pode ou não sentir dor junto a esses sinais e sintomas.
                    </Text>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>
                            Quais os tipos mais comuns?
                        </Text>
                    </View >
                    <Text style={styles.text}>
                        O tipo histológico mais comum para o câncer de mama feminina é o carcinoma de células epiteliais, que se divide em lesões in situ e invasoras. Os carcinomas mais frequentes são os ductais ou lobulares.
                    </Text>
                </View>
                <View style={styles.lastImgContainer}>
                    <Image style={styles.lastImg} source={require('../../assets/carcinomaDuctal.png')}/>
                    <Text style={styles.refText}>Carcinoma ductal</Text>
                    <Text style={styles.refText}>Referência: Cancer Research UK/ Wikimedia Commons</Text>
                    <Image style={styles.lastImg} source={require('../../assets/carcinomaLobular.png')}/>
                    <Text style={styles.refText}>Carcinoma lobular</Text>
                    <Text style={styles.refText}>Referência: Cancer Research UK/ Wikimedia Commons</Text>
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
    },
    titleText:{
        fontWeight: "bold",
        fontSize:24,
        textAlign: "center",
        marginHorizontal: 40,
        lineHeight: 27,
        color: "#ee88b6",
        marginTop: 30,
        marginBottom: 10
    },
    text:{
        fontSize:18,
        marginHorizontal:20,
        textAlign: "center",
        opacity: 0.7,
        marginBottom: 10,
        marginTop: 10
    },
    img:{
        width:206,
        height:206,
    },
    imgContainer:{
        alignItems: "center",
    },
    lastImgContainer:{
        alignItems: "center",
        marginBottom: 20
        
    },
    lastImg:{
        marginTop: 25,
        width: 326,
        height: 384
    },
    refText:{
        fontSize: 10
    },
    buttonRef:{
        backgroundColor: "#ee88b6",
        borderRadius: 5,
        padding: 5,
        marginBottom: 20
    },
    textButton:{
        fontSize: 16,
        textAlign: "center",
        color: "#ffffff"
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