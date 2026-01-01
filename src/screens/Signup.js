import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const signupp = () => {
    let isValid = true;
    setButtonDisabled(true);
    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setButtonDisabled(false);
        } else if (mobile.length < 11) {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == '') {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };

  const saveData = async () => {
    {
      await AsyncStorage.setItem('Name', name);
      await AsyncStorage.setItem('MobileNo', mobile);
      await AsyncStorage.setItem('Email', email);
      await AsyncStorage.setItem('Password', password);
      navigation.goBack();
      Alert.alert(':Yes!');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/cartfiylogo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>Create New Account</Text>
      <CustomTextInput
        iconName="person-circle-outline"
        placeholder={'Enter Your Name'}
        value={name}
        onChangeText={text => setName(text)}
      />
      {badName === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
          Please Enter Name
        </Text>
      )}
      <CustomTextInput
        placeholder={'Enter MobileNo'}
         iconName="phone-portrait-outline"
        value={mobile}
        onChangeText={text => setMobile(text)}
        keyboardType={'number-pad'}
      />
      {badMobile === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
          Please Enter MobileNo
        </Text>
      )}
      <CustomTextInput
        placeholder={'Enter Your Email'}
        iconName="mail-outline"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {badEmail === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
          Please Enter Email
        </Text>
      )}
      <CustomTextInput
        placeholder={'Enter Password'}
        iconName="lock-closed-outline"
        value={password}
        onChangeText={text => setPassword(text)}
        //type={'password'}
      />
      {badPassword === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
          Enter Password
        </Text>
      )}
      <CustomTextInput
        placeholder={'ConfirmPassword'}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
          iconName="lock-closed-outline"
        //type={'password'}
      />
      {badConfirmPassword === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
          Enter Password
        </Text>
      )}
      <CommonButton
        title={'Signup'}
        bgColor={buttonDisabled?'#ff8000ff':'#000'}
        textColor={'#fff'}
        onPress={() => {
          signupp();
        }}
        disabled={buttonDisabled}
      />
      <Text style={styles.newAccountText} onPress={() => navigation.goBack()}>
        Already have an account?
      </Text>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 80,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    color: '#000',
    alignSelf: 'center',
    marginTop: 20,
  },
  newAccountText: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
    marginBottom: 50,
  },
});
