import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Linking, ScrollView} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="chevron-left" size={50} color="white" />
                </TouchableOpacity>
                <Text style={styles.textNavigation}> Sobre o Aplicativo</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Apresentação</Text>
                    <Text style={styles.text}>
                        O câncer de mama é uma doença que vem apresentando alta incidência em todo o mundo. Para o triênio 2020-2022 estima-se mais de 66 mil novos casos da doença no Brasil.
                    </Text>
                    <Text style={styles.text}>    
                        Diante disso, o trabalho dos profissionais de saúde é fundamental para auxiliar em uma possível redução das taxas de incidência e mortalidade dessa doença. Assim, os profissionais precisam estar aptos para prestarem assistência de qualidade.
                    </Text>
                    <Text style={styles.text}>
                        Neste contexto o aplicativo MAMAprev foi desenvolvido com o intuito de auxiliar os profissionais da saúde que atuam no cuidado das pessoas com mama, por meio de uma ferramenta informativa segura e baseada em evidências científicas, no fortalecimento das ações de prevenção do câncer de mama oportunamente, ou seja, aproveitando a presença da mulher no serviço de saúde independente do motivo, para informá-la sobre a doença e procedimentos de triagem, fatores de risco, rastreamento, favorecendo o diálogo a respeito da realização dos exames para detecção precoce e rastreamento do câncer de mama.
                    </Text>

                    <Text style={styles.titleText}>Sobre Nós </Text>
                    <Text style={styles.text}>    
                        Este aplicativo é produto de uma dissertação de mestrado do Programa de Pós-Graduação em Saúde e Tecnologia (PPGST) da Universidade Federal do Maranhão (UFMA) campus avançado Imperatriz, tendo como pesquisadoras responsáveis a professora doutora Adriana Gomes Nogueira Ferreira (adriana.nogueira@ufma.br) e a mestranda Rafaela Cristina Araújo Gomes (rca.gomes@discente.ufma.br). 
                    </Text>
                    <Text style={styles.text}>
                        A pesquisa faz parte de um projeto financiado pela Fundação de Amparo à Pesquisa e ao Desenvolvimento Científico e Tecnológico do Maranhão (FAPEMA), intitulado “PREVENÇÃO SECUNDÁRIA DO CÂNCER DE MAMA: USO DE APLICATIVO MÓVEL PARA CAPACITAÇÃO DE ENFERMEIROS”.
                    </Text>
                    <View style={styles.imConteiner}>
                        <Image style={styles.img} source={require('../assets/ufma.png')}/>
                        <Image style={styles.img} source={require('../assets/posgrad.png')}/>
                        <Image style={styles.img2} source={require('../assets/fapema.png')}/>
                    </View>
                    <Text style={styles.titleText}>
                        Referências
                    </Text>
                    <Text style={styles.text}>
                        AMERICAN COLLEGE OF RADIOLOGY (ACR). Atlas BI-RADS do ACR: sistema de laudos e registro de dados de imagem da mama - 2 ed. São Paulo: Colégio Brasileiro de Radiologia, 2016. ISBN 978-85-786-8249-1.
                    </Text>
                    <TouchableOpacity style={styles.buttonRef} onPress={() => Linking.openURL('https://www.acr.org/Clinical-Resources/Reporting-and-Data-Systems/Bi-Rads')}>
                        <Text style={styles.textButton}>
                            Acesse Aqui
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>
                        INSTITUTO NACIONAL DO CÂNCER JOSÉ ALENCAR GOMES DA SILVA (INCA). Diretrizes para a detecção precoce do câncer de mama no Brasil – Rio de Janeiro, 2015. ISBN 978-85-7318-274-3.
                    </Text>
                    <TouchableOpacity style={styles.buttonRef} onPress={() => Linking.openURL('https://www.inca.gov.br/sites/ufu.sti.inca.local/files//media/document//diretrizes_deteccao_precoce_cancer_mama_brasil.pdf')}>
                        <Text style={styles.textButton}>
                            Acesse Aqui
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>
                        MOREIRA, C. B.; DAHINTEN, V. S.; HOWARD, A. F.; FERNANDES, A. F. C. The Revised Champion’s Health Belief Model Scale: Predictive Validity Among Brazilian Women. SAGE Open Nursing, v. 6, p. 1-11, 2020. DOI: 10.1177/2377960820940551
                    </Text>
                    <TouchableOpacity style={styles.buttonRef} onPress={() => Linking.openURL('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7774489/')}>
                        <Text style={styles.textButton}>
                            Acesse Aqui
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>
                        NATIONAL CANCER INSTITUTE. Breast Cancer Risk Assessment Tool.
                    </Text>
                    <TouchableOpacity style={styles.buttonRef} onPress={() => Linking.openURL('https://bcrisktool.cancer.gov/calculator.html')}>
                        <Text style={styles.textButton}>
                            Acesse Aqui
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>
                        PAIVA, J. L. F. Risco de Câncer de Mama na população brasileira. 2019. 56f. Dissertação (Mestrado Profissional em Ciências Aplicadas à Saúde) – Universidade do Vale do Sapucaí, Pouso Alegre, 2019.
                    </Text>
                    <TouchableOpacity style={styles.buttonRef} onPress={() => Linking.openURL('http://www.univas.edu.br/mpcas/docs/dissertacoes/89.pdf')}>
                        <Text style={styles.textButton}>
                            Acesse Aqui
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>
                        SOCIEDADE BRASILEIRA DE MASTOLOGIA (SBM). Câncer de Mama: Consenso da Sociedade Brasileira de Mastologia – Regional Piauí. 2017.
                    </Text>
                    <TouchableOpacity style={styles.buttonRef} onPress={() => Linking.openURL('https://www.sbmastologia.com.br/medicos/wp-content/uploads/2018/03/C%C3%A2ncer-de-Mama-Consenso-da-SBM-Regional-Piau%C3%AD-2017.pdf')}>
                        <Text style={styles.textButton}>
                            Acesse Aqui
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
    },
    textNavigation:{
        fontSize: 24,
        color: "#ffffff"
    },
    textContainer:{
        alignItems: "center",
    },
    titleText:{
        fontSize:24,
        fontWeight: "bold",
        textAlign: "center",
        width: 298,
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
    imConteiner:{
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 10,
    },
    img:{
        width: 70,
        height: 70,
        marginHorizontal: 5
    },
    img2:{
        width: 195,
        height: 70
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
    backImg:{
        width: 40,
        height: 40
    }
})
