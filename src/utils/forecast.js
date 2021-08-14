const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2f3c7d75053a16037cc006e3d688dd01&units=f&query=${lat},${long}`
    request({url, json: true}, (error, {body}) => {
        error ? callback('Unable to reach the weather service', undefined) :
            body.error ?
                callback('Unable to find that location, please try again', undefined) :
                callback(undefined, 
                    `${body.current.weather_descriptions}, ${body.current.temperature} degrees. Feels like ${body.current.feelslike} degrees. Humidity is ${body.current.humidity}%.`
                )
    })
}



module.exports = forecast