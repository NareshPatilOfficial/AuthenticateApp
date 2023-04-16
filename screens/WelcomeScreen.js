import { Alert, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";
import { useEffect, useState } from "react";
import { getWelcomeDataService } from "../services/data-service";

function WelcomeScreen() {
    const [welcomeMessage, setWelcomeMessage] = useState();

    useEffect(() => {
        try {
            getWelcomeDataService().then((response) => {
                setWelcomeMessage(response.data);
            });
        } catch (error) {
            Alert.alert('Error occured!', 'Could not get welcome message data');
        }
    }, []);

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