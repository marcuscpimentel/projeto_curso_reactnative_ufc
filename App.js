import React from 'react';
import { View, StyleSheet } from 'react-native';
import Lista from './Lista';
import Header from './Header';

const App = () => {
  

  return (
    <View style={styles.container}>
      <Header title="Atividade Curso UFC" />
      <Lista />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;