/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  Image,
  Pressable,
  TextInput
} from 'react-native';




function App(): JSX.Element {
const [modalVisible, setModalVisible] = useState(false);
const [text, onChangeText] = React.useState('');
const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView style={styles.contendor}>
      <Text
      style={styles.titulo}
      >Administracion de citas {''}
      </Text>
      <Text
      style = {styles.subtitulo}
      >Veterinaria
      </Text>
      
      <Text style= {[styles.btnNuevaCita,styles.btnTextNuevaCita]}
      >Nueva Cita</Text>
      
      <Modal
      animationType='slide'
      onDismiss={() => console.log('close')}
      onShow={() => console.log('show')}
      transparent
      visible={modalVisible}  
      >
        <View
        style = {styles.modal1}
        >
          <View
          style = {styles.modal2}
          >
            <View
            style = {styles.modal3}
            >
        
      <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Enviar</Text>
            </Pressable>
            
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            
            placeholder='Introdice el nombre del paciente'/>

      <TextInput 
      style={styles.input}
      onChangeText={onChangeText}
      
      placeholder='Introdice el nombre del propietaro'/>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        
        placeholder='Introdice el email del propietario'
      />

        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Introduce el telefono del propietario"
        keyboardType="numeric"
      /> 

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        
        placeholder='Introdice los sintomas'
      />
            </View>

          </View>

        </View>

        
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Formulario</Text>
      </Pressable>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contendor:{
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  subtitulo:{
    fontSize: 25, 
    color: '#9214D5',
    textAlign: 'center',
    fontWeight: '600'

  },
  titulo:{
    fontSize: 30,
    color: '#1483D5',
    fontWeight: '900',
    textAlign: 'center',
    margin: 20
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius:10
  },
  btnTextNuevaCita:{
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  modal1:{
    flex: 1,
    backgroundColor: 'rgba(1,1,1 0.5', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal2:{
    height: '80%',
    width: '90%', 
    backgroundColor: '#FFF'
  },
  modal3:{
    height: 45,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 325
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    
    
  },
  separator: {
    width: 10, // Ajusta el ancho del separador según tus necesidades
  }
});

export default App;
