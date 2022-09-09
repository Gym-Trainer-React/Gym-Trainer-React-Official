import axios from "axios";

export const WORKOUT_API = axios.create({
    baseURL: 'https://wger.de/api/v2/'
});


