import { StyleSheet, View } from "react-native";
import AuthForm from "./AuthForm";

function AuthContent() {
    return ( 
        <View style={styles.rootContainer}>
            <AuthForm />
        </View>
    )
}

export default AuthContent;

const styles = StyleSheet.create({
    rootContainer:{
        alignItems:'center'
    }
})