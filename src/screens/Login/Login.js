import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`username:${email}\npassword:${password}`);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={['#dc143c', '#a745c4']}>
        <Text style={styles.header}>LOGIN</Text>
        <Text style={{color: 'white'}}>Email</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
          editable
        />
        <Text style={{color: 'white'}}>Password</Text>
        <TextInput
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          style={styles.input}
          editable
        />
        <Button onPress={handleLogin} title="Login" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'white',

    fontSize: 50,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  input: {
    color: 'white',
    height: 40,
    width: 180,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
});

export {Login};
