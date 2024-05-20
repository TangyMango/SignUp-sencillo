import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Alert, Image, Dimensions } from 'react-native';

function HomeScreen() {
  return (
    <View>
      <Text>
        Home Screen
      </Text>
    </View>
  )
}

function SignUpScreen() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const usuarios = [
    { usuario: 'Gabriel', password: '275890' },
    { usuario: 'César', password: '307013' },
  ];
  
  const handleSubmit = () => {
    const usuarioEncontrado = usuarios.find(user => user.usuario === usuario && user.password === password);

    if (usuarioEncontrado) {
      Alert.alert('Usuario Autenticado :D');

    } else {
      Alert.alert('Usuario no autenticado');
    }
  };

  const handlePasswordChange = (password) => {
    if (password.length > 16) {
      Alert.alert('La contraseña no puede tener más de 16 caracteres');
    } else {
      setPassword(password);
    }
  };

  const handleUsuarioChange = (usuario) => {
    if (usuario.length > 24) {
      Alert.alert('El usuario no puede tener más de 24 caracteres');
    } else {
      setUsuario(usuario);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spot</Text>

      <View style={styles.inputContainer}>
        <View style={styles.switchLogin}>

        </View>
        <Text style={styles.title2}>Welcome to Spot!!</Text>

        <TextInput
          style={styles.TextInput}
          placeholder="User"
          placeholderTextColor='#707070'
          maxLength={24}
          TextEntry={true}
          onChangeText={handleUsuarioChange}
          value={usuario}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor='#707070'
          maxLength={16}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
        <View style={styles.ViewButton}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>

  )

}

export default function App () {
  return (
    <SignUpScreen/>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    position: 'relative'
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: 'black',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 100,

  },
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  TextInput: {
    width: '100%',
    height: 60,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4FD290',
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    marginTop: 20,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  switchLogin: {
    width: '100%',
    height: '80',
    backgroundColor: 'green',
  },
  ViewForgotPassword: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    textDecorationLine: 'underline',

  },
  ViewButton:{
    alignItems: 'center',
    width: '100%'
  },
  BackImage: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    zIndex: -1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
});