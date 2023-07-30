import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';


const Lista = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = () => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setQuery(text)}
        value={query}
        placeholder="Search"
      />
      {data ? (
        <ScrollView>
          {data.hits.map((item, index) => (
            <View key={`${item.objectID}-${index}`} style={styles.itemstyle}>
              <Text style={styles.itemtitle}>Title: {item.title}</Text>
              <Text>Author: {item.author}</Text>
              <Text>URL: {item.url}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#444444', 
      width: '100%',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      paddingLeft: 20,
      backgroundColor: '#FAFAFA',
      width: '100%',
      borderRadius: 10,
    },
    itemstyle: {
        backgroundColor: '#FAFAFA',
        margin: 5,
        padding: 10,
        borderRadius: 7,
    },
    itemtitle: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    }
  });
  

export default Lista;
