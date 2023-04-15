import { StyleSheet, View } from "react-native";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useState } from "react";

function AuthForm({ isLogin, credentialValid, onSubmit }) {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const inputChangeTextHandler = (field, value) => {
        switch (field) {
            case 'email':
                setEmail(value);
                break;
            case 'confirmEmail':
                setConfirmEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    }

    const submitHandler = () => {
        onSubmit({
            email: email,
            password: password,
            confirmEmail: confirmEmail,
            confirmPassword: confirmPassword
        })
    }

    return (
        <View style={styles.formContainer}>
            <Input
                label={'Email Address'}
                keyboardType={'email-address'}
                value={email}
                onChangeText={inputChangeTextHandler.bind(this, 'email')}
                isValid={credentialValid.email}
            />
            {!isLogin && <Input
                label={'Confirm Email Address'}
                keyboardType={'email-address'}
                value={confirmEmail}
                onChangeText={inputChangeTextHandler.bind(this, 'confirmEmail')}
                isValid={credentialValid.confirmEmail}
            />}
            <Input
                label={'Password'}
                secure
                value={password}
                onChangeText={inputChangeTextHandler.bind(this, 'password')}
                isValid={credentialValid.password}
            />
            {!isLogin && <Input
                label={'Confirm Password'}
                secure
                value={confirmPassword}
                onChangeText={inputChangeTextHandler.bind(this, 'confirmPassword')}
                isValid={credentialValid.confirmPassword}
            />}
            <Button
                onPress={submitHandler}
            >
                {isLogin ? 'Log in' : 'Sign Up'}
            </Button>
        </View>
    )
}

export default AuthForm;

const styles = StyleSheet.create({
    formContainer: {
    }
})