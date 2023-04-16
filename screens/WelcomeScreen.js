import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";

function WelcomeScreen(){
    return (
        <View style={styles.container}>
            <Text style={[styles.textbase, styles.title]}>
                Welcome
            </Text>
            <Text style={[styles.textbase]}>
                You are logged now!
            </Text>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    textbase:{
        color:Colors.primary800
    }
})