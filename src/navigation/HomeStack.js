import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DoctorChatScreen from '../components/DoctorChatScreen';
import LoginScreen from '../components/LoginScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name="DoctorChat"
        component={DoctorChatScreen}
        options={{
          headerTransparent: true,
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTransparent: true,
          headerTitle: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
