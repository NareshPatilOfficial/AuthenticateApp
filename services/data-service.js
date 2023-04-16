import axios from "axios";

const BASE_URL = 'https://react-native-e3e28-default-rtdb.firebaseio.com/';

export async function getWelcomeDataService({ token }) {
    console.log(token);
    return await axios.get(
        BASE_URL + 'message.json?auth=' + token
    );
}