import React, {useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import * as Device from 'expo-device'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
const ManageProfile = () =>{
    const [showFirstPage,setShowFirstPage] = useState("true")
    const [chosenJob,setChosenJob] = useState("Não Selecionado")

     const id = Constants.deviceId
     const os = Device.osName
     let day = new Date().getDate()
     
     let month = new Date().getUTCMonth() + 1
     let year = new Date().getUTCFullYear()
     let time = new Date().toTimeString()
     

    //const [os, setOs] = useState("")
    const url = "https://script.google.com/macros/s/AKfycby4yWjuRCl_HqFO7y_ufQGw9xrvHmBv_OBGYO7322yht8V1vyEcS2Ljz5Bl2fMQV5yu/exec"
     const sendData = async (url, job) => {
        
        //setType(Device.DeviceType())
        //setDeviceId(Constants.installationId)
  try{
            await fetch(url, 
            {
                method: "POST", 
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "follow",
                body: JSON.stringify({id, job ,os, day, month, year, time})
            })}catch(err){
              console.log("Erro de envio de dados: " + err)
            }
    }
    
    /*if(navigation.replace("FirstPage") && sendData()){
        console.log("Foi")
        
    }*/
        //sendData(url)
        return {url, sendData}

}

export default ManageProfile