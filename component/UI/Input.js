import { TextInput, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function Input({ label, keyboardType, secure }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.labelText}>{label}</Text>
            <TextInput
                style={styles.textInput}
                keyboardType={keyboardType}
                secureTextEntry={secure}
            />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 6
    },
    labelText: {
        color: 'white'
    },
    textInput: {
        backgroundColor: Colors.primary100,
        fontSize: 16,
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 4,
        marginTop: 4
    }
})
