import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {BlurView} from 'expo-blur';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '../Utils/Colors';

import HomeNativeStack from './HomeNativeStack';
import InfoNativeStack from './InfoNativeStack';
import NoteNativeStack from './NoteNativeStack';
import QuizNativeStack from './QuizNativeStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const primaryColor = Colors.PRIMARY_COLOR;
  const secondaryColor = Colors.BACKGROUND_COLOR;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          //bottom: 20,
          //left: 20,
          //right: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: Platform.OS === 'android' ? 80 : 90,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              //padding: 10,
              overflow: 'hidden',
              backgroundColor: 'transparent',
            }}
          />
        ),
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons
                name="home"
                size={30}
                color={focused ? primaryColor : secondaryColor}
              />
            </View>
          ),
        }}
        name="HomeScreen"
        component={HomeNativeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons
                name="note"
                size={30}
                color={focused ? primaryColor : secondaryColor}
              />
            </View>
          ),
        }}
        name="NoteScreen"
        component={NoteNativeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons
                name="view-list"
                size={40}
                color={focused ? primaryColor : secondaryColor}
              />
            </View>
          ),
        }}
        name="QuizScreen"
        component={QuizNativeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons
                name="information"
                size={30}
                color={focused ? primaryColor : secondaryColor}
              />
            </View>
          ),
        }}
        name="InfoScreen"
        component={InfoNativeStack}
      />
    </Tab.Navigator>
  );
}
