import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/WelcomeScreen";
import { Colors } from "../constants/styles";

const Stack = createNativeStackNavigator();

function AuthenticatedStack(){
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 }
            }}
        >
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
        </Stack.Navigator>
    )   
}

export default AuthenticatedStack;