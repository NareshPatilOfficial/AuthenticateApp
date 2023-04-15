import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
// import AuthenticatedStack from "./AuthenticatedStack";

function RootNavigationWrapper(){
    return(
        <NavigationContainer>
                <AuthStack />
                {/* <AuthenticatedStack /> */}
        </NavigationContainer>
    )
}

export default RootNavigationWrapper;