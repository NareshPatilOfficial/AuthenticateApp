import { TextInput, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function Input({ label, keyboardType, secure, value, onChangeText, isValid }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.labelText, !isValid && styles.invalidLabelText]}>{label}</Text>
            <TextInput
                style={[styles.textInput, !isValid && styles.invalidTextInput]}
                keyboardType={keyboardType}
                secureTextEntry={secure}
                autoCapitalize={'none'}
                value={value}
                onChangeText={onChangeText}
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
    invalidLabelText: {
        color: Colors.error500
    },
    textInput: {
        backgroundColor: Colors.primary100,
        fontSize: 16,
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 4,
        marginTop: 4
    },
    invalidTextInput: {
        backgroundColor: Colors.error100
    }
})
