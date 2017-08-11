// Place code here for iOS

// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  // Wrap multiple tags in a View tag
  // When you use a ScrollView you must add a style property of 'flex: 1' to your root view element
  // otherwise the ScrollView element will bounce back.
  <View style={{ flex: 1 }}>
    <Header headerText='Albums' />
    <AlbumList />
  </View>
);

// Render it to the device
// 'albums' must be the project name
AppRegistry.registerComponent('albums', () => App);
