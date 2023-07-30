import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#0077ED',
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 10,
        alignSelf: 'stretch', // adicione esta linha
    },
    headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});

export default Header;
