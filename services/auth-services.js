import axios from "axios";

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = 'AIzaSyCVIxhC-MRCYHVEe2Ph6rfLzD7XD0Ba9Uc';

async function authenticate({ mode, email, password }) {
    const response = await axios.post(
        BASE_URL + mode + '?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    )
    console.log(response.data);
}

export async function createUser(email, password) {
    await authenticate({ mode: 'signUp', email, password });
}

export async function logInUser(email, password) {
    await authenticate({ mode: 'signInWithPassword', email, password });
}