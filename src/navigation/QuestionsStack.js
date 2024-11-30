import { createStackNavigator } from '@react-navigation/stack';
import QuestionsScreen from '../screens/QustionsScreen';
import QuestionDetailScreen from '../components/QuestionDetailScreen';

const Stack = createStackNavigator();

function QuestionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Questions"
        component={QuestionsScreen}
        options={{
            tabBar: () => null, 
            headerShown: true,
            headerTransparent: true, 
            headerTitle: () => null,
          }}
      />
      <Stack.Screen
        name="QuestionDetail"
        component={QuestionDetailScreen}
        options={{
            tabBar: () => null,
            headerLeft: undefined, 
            headerTitle: () => null, 
          }}
      />
    </Stack.Navigator>
  );
}

export default QuestionsStack;