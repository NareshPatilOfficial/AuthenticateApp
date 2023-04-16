import { useState, useContext } from "react";
import AuthContent from "../component/Auth/AuthContent";
import { createUser } from "../services/auth-services";
import LoadingOverlay from "../component/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { Alert } from "react-native";

function SignUpScreen() {
    const [authnticating, setAuthnticating] = useState(false);
    const authCnx = useContext(AuthContext);

    const authenticateHandler = async (email, password) => {
        setAuthnticating(true);
        try {
            const response = await createUser(email, password);
            authCnx.authenticate(response.idToken);
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log you in. Please check your credentials or try again later!'
            );
        }
        setAuthnticating(false);
    }

    if (authnticating) {
        return <LoadingOverlay />
    }

    return <AuthContent onAuthenticate={authenticateHandler} />
}

export default SignUpScreen;