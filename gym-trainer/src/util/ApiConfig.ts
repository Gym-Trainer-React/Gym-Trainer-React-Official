import axios from "axios";

export const WORKOUT_API = axios.create({
    baseURL: 'https://wger.de/api/v2/'
});


export const BACKEND_API = axios.create({
    baseURL: 'http://gymappapi-env.eba-xyq67ruz.us-east-2.elasticbeanstalk.com'
});