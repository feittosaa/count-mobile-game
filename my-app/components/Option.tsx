import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function Option({ navigation }: any) {
  return (
    <View style={styles.box}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Test')}
      >
        <Text>a</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 40,
    marginHorizontal: 20,
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 10,
  },
});


export default Option