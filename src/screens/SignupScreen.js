import React, { useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3> Signup for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {state.errorMessage
                ? <Spacer>
                    <Text style={styles.error}>
                        {state.errorMessage}
                    </Text>
                </Spacer>
                : null}
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => signup({ email, password })}
                />
            </Spacer>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    error: {
        fontSize: 16,
        color: 'red'
    }
})

export default SignupScreen;