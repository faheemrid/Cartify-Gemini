import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const login = () => {
    setModalVisible(true);
    if (email == '') {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == '') {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('Email');
    const mPass = await AsyncStorage.getItem('Password');
    console.log(mEmail, mPass);
    if (email === mEmail && mPass === password) {
      setModalVisible(false);
      navigation.navigate('Home');
    } else {
      setModalVisible(false);
      Alert.alert('Closeing Error');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/cartfiylogo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      <CustomTextInput
        iconName="mail-outline"
        placeholder={'Enter Your Email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {badEmail === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
          Please Enter Email
        </Text>
      )}
      <CustomTextInput
        iconName="lock-closed-outline"
        placeholder={'password'}
        value={password}
        onChangeText={text => setPassword(text)}
        type={'password'}
      />
      {badPassword === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
          Enter Password
        </Text>
      )}
      <CommonButton
        title={'Login'}
        bgColor={'#ff8000ff'}
        textColor={'#fff'}
        onPress={() => {
          login();
        }}
      />
      <Text
        style={styles.newAccountText}
        onPress={() => navigation.navigate('Signup')}
      >
        Create New Account
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    color: '#000',
    alignSelf: 'center',
    marginTop: 30,
  },
  newAccountText: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
