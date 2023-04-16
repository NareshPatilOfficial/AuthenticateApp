import { Alert, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";
import { useContext, useEffect, useState } from "react";
import { getWelcomeDataService } from "../services/data-service";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
    const [welcomeMessage, setWelcomeMessage] = useState();
    const authCtx = useContext(AuthContext);
    const token = authCtx.token

    useEffect(() => {
        getWelcomeDataService({ token }).then((response) => {
            setWelcomeMessage(response.data);
        }).catch(() => {
            Alert.alert('Error occured!', 'Could not get welcome message data');
        })
    }, [token]);

    return (
        <View style={styles.container}>
            <Text style={[styles.textbase, styles.title]}>
                Welcome
            </Text>
            <Text style={[styles.textbase]}>
                You are logged now!
            </Text>
            <Text>
                {welcomeMessage}
            </Text>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textbase: {
        color: Colors.primary800
    }
})