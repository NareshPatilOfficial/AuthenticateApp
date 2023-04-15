import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

function AuthenticatedStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
        </Stack.Navigator>
    )   
}

export default AuthenticatedStack;