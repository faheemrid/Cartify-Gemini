import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';

const CustomTextInput = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  keyboardType,
  iconName,
  type,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={28} color="#555" />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={text => onChangeText(text)}
        secureTextEntry={type ? true : false}
        keyboardType={keyboardType ? keyboardType : 'default'}
        style={styles.input}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#000',
    alignSelf: 'center',
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    marginLeft: 10,
  },
});
