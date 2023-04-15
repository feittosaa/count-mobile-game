import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

function Home() {
    return (
        <ScrollView>
            <View>
                <Title>Home</Title>
            </View>
        </ScrollView>
    )
}
const Title = styled.Text`
  color: red;
  text-align: center;
  font-size: 32px;
`;

export default Home