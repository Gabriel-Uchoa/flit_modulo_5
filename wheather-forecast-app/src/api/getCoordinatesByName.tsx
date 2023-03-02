async function getCoordinatesByName(cityName: string) {
    const KEY_API = process.env.REACT_APP_KEY_API_WEATHER

    const detailsCity = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${KEY_API}`)
        .then(res => res.json())
    return detailsCity
}

export default getCoordinatesByName

