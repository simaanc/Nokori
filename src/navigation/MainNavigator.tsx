// src/navigation/MainNavigator.tsx
import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LibraryScreen from '../screens/LibraryScreen';
import BrowseScreen from '../screens/BrowseScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { lightTheme, darkTheme } from '../theme/styles';

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string): keyof typeof Ionicons.glyphMap => {
  switch (routeName) {
    case 'Library':
      return 'library-outline';
    case 'Browse':
      return 'globe-outline';
    case 'History':
      return 'time-outline';
    case 'Search':
      return 'search-outline';
    case 'Settings':
      return 'settings-outline';
    default:
      return 'help-outline'; // Fallback icon
  }
};

function MainNavigator() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: theme.header.backgroundColor,
          },
          headerTintColor: theme.header.color,
          tabBarActiveTintColor: theme.tabBarActiveTintColor,
          tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
          tabBarStyle: {
            backgroundColor: theme.tabBar.backgroundColor,
          },
          tabBarIcon: ({ color, size }) => {
            const iconName = getIconName(route.name);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
