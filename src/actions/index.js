import axios from 'axios'

const API_KEY = 'cae8493b9f40123cf63e5c401361db46'
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${API_URL}&q=${city},pl`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}