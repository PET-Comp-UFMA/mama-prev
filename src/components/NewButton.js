import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const NewButton = ({ textoPrincipal, navigation}) => {
    return(
        <TouchableOpacity style = {styles.buttonsEach} onPress = {navigation}>
                <Text style = {styles.textButton}>{textoPrincipal}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonsEach: {
        width: "80%",
        backgroundColor: "#ee88b6",
        borderRadius: 5,
        padding: 20,
        marginBottom: 10
    },
    textButton: {
        fontSize: 14,
        textAlign: "center",
        color: "#ffffff"
    }
});

export default NewButton;