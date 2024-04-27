import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import batLogo from './assets/bat-logo.png'
import batLogoYellow from './assets/bat-logo-yellow.png'

export default function App() {

  const [isActive, setisActive] = useState(true)

  function handleLayout(){
    
    setisActive((oldValue:Boolean) =>{

      return !oldValue;
    })
  }

  return (

    <View style={isActive ? styles.container : styles.form}>
      <Image 
        source={batLogo}
        style={{width:300, height:200,
        display: isActive ? 'flex' : 'none'
        }}/>

      <TouchableOpacity onPress={handleLayout}>
        <View style={{
           borderColor:'black',
           borderWidth:2,
           width:300,
           height:80,
           backgroundColor:'grey',
           borderRadius:40,
           display: isActive ? 'flex' : 'none'}}>
          
          <Text style={{
            fontSize:28,
            alignSelf:'center',
            fontWeight:'bold',
            color:'yellow',
            marginTop:20}}>
            ATIVAR BAT-SINAL
          </Text>

        </View>
      </TouchableOpacity>

      <View style={styles.form}>
      
      <TouchableOpacity onPress={handleLayout}>

      
      <Image 
        source={batLogoYellow}
        style=
        {{width:120,
         height:100,
        alignSelf:'flex-start',
        marginTop:80,
        marginStart:20,
        display: isActive ? 'none' : 'flex'}}/>

        </TouchableOpacity>
      </View>
      

      <Text style={{marginStart:24, marginBottom:10, fontWeight:'bold', display: isActive ? 'none' : 'flex'}}>
        Qual seu nome?
      </Text>
      
      <TextInput style={{
         width:350,
         height:50,
         alignSelf:'center',
         borderRadius:10,
         textAlign:'center',
         borderColor:'black',
         borderWidth:1,
         backgroundColor:'#CBCBCB',
         display: isActive ? 'none' : 'flex'}}
         placeholder='Digite seu nome e sobrenome.'/>

      <Text style={{marginStart:24, marginBottom:10, marginTop:10, fontWeight:'bold', display: isActive ? 'none' : 'flex'}}>
        Qual endereço da ocorrencia?
      </Text>
      
      <TextInput style={{
         width:350,
         height:50,
         alignSelf:'center',
         borderRadius:10,
         textAlign:'center',
         borderColor:'black',
         borderWidth:1,
         backgroundColor:'#CBCBCB',
         display: isActive ? 'none' : 'flex'}}
         placeholder='Rua, número e complemento.'>
          
      </TextInput>

      <Text style={{marginStart:24, marginBottom:10, marginTop:10, fontWeight:'bold', display: isActive ? 'none' : 'flex'}}>
        Digite um breve resumo da ocorrencia.
      </Text>
      
      <TextInput style={{
        
         width:350,
         height:50,
         alignSelf:'center',
         borderRadius:10,
         textAlign:'center',
         borderColor:'black',
         borderWidth:1,
         backgroundColor:'#CBCBCB',
         display: isActive ? 'none' : 'flex',
         alignItems:'center'}}
         placeholder='Exemplo: roubo, agressão, tiroteio e etc...'>
          
      </TextInput>

      <TouchableOpacity onPress={() => Alert.alert("Seu sinal foi enviado.",
       "Aguarde o cavaleiro das trevas. 🦇🌕")}>
        <View style={{
          marginTop:40,
           alignSelf:'center',
           borderColor:'black',
           borderWidth:2,
           width:300,
           height:80,
           backgroundColor:'grey',
           borderRadius:40,
           display: isActive ? 'none' : 'flex'}}>
          
          <Text style={{
            fontSize:28,
            alignSelf:'center',
            fontWeight:'bold',
            color:'yellow',
            marginTop:20}}>
            ENVIAR
          </Text>

        </View>
      </TouchableOpacity>

      <StatusBar style="dark" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{
    backgroundColor: 'white',
    flexDirection:'column',
  }
});
