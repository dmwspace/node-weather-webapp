const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZG13c3BhY2UiLCJhIjoiY2twNXByNGIyMXlxMDJ1bXc0M2p5b3ozbiJ9.bxaCpxEq-TPHiU9BBA_ZrQ&limit=1`
    request({url, json: true}, (error, {body}) => {
        error ?
            callback('Unable to connect to location services', undefined) :
            body.features.length === 0 ?
                callback('Unable to find location. Try another search', undefined) :
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })

})}


// geocode('San Diego', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = geocode