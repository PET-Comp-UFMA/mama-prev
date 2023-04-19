import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default () => {

    const navigation = useNavigation();

    const [shouldShow1, setShouldShow1] = useState(false);
    const [shouldShow2, setShouldShow2] = useState(false);

    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../../assets/back-icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.textNavigation}> Prevenção Primária</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Relaciona-se com o controle dos fatores de risco modificáveis e incentivo a adoção de comportamentos protetores, visto que estes aspectos podem ajudar a reduzir cerca de 30% o risco de desenvolver a doença.
                    </Text>
                    <Text style={styles.text}>
                        Para mulheres com alto risco de ter a doença pelos fatores genéticos e hereditários, existem também a mastectomia profilática com reconstrução mamária e a quimioprevenção.
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Fatores de risco modificáveis e comportamentos protetores
                    </Text>
                    <View style={styles.imgContainer}>
                        <Image style={styles.img1} source={require('../../assets/habitos.png')}/>
                    </View>
                    <Text style={styles.text}>
                        - Controlar o peso (IMC menor que 30kg/m²) principalmente na pós-menopausa;
                    </Text>
                    <Text style={styles.text}>
                        - Alimentar-se de forma balanceada e saudável (ingestão de frutas, legumes, azeite e alimentos risco em ômega 3);
                    </Text>
                    <View style={styles.textContainer}>
                    {shouldShow1 ?
                    (   
                        <View>
                            <Text style={styles.text}>
                                Uma ingestão rica em alimentos de origem vegetal como frutas, legumes, verduras, cereais integrais, feijões e outras leguminosas, e pobre em alimentos ultraprocessados, como aqueles prontos para consumo ou prontos para aquecer e bebidas açucaradas, podem prevenir novos casos de câncer.
                            </Text>
                            <View style={styles.textContainer}>
                                <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow1(!shouldShow1)}>
                                    <Text style={styles.textButton}>
                                        Ocultar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow1(!shouldShow1)}>
                            <Text style={styles.textButton}>
                                Saiba Mais
                            </Text>
                        </TouchableOpacity>)}
                    </View>
                    <Text style={styles.text}>
                        - Praticar atividade física (de preferência movimentar-se todos os dias);
                    </Text>
                    <View style={styles.textContainer}>
                    {shouldShow2 ?
                    (   
                        <View>
                            <Text style={styles.text}>
                                Realize atividades físicas como parte da rotina diária, começando por aquelas que lhe deem prazer, como caminhar, andar de bicicleta, dançar e nadar. Quanto mais se movimenta o corpo, maior a proteção contra o câncer. Caminhar ou ir de bicicleta para o trabalho, subir pelas escadas em vez de usar os elevadores, estabelecer momentos com a família e/ou amigos para atividades ao ar livre e/ou em praças públicas são algumas opções para aumentar a atividade física no dia a dia. Não há necessidade de serem aquelas modalidades sistematizadas ou que demandem a contratação de serviços como academias, que também podem ser opções. Existem recomendações que sugerem a realização de pelo menos 30 minutos de atividade física por dia, mas já há evidências de que mesmo quando realizada por menos tempo a atividade física traz benefícios para a prevenção de câncer e para a saúde. Assim, se movimente naquelas modalidades de atividade física que você gostar. A duração (tempo) torna-se mais um elemento, não o principal. É importante limitar hábitos sedentários como assistir à televisão, usar por muito tempo celular, tablet e computador ou jogar videogame.
                            </Text>
                            <View style={styles.textContainer}>
                                <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow2(!shouldShow2)}>
                                    <Text style={styles.textButton}>
                                        Ocultar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow2(!shouldShow2)}>
                            <Text style={styles.textButton}>
                                Saiba Mais
                            </Text>
                        </TouchableOpacity>)}
                    </View>
                    <Text style={styles.text}>
                        - Amamentar.
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Mastectomia profilática com reconstrução mamária para mulheres com alto risco de desenvolver o câncer de mama
                    </Text>
                    <View style={styles.imgContainerSquare}>
                        <Image style={styles.img2} source={require('../../assets/mastectomia2.png')}/>
                    </View>
                    <Text style={styles.text}>
                        A redução absoluta do risco de câncer de mama varia de 2-7%, dependendo da idade de realização da cirurgia , geralmente até 40 anos.
                    </Text>
                    <Text style={styles.text}>
                        A decisão na indicação da cirurgia profilática bilateral deve ser discutida com a paciente levando-se em consideração todos os riscos e benefícios envolvidos. 
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Quimioprevenção para mulheres com alto risco de desenvolver o câncer de mama
                    </Text>
                    <View style={styles.imgContainerSquare}>
                        <Image style={styles.img3} source={require('../../assets/quimioprevencao2.png')}/>
                    </View>
                    <Text style={styles.text}>
                        De acordo com o Instituto Nacional do Câncer José Alencar Gomes da Silva (INCA), o SUS não utiliza medicamentos quimiopreventivos.
                    </Text>
                    <Text style={styles.text}>
                        De acordo com a Sociedade Brasileira de Mastologia (SBM): Pacientes com risco de Gail ≥ 1.7, mais de 35 anos de idade, expectativa de vida superior a 10 anos ou com carcinoma lobular in situ devem usar um desses medicamentos por 5 anos:
                    </Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img4} source={require('../../assets/tabelaDoenca2.png')}/>
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
    firstText:{
        marginTop: 40,
        alignItems: "center",
        marginHorizontal: 20
    },
    textContainer:{
        alignItems: "center",
        marginHorizontal: 20
    },
    text:{
        fontSize:18,
        textAlign:"center",
        opacity: 0.7,
        marginVertical: 10,
    },
    titleText:{
        fontWeight: "bold",
        fontSize:24,
        textAlign: "center",
        color: "#ee88b6",
        marginTop:30,
        marginBottom: 10
    },
    imgContainer:{
        alignItems: "center",
        marginVertical: 10
    },
    imgContainerSquare:{
        alignItems: "center",
    },
    img1:{
        width: 310,
        height: 63
    },
    img2:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8
    },
    img3:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.55
    },
    img4:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.58
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
