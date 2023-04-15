import { useState } from "react";
import AuthContent from "../component/Auth/AuthContent";
import { createUser } from "../services/auth-services";
import LoadingOverlay from "../component/UI/LoadingOverlay";

function SignUpScreen() {
    const [authnticating, setAuthnticating] = useState(false);

    const authenticateHandler = async (email, password) => {
        setAuthnticating(true);
        await createUser(email, password);
        setAuthnticating(false);
    }

    if (authnticating) {
        return <LoadingOverlay />
    }

    return <AuthContent onAuthenticate={authenticateHandler} />
}

export default SignUpScreen;