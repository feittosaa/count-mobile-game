import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native';

// TopBox for ios screen top margin
function TopBox() {
    return (
        <View>
            <Box>
            </Box>
        </View>
    )
}
const Box = styled.View`
    margin-top: 50px;
`;


export default TopBox