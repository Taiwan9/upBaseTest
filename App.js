import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  const [numeroCartao, getNumeroCartao] = useState('')
  const [nome, getNome] = useState('')
  const [cpf, getCpf] = useState('')
  const [validade, getValidade] = useState('')
  const [cvv, getCvv] = useState('')

  const pagamento = ()=>{
    alert('Pagamento efetuado com sucesso')
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <MaterialIcons name='arrow-back' size={35} style={ styles.icon} />
        <View>
        <Text style ={{color:'white', textAlign:'center', fontSize:23, width:'60%'}}>Pagamento</Text>
        </View>
      </SafeAreaView>

      <View style={styles.nav}>
      <Text style={styles.textCard}>Insira os dados para concluir a contratação via cartão de crédito</Text>
      <StatusBar hidden />

      <TextInput placeholder='Numero do cartao' style={styles.textInput} onChangeText={text => getNumeroCartao(text)}/>
      <TextInput placeholder='Nome do titular' style={styles.textInput} onChangeText={text => getNome(text)}/>
      <TextInput placeholder='CPF do titular' style={styles.textInput} onChangeText={text => getNome(text)}/>
      <TextInput placeholder='Validade' style={styles.textInput} onChangeText={text => getNome(text)}/>
      <TextInput secureTextEntry={true} placeholder='Código de segurança' style={styles.textInput} onChangeText={text => getNome(text)}/>

      <TouchableOpacity onPress={()=>pagamento()} style={styles.btnPagamento}>
        <Text style ={{color:'white', textAlign:'center', fontSize:20, fontWeight:'400'}}>Pagar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnVoltar}>
        <Text style ={{color:'#07689f', textAlign:'center', fontSize:20, fontWeight:'400'}}>Voltar</Text>
      </TouchableOpacity>
      </View>
      <NavigationContainer style={styles.footer}>
        <Routes></Routes>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor: '#f8f8f8'
  },
  nav: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    backgroundColor: '#f8f8f8',
  },
  header:{
    width:'100%',
    height:70,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#006557'
  },
  icon:{
    position:'absolute',
    left:16,
    color:'white'
  },
  textCard:{
    padding:20,
    fontWeight:'600',
    fontSize:17,
    color:'#006557'
  },
  textInput:{
    width: '100%',
    height: 65,
    backgroundColor: 'white',
    marginBottom:1,
    paddingLeft: 25,
    bottom: 15
  },
  btnPagamento:{
    width:'90%',
    height:60,
    backgroundColor:'#07689f',
    justifyContent:'center',
    borderRadius:8
  },

  btnVoltar:{
    width:'40%',
    height:90,
    justifyContent:'flex-start',
    margin:10,
    color:'#07689f',
    top:8,

  },
});
