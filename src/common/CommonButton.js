import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CommonButton = ({ onPress, bgColor, title, textColor,disabled,iconName }) => {
  return (
    <View>
      <TouchableOpacity
      disabled={disabled}
        style={{
          backgroundColor: bgColor,
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={{ color: textColor, fontSize: 20, fontWeight: '600' }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
