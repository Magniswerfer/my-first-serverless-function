const axios = require('axios');

exports.handler = async function () {
    const api = 'https://api.igdb.com/v4/games'

  const response = await axios({
        method: 'post',
        url: api,
        headers: {"Client-ID": "r3d8id87llzz9sxqqgi0385jaet59e",
        "Authorization" : "Bearer 0zhmh87qo9rpkhy6auz6eq6jb9qmmt"}, 
        data: "fields name; where id = (8,9,11);"
    });

    return {
        statusCode: 200,
        body: JSON.stringify(response.data)
    }
}