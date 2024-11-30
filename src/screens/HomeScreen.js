import React from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const fadeIn = new Animated.Value(0);
  const navigation = useNavigation();

 // Animation
  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Background For all Screen*/}
      <View style={styles.background}></View>

      <Animated.View style={[styles.welcomeContainer, { opacity: fadeIn }]}>
        <Text style={styles.welcomeText}>أهلاً بك في تطبيق الطبي!</Text>
        <Text style={styles.subtitleText}>استعد لصحة أفضل كل يوم!</Text>
      </Animated.View>

      <View style={styles.buttonContainer}>
        {/* Button Talk To Doctor */}
        <TouchableOpacity 
          style={[styles.button, styles.leftButton]} 
          onPress={() => navigation.navigate('DoctorChat')}
        >
          <Text style={styles.buttonText}>تحدث مع طبيب الآن</Text>
        </TouchableOpacity>

        {/* Button LogIn */}
        <TouchableOpacity 
          style={[styles.button, styles.rightButton]} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>تسجيل دخول</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#4ca',
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    zIndex: -1,
  },
  welcomeContainer: {
    position: 'absolute',
    top: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  subtitleText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  button: {
    width: 150,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  leftButton: {
    backgroundColor: '#3498db',
  },
  rightButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;