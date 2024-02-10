import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import Option from '../components/Option';
import TopBox from '../components/TopBox';

function Home() {
    return (
        <ScrollView>
            <TopBox />
            <View>
                <Title>Home</Title>
                <Option />
            </View>
        </ScrollView>
    )
}
const Title = styled.Text`
  color: green;
  text-align: center;
  font-size: 32px;
`;

export default Home