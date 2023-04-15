import { StyleSheet, View } from "react-native";
import AuthForm from "./AuthForm";
import FaltButton from "../UI/FlatButton";
import { Colors } from "../../constants/styles";

function AuthContent() {
    return (
        <View style={styles.rootContainer}>
            <AuthForm />
            <FaltButton>Create a new user</FaltButton>
        </View>
    )
}

export default AuthContent;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.primary800,
        marginHorizontal: 30,
        marginVertical: 60,
        borderRadius: 8,
        padding: 20,
        elevation: 4
    }
})