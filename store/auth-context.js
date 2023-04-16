import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => { },
    logOut: () => { }
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();

    const authenticate = (token) => {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    const logOut = () => {
        setAuthToken();
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logOut: logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;