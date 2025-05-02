import { error } from 'console'
import https from 'https'
import readline from 'readline/promises'

const apiKey = '27cfc8d0c4b8df5f08069ec450b5cff7'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getWeather = async (city) => {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metrics`

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`City Not found please check city name...`)
        }
        const weatherData = await response.json()
        // console.log(weatherData)

        console.log(`\nWeather Info:`)
        console.log(`City: ${weatherData.name}`)
        console.log(`Temperature: ${weatherData.main.temp}°C`)
        console.log(`Description: ${weatherData.weather[0].description}`)
        console.log(`Humidity: ${weatherData.main.humidity}%`)
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`)
    } catch (error) {
        console.log(error)
    }
}

const city = await rl.question(`Enter a name of city to get its weather: `)
await getWeather(city)
rl.close()