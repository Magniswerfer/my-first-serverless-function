const fetch = require('node-fetch')

exports.handler = async function () {
    const game_api = 'https://pokeapi.co/api/v2/pokedex/kanto'

    const response = await fetch(game_api)
    data = await response.json()

    return {
        statusCode : 200,
        body : JSON.stringify(data)
    }

}