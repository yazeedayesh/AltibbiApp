import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DoctorChatScreen = () => {
  const handleCallPress = () => {

    Alert.alert('تم التواصل مع الطبيب');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>تحدث مع الطبيب الآن</Text>

      <Text style={styles.description}>
        يمكنك الآن التواصل مع الطبيب مباشرة عبر الدردشة أو الاتصال.
      </Text>

      <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
        <Text style={styles.callButtonText}>اتصل الآن</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 40,
  },
  callButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    transition: 'background-color 0.3s ease',
  },
  callButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DoctorChatScreen;