import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import AuthenticatedStack from "./AuthenticatedStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

function RootNavigationWrapper() {
    const authCnx = useContext(AuthContext);

    useEffect(() => {
        const fetchTokenFromDeviceStorage = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                storedToken && authCnx.authenticate(storedToken);
            } catch (error) {
                Alert.alert('Not able to loging with previous logged user');
            }
        }

        fetchTokenFromDeviceStorage();
    }, [])

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