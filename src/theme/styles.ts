// src/theme/styles.ts
import { StyleSheet } from 'react-native';

const lightTheme = {
  container: {
    backgroundColor: '#d0d0c0',
  },
  text: {
    color: '#242c40',
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  tabBarActiveTintColor: '#000',
  tabBarInactiveTintColor: '#888',
  header: {
    backgroundColor: '#fff',
    color: '#000',
  },
};

const darkTheme = {
  container: {
    backgroundColor: '#000',
  },
  text: {
    color: '#d0d0c0',
  },
  tabBar: {
    backgroundColor: '#000',
  },
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#bbb',
  header: {
    backgroundColor: '#000',
    color: '#fff',
  },
};

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export { lightTheme, darkTheme, commonStyles };
