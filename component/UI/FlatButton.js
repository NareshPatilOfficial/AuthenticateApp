import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";
import { View } from "react-native";

function FaltButton({ children, onPress }) {
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

export default FaltButton;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 10,
        marginTop: 15,
        overflow: 'hidden',
    },
    innerContainer: {
        paddingVertical: 6,
    },
    btnText: {
        color: Colors.primary100,
        fontSize: 16,
        textAlign: 'center'
    }
})