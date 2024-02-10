import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import Home from "../screens/Home";
import Test from "../screens/Test";

const Stack = createNativeStackNavigator<StackList>();

export type StackList = {
    Home: undefined;
    Test: undefined;
}

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Home"}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Test" component={Test} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes