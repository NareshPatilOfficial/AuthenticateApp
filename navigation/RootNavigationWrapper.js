import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import AuthenticatedStack from "./AuthenticatedStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import SplashLoading from "../component/UI/SplashLoading";

function RootNavigationWrapper() {
    const authCnx = useContext(AuthContext);
    const [isTryingToLogin, setIsTryingToLogin] = useState(true);

    useEffect(() => {
        const fetchTokenFromDeviceStorage = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                storedToken && authCnx.authenticate(storedToken);
                setIsTryingToLogin(false);
            } catch (error) {
                Alert.alert('Not able to loging with previous logged user');
            }
        }
        fetchTokenFromDeviceStorage();
    }, []);

    if(isTryingToLogin){
        return <SplashLoading  />;
    }

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