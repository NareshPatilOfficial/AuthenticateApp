import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import AuthenticatedStack from "./AuthenticatedStack";

function RootNavigationWrapper() {
    const authCnx = useContext(AuthContext);

    return (
        <NavigationContainer>
            {
                authCnx.isAuthenticated
                    ? <AuthenticatedStack />
                    : <AuthStack />
            }
        </NavigationContainer>
    )
}

export default RootNavigationWrapper;