import { TextInput, Text, View } from "react-native";

function Input({ label, textInputConfig }) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                {...textInputConfig}
            />
        </View>
    )
}

export default Input;
