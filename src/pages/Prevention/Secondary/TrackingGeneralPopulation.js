import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, Modal, Dimensions, ScrollView} from 'react-native';


export default ({navigation}) => {

    const [visible, setVisible] = useState(false);

    const [shouldShow1, setShouldShow1] = useState(false);
    const [shouldShow2, setShouldShow2] = useState(false);
    const [shouldShow3, setShouldShow3] = useState(false);
    const [shouldShow4, setShouldShow4] = useState(false);
    const [shouldShow5, setShouldShow5] = useState(false);
    const [shouldShow6, setShouldShow6] = useState(false);
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
                                <Image style={styles.closeImg} source={require('../../../assets/close-icon.png')}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{textAlign: 'center', marginVertical: 10, marginHorizontal:20, fontSize: 16}}>
                            Rastreamento para População Geral
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
                    <Text style={styles.textNavigation}> Rastreamento Geral ...</Text>
                </View>
                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <Image style={styles.navigationImg} source={require('../../../assets/info-icon.png')}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Refere-se a aplicação de testes ou exames em uma população sem sinais e sintomas sugestivos da doença, para identificar possíveis alterações sugestivas de câncer e, posteriormente, encaminhar as mulheres com resultados anormais para investigação diagnóstica.{"\n"}Cabe ressaltar, que as recomendações para os exames estão associadas a diminuição comprovada da morbimortalidade.
                    </Text>
                </View>

                <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Mamografia</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img1} source={require('../../../assets/mamografia2.png')}/>
                </View>
                <View style={styles.textContainer}>
                {shouldShow1 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            É uma radiografia das mamas feita por um mamógrafo (equipamento de raio-X), que identifica alterações suspeitas de câncer antes do surgimento dos sintomas. 
                        </Text>
                        <Text style={styles.text}>
                            O Instituto Nacional do Câncer José Alencar Gomes da Silva (INCA) recomenda a realização desse exame de 50 à 69 anos a cada dois anos. Além disso, mulheres com risco aumentado de desenvolver câncer de mama, relacionados aos fatores genéticos e hereditários, devem iniciar o acompanhamento com exme clínico das mamas e mamografia aos 35 anos.
                        </Text>
                        <Text style={styles.text}>
                            A Sociedade Brasileira de Mastologia (SBM) recomenda de 40 à 69 anos anualmente.
                        </Text>
                        <Text style={styles.text}>
                            A mulher com casos de câncer de mama e/ou ovário na família (mãe, irmã ou filha), ou mutações genéticas, deverá começar fazer a mamografia mais cedo, conforme orientação do seu mastologista.
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
                    </TouchableOpacity>)}
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Autoexame das mamas</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img2} source={require('../../../assets/autoexame.png')}/>
                </View>
                <View style={styles.textContainer}>
                {shouldShow2 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            É o procedimento em que a mulher observa e palpa as próprias mamas e as estruturas anatômicas acessórias, visando detectar mudanças ou anormalidades que possam indicar a presença de um câncer.
                        </Text>
                        <Text style={styles.text}>
                            Entretanto, não é mais recomendado, o que o INCA e a SBM indicam é o autoconhecimento das mamas, que consiste nas medidas de palpação das mamas para familiarização dos aspectos normais e identificação precoce de eventuais alterações, sem necessidade de que seja utilizada uma técnica de autoexame ou de seguir uma periodicidade regular e fixa, valorizando a descoberta casual de pequenas alterações mamárias suspeitas.
                        </Text>
                        <Text style={styles.text}>
                            Atenção!
                            {"\n"}É importante conhecer os tabus existentes relacionados ao conhecimento do corpo e auxiliar as mulheres por meio de acolhimento, educação em saúde entre outras estratégias.
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

                <View style={styles.textContainer}>
                    <Text style={styles.titleText}> Exame clínico das mamas</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img3} source={require('../../../assets/exameClinico.png')}/>
                </View>
                <View style={styles.textContainer}>
                {shouldShow3 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            É semelhante ao autoexame, porém é realizado pelo profissional médico ou enfermeiro, e é mais especifico pois inclui uma avaliação mais criteriosa, iniciando com a inspeção estática e dinâmica, a palpação e finalizando com a expressão mamária (ordenha firme e delicada).
                        </Text>
                        <Text style={styles.text}>
                            O INCA apresenta ausência para recomendação desse exame, pois o balanço entre possíveis danos e benefícios é incerto.
                        </Text>
                        <Text style={styles.text}>
                            A SBM preconiza que este deve ser efetuado por profissional qualificado e com frequência anual a partir dos 35 anos de idade.
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

                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Ressonância nuclear magnética</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img4} source={require('../../../assets/ressonanciaMagnetica.png')}/>
                </View>
                <View style={styles.textContainer}>
                {shouldShow4 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            É um exame que mostra imagens em alta definição, através de campos magnéticos e pulsos de radiofrequência. Apresenta alta sensibilidade e pode detectar canceres de mama que a mamografia e a ultrassonografia não conseguem. Além disso, ao contrário da mamografia, a ressonância magnética não utiliza radiação ionizante.
                        </Text>
                        <Text style={styles.text}>
                            Apesar disso, O INCA e a SBM não recomendam a realização deste tipo de procedimento para rastreamento para a população geral, pois tem alto custo e baixa disponibilidade e, por isso, apenas em casos específicos, pode ser realizada em mulheres com alto risco de desenvolver a doença.
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

                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Ultrassonografia
                    </Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img5} source={require('../../../assets/ultrassom.png')}/>
                </View>
                <View style={styles.textContainer}>
                {shouldShow5 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            É um exame de imagem realizado pelo aparelho transdutor que emite ondas sonoras de alta frequência causando vibração nos tecidos. Porém essas imagens possuem menos definição que a emitida pela ressonância. O objetivo desse exame é também de identificar possíveis alterações nas mamas. Muitas vezes, o uso da ultrassonografia como teste de rastreamento é feito com a intenção de complementar a mamografia realizada em mulheres jovens com mamas densas e resultado negativo, visando aumentar a sensibilidade do rastreamento.
                        </Text>
                        <Text style={styles.text}>
                            O INCA e a SBM não recomendam a realização deste tipo de procedimento para rastreamento.
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

                <View style={styles.textContainer}>
                {shouldShow6 ?
                (   
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>
                        Termografia
                        </Text>
                        <View style={styles.imgContainer}>
                            <Image style={styles.img6} source={require('../../../assets/termografia.jpg')}/>
                        </View>
                        <View style={styles.refTextContainer}>
                            <Text style={styles.refText}>Referência: The Centre for Vibrant Health and wellness - Breast Thermal Imaging. Disponível em: https://www.drsalter.com/breast-thermal-imaging/ </Text>
                        </View>
                        <Text style={styles.text}>                    
                            É um exame de imagem que registra a variação da temperatura cutânea. Por se tratar de um procedimento não invasivo, não expõe a pessoa à radiação, nem requer a compressão do tecido da mama.
                        </Text>
                        <Text style={styles.text}>
                            O INCA não recomenda a realização deste procedimento para rastreamento e a SBM não o menciona.
                        </Text>

                        <Text style={styles.titleText}>
                            Tomossíntese
                        </Text>
                        <View style={styles.imgContainer}>
                            <Image style={styles.img7} source={require('../../../assets/tomo.jpg')}/>
                        </View>
                        <View style={styles.refTextContainer}>
                            <Text style={styles.refText}>Referência: SMITH, A. Fundamentals of Breast Tomosynthesis: Improving the Performance of Mammography. Figura 5: Reconstructed Tomosynthesis Slices. 2008. Disponível em: http://www.hologic.ca/sites/default/files/Fundamentals%20of%20Breast%20Tomosynthesis_WP-00007.pdf </Text>
                        </View>
                        <Text style={styles.text}> 
                            É um exame 3D que permite uma melhor identificação de nódulos e lesões em mamas mais densas, pois apresenta múltiplas e finas imagens da mama obtidas a partir de diferentes ângulos, enquanto a mama permanece estática e ligeiramente comprimida, permitindo cortes finos, passíveis de serem reconstruídos pelo computador em imagens tridimensionais. Este tipo de exame aumenta a dose total de radiação ionizante recebida pelas mulheres.
                        </Text>
                        <Text style={styles.text}>
                            O INCA não recomenda a realização deste procedimento para rastreamento e a SBM não o menciona.
                        </Text>
                        <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow6(!shouldShow6)}>
                            <Text style={styles.textButton}>
                                Ocultar
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.buttonRef} onPress={() => setShouldShow6(!shouldShow6)}>
                        <Text style={styles.textOthers}>
                            Outros Exames
                        </Text>
                    </TouchableOpacity>)}
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
        color: "#ee88b6",
        marginBottom: 10
    },
    text:{
        fontSize:18,
        textAlign: "center",
        opacity: 0.7,
        marginHorizontal: 20,
        marginVertical: 10
    },
    lastText:{
        fontSize:18,
        textAlign: "center",
        opacity: 0.7,
        marginBottom: 69
    },
    img1:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.92
    },
    img2:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.85,
    },
    img3:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.85,
    },
    img4:{
        marginVertical:10,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8,
    },
    img5:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8,
        marginTop: 10
    },
    img6:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.67,
        marginVertical: 5
    },
    img7: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.51,
        marginVertical: 5
    },
    imgContainer:{
        alignItems: "center",
    },
    refTextContainer:{
        alignItems: "center",
        marginVertical: 5
    },
    refText:{
        fontSize: 10,
        textAlign: "center"
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
    textOthers: {
        fontSize: 20,
        textAlign: "center",
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
})
