import axios from "axios";

const BASE_URL = 'https://react-native-e3e28-default-rtdb.firebaseio.com/';

export async function getWelcomeDataService(){
    return await axios.get(
        BASE_URL+'message.json'
    );
}