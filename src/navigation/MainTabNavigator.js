import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'; 
import QuestionsStack from './QuestionsStack'; 
import CovidScreen from '../screens/CovidScreen';
import { headerStyles, tabBarStyles } from '../styles/AppStyle';


const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions=
      {tabBarStyles}
    >
      <Tab.Screen 
        name="HomeStach" 
        component={HomeStack} 
        options={{
          headerTitle: 'Altibbi',
          headerTitleAlign: 'center',
          ...headerStyles,
        }}
      />
      <Tab.Screen 
        name="QuestionsStach" 
        component={QuestionsStack} 
        options={{
          headerTitle: 'Altibbi',
          headerTitleAlign: 'center',
          ...headerStyles,
        }}
      />
      <Tab.Screen 
        name="Covid" 
        component={CovidScreen} 
        options={{
          headerTitle: 'Altibbi',
          headerTitleAlign: 'center',
          ...headerStyles,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
