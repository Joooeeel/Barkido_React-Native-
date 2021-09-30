import React from 'react';
import Provider from './provider';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
//MENU IMPORTS

// import Menu from './Components/Menu/menu';
import Menu from './Components/Menu/config-menu'

export default function App() {

  const color = useColorScheme();



  return color == 'light' ? (
    <AppearanceProvider>
      <Provider>
        <Menu />
      </Provider>
    </AppearanceProvider>
  ) : <AppearanceProvider>
    <Provider>
      <Menu />
    </Provider>
  </AppearanceProvider>
}