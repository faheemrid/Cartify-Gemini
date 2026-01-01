import {
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Loader = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 150,
            height: 150,
            margin: 20,
            backgroundColor: 'White',
            borderRadius: 20,
            padding: 35,
            justifyContent: 'center',
            alignItems: 'center',
            alignItems: 'center',
           shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            // shadowOpacity: 0.5,
            shadowRadius: 4,
            // elevation: 5,
          }}
        >
          <ActivityIndicator size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({});
