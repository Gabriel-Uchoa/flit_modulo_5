async function getClimate(data: Array<any>) {
    const KEY_API = process.env.REACT_APP_KEY_API_WEATHER
    const { lat, lon } = data[0]
    const climaCity =
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=pt_br&appid=${KEY_API}&units=metric`)
            .then(res => res.json())
    return climaCity
}

export default getClimate

