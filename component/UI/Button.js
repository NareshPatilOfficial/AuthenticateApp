import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";
import { View } from "react-native";

function Button({ children, onPress }) {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                android_ripple={{ color: Colors.primary100 }}
                style={styles.innerContainer}
                onPress={onPress}
            >
                <Text style={styles.btnText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 10,
        marginTop: 15,
        overflow: 'hidden',
        backgroundColor: Colors.primary500,
    },
    innerContainer: {
        paddingVertical: 6,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})