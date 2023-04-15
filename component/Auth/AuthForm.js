import { View } from "react-native";
import Input from "../UI/Input";

function AuthForm() {
    return (
        <View>
            <Input
                label={'Email Address'}
                textInputConfig={{
                    keyboardType: 'email-address'
                }}
            />
        </View>
    )
}

export default AuthForm;