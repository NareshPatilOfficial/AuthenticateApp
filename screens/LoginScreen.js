import { useState } from "react";

import AuthContent from "../component/Auth/AuthContent";
import { logInUser } from "../services/auth-services";
import LoadingOverlay from "../component/UI/LoadingOverlay";

function LoginScreen() {
    const [authnticating, setAuthnticating] = useState(false);

    const authenticateHandler = async (email, password) => {
        setAuthnticating(true);
        await logInUser(email, password);
        setAuthnticating(false);
    }

    if (authnticating) {
        return <LoadingOverlay />
    }

    return <AuthContent isLogin onAuthenticate={authenticateHandler} />
}

export default LoginScreen;