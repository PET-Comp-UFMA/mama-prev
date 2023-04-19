import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import SearchDropdown from "../components/SearchDropdown";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ManageProfileController} from './ManagePrileController/index'
import { useNavigation } from "@react-navigation/native";

//TODO: Resolver envio de body com o botão pular

let job = require("../../jobs.json");
const jobArr = [...job];
//AsyncStorage.clear()
const FirstPage = () => {
  const navigation = useNavigation();
  
  const [searching, setSearching] = useState(false);
  const [jobs] = useState(jobArr);
  const [filtered, setFiltered] = useState(jobs);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [showFirstPage, setShowFirstPage] = useState("true")
  const [chosenJob, setChosenJob] = useState("Não selecionado")
  const [job, setJob] = useState("")
  const {getController} = ManageProfileController();
  const {url, sendData} = getController;
  
  const onSearch = (text) => {
    if (text) {
      setSearching(true);
      setValue(text);
      setDisabled(false)
      
      const lowerText = text.toLowerCase();

      const tempList = jobs.filter((item) => {
        let lowerItem = item.name.toLowerCase();
        if (lowerItem.match(lowerText)) {
          
          return item;
        }
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(jobs);
      setValue("");
      setDisabled(true)
    }
  };
  async function setData(){
    setShowFirstPage("false")
    try {
      
      await AsyncStorage.setItem('@show', showFirstPage)

    } catch (e) {
      console.log("setDataError: "+ e)
    }
  }
 
  async function setStorageJob(value){
    if (value!==''){
      try {
        //Delete
        console.log('insideFunction: ', value)
        await AsyncStorage.setItem('@job', value)
      } catch (e) {
        console.log("setDataError: "+ e)
      }
    }
   
  }
  async function getStorageJob(){
      try {
       
       const data = await AsyncStorage.getItem('@job')
       if (data!==null){
         setJob(data);
       }
      } catch (e) {
        console.log("setDataError: "+ e)
      }
   
  }
   
   const handleSkip = ()=>{
    setData()
    setStorageJob(value);
     getStorageJob().then(
       () =>job ? sendData(url, job===''?"Não Selecionado":job): null
       )

    navigation.navigate("Homepage")
   }
  const handleContinue = () =>{
    
     setData()
     //Delete
     setStorageJob(value);
     getStorageJob().then(
       () =>job ? sendData(url, job===''?"Não Selecionado":job): null
       )
       console.log('job:', job);
        
    navigation.navigate("Homepage")
    }
    const removeFew = async () => {
      const keys = ['@show', 'showfirstPage','@job']
      try {
        await AsyncStorage.multiRemove(keys)
      } catch(e) {
        // remove error
      }
    
      console.log('Done')
    }
    //removeFew()
    const getData = async () => {
      try {
        const data = await AsyncStorage.getItem('@show')
        if(data!==null){
          setShowFirstPage("false")
        }
        
      } catch(e) {
       console.log("getDataError: " + e)
      }
    }

      getData()
      getStorageJob();
      useEffect(()=>{
        setStorageJob(value);
        job ? sendData(url, job===''?"Não Selecionado":job): null
       
      },[job])
  if (showFirstPage==="false"){
   
    navigation.navigate("Homepage")
  }
  return (
    
    <ScrollView contentContainerStyle={styles.container}>

      <StatusBar hidden={true} />
      <View>
        <Text style={styles.welcomeText}> BEM - VINDO(A) AO MAMAPREV. </Text>
      </View>
      <View>
        <Text style={styles.headerText}>
          
          Este é um aplicativo voltado aos profissionais da saúde. Por favor,
          selecione sua categoria profissional.
        </Text>
      </View>
      <TextInput
        onChangeText={onSearch}
        style={styles.textInput}
        placeholder=" Digite sua Categoria Profissional"
        placeholderTextColor="#EB6F9E"
        value={value}
      />
      {searching && (
       <KeyboardAvoidingView style={{flex:1}}behavior="padding" enabled>
        <SearchDropdown
            filtered={filtered}
            setValue={setValue}
            setSearching={setSearching}
          />
       </KeyboardAvoidingView>
        
      
      )}
     
     <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonSkip}
          onPress={handleSkip}
        >
           
            <Text  style={styles.textSkip}>Pular</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={disabled?styles.buttonContinueDisabled:styles.buttonContinue}
          onPress={handleContinue}
          disabled={disabled}
        > 
            <Text style={styles.textContinue}>Continuar</Text> 
        </TouchableOpacity>
      </View>
      
     
    </ScrollView>
   
  );
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#ee88b6",
  },
  autocompleteContainer: {
    position: "absolute",
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsImg: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.1,

    marginHorizontal: 15,
  },
  buttonsEach: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonOther: {
    backgroundColor: "#ee88b6",
    marginTop: 10,
    borderRadius: 5,
    padding: 5,
  },
  textButton: {
    fontSize: 10,
    textAlign: "center",
    color: "#ffffff",
  },
  textInput: {
    backgroundColor: "#fff",
    width: "85%",
    height: 85,
    borderRadius: 10,
    borderWidth: 5,
    paddingLeft: 10,
    borderColor: "#EB6F9E",
    borderStyle: "solid",
    color: "#EB6F9E",
    fontWeight: "400",
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: -200,
    width: "100%",
  },
  buttonSkip: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    width: 121,
    height: 56,
    
  },
  buttonContinue: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    width: 121,
    height: 56,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#EB6F9E",
    backgroundColor: "#EB6F9E",
    
  },
  buttonContinueDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    width: 121,
    height: 56,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#fce7ef",
    backgroundColor: "#fce7ef",
 
  },
  textContinue: {
      color: "#fff"
  },
  textSkip: {
      color: "#EB6F9E"
  },

  option: {},
});

export default FirstPage;
