import { StyleSheet, View } from "react-native";
import Input from "../UI/Input";
import { Colors } from "../../constants/styles";
import Button from "../UI/Button";

function AuthForm() {
    return (
        <View style={styles.formContainer}>
            <Input
                label={'Email Address'}
                keyboardType={'email-address'}
            />
            <Input
                label={'Confirm Email Address'}
                keyboardType={'email-address'}
            />
            <Input
                label={'Password'}
                secure
            />
            <Input
                label={'Confirm Password'}
                secure
            />
            <Button>SignUp</Button>
        </View>
    )
}

export default AuthForm;

const styles = StyleSheet.create({
    formContainer: {
    }
})