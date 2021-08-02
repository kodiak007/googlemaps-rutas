import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Navigator } from './src/navigator/Navigator';
import { PermissionProvider } from './src/context/PermissionsContext';


const AppState = ({ children }: any) => {
  return (
    <PermissionProvider>
      {children}
    </PermissionProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};



export default App;
