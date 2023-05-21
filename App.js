/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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
  TextInput,
  FlatList,
  Alert
} from 'react-native';

function App() {
const [modalVisible, setModalVisible] = useState(false);
const [citas, setCitas] = useState([
  {
    id:1,
    title: 'Perro de juan Pablo'
  }

]);
const [Direccion, setDirrecion] = useState('');
const [NombrePropietario, setNombredelPropietario] = useState('');
const [Email, setemail] = useState('');
const [Telefono, setTelefono] = useState('');
const handleDirrecionChange = (text) =>{
  setDirrecion(text)
}
const handleNombrePropietarioChange = (text) =>{
  setNombredelPropietario(text)
}
const handleEmailChange = (text) =>{
  setemail(text)
}
const handleTelefonoChange = (numeric) =>{
  setTelefono(numeric)
}
const handleEnviar = () => {
  // Validar campos obligatorios
  if (NombrePropietario.trim() === '') {
    Alert.alert('Error', 'El nombre del propietario es obligatorio');
    return;
  }
  const nuevaCita = {
    direccion: Direccion,
    propietario: NombrePropietario,
    email: Email,
    telefono: Telefono
  };
  setCitas([...citas, nuevaCita]);

    setDireccion('');
    setNombrePropietario('');
    setEmail('');
    setTelefono('');

    setModalVisible(false);
  // Aquí puedes continuar con la lógica de envío del formulario
  Alert.alert('Éxito', 'Formulario enviado correctamente');
};
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
      
      <Text style= {[styles.btnNuevaCita, styles.btnTextNuevaCita]}
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
              onPress={() => {
                setModalVisible(!modalVisible)
                handleEnviar
                }}>
              <Text style={styles.textStyle}>Enviar</Text>
            </Pressable>
      
      <TextInput 
      style={styles.input}
      value={NombrePropietario}
      onChangeText={handleNombrePropietarioChange}
      placeholder='Introdice el nombre del propietaro'
      />
      
      <TextInput
        style={styles.input}
        onChangeText={handleDirrecionChange}
        value={Direccion}
        placeholder='Introdice las dirrecion'
      />

      <TextInput
        style={styles.input}
        onChangeText={handleEmailChange}
        value={Email}
        placeholder='Introdice el email del propietario'
      />

        <TextInput
        style={styles.input}
        onChangeText={handleTelefonoChange}
        value={Telefono}
        placeholder="Introduce el telefono del propietario"
        keyboardType="numeric"
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
      <FlatList
        data={citas} // Pasar el array de citas como datos
        renderItem={({ item }) => (
          <Text>{item.id}</Text> // Mostrar el nombre de la cita u otros datos relevantes
        )}
        keyExtractor={(item, index) => index.toString()} // Generar un identificador único para cada elemento
      />
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
