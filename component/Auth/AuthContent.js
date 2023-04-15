import { StyleSheet, View } from "react-native";
import AuthForm from "./AuthForm";
import FaltButton from "../UI/FlatButton";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function AuthContent({ isLogin }) {
    const navigation = useNavigation();

    const [credentialValid, setCredentialValid] = useState({
        email: true,
        confirmEmail: true,
        password: true,
        confirmPassword: true
    });

    const switchAuthModeHandler = () => {
        isLogin ? navigation.replace('SignUp')
            : navigation.replace('Login'); // by relplace method we replace component of given name
    }

    const onSubmitHandler = ({ email, confirmEmail, password, confirmPassword }) => {
        email = email.trim();
        confirmEmail = confirmEmail.trim();
        password = password.trim();
        confirmPassword = confirmPassword.trim();

        const isEmailValid = email.inclues('@');
        const isConfirmEmailValid = confirmEmail === email
        const isPasswordValid = password.length > 6;
        const isConfirmPasswordValid = confirmPassword === password;

        setCredentialValid({
            email: isEmailValid,
            confirmEmail: isConfirmEmailValid,
            password: isPasswordValid,
            confirmPassword: isConfirmPasswordValid
        })
    }

    return (
        <View style={styles.rootContainer}>
            <AuthForm
                isLogin={isLogin}
                credentialValid={credentialValid}
                onSubmit={onSubmitHandler}
            />
            <FaltButton
                onPress={switchAuthModeHandler}
            >
                {isLogin ? 'Create a new user' : 'Log in instead'}
            </FaltButton>
        </View>
    )
}

export default AuthContent;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.primary800,
        marginHorizontal: 30,
        marginVertical: 60,
        borderRadius: 8,
        padding: 20,
        elevation: 4
    }
})