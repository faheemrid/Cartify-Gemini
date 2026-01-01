import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('Login');
      getData();
    }, 4000);
  }, []);

  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        showHideTransition={'fade'}
      />
      <Image
        source={require('../assets/cartfiylogo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>Cartfiy</Text>
      <Text style={styles.subTitle}>Version 1.0</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fd760071',
  },
  logo: {
    width: 180,
    height: 180,
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 5,
    color: '#000',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: '#000',
  },
});
