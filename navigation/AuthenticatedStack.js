import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/WelcomeScreen";
import { Colors } from "../constants/styles";
import IconButton from "../component/UI/IconButton";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

const Stack = createNativeStackNavigator();

function AuthenticatedStack(){
    const authCnx = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
                headerRight: (({tintColor}) => <IconButton name={'exit'} color={tintColor} size={20} onPress={authCnx.logOut} />)
            }}
        >
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
        </Stack.Navigator>
    )   
}

export default AuthenticatedStack;