import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { Colors } from "../constants/styles";

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 }
            }}
        >
            <Stack.Screen name='Login' options={{ title: 'Log In' }} component={LoginScreen} />
            <Stack.Screen name='SignUp' options={{ title: 'Sign Up' }} component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;