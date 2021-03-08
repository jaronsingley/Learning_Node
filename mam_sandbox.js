import getRandoSeed from './randoSeed.js'

//Fetch api data
//https://www.binance.com/api/v3/ticker/24hr?symbol=IOTAUSDT
//Input: Url to api
//Return: json objct of the api data
//Action: Get api data from binance api
const getApiData = (url)=>{
    var data = {'data': 'msg'}
    return data
}

//Input: Data: json object
//Return: Nothing
//Action: Appends to a json file the data object.
const logData = (data)=>{
    
}

//Action: Using a MAM Channel upload the data to the tangle
//Double check using https://explorer.iota.org/mainnet/streams/0/
const mamData = (data)=>{
    
}

//Main function that is calling the others in order.
const getApi = ()=>{
    const URL_BINANCE_IOTA = "https://explorer.iota.org/mainnet/streams/0/"
    const data = getApiData(URL_BINANCE_IOTA)
    logData(data)
    mamData(data)
    return true
}


//Test run
console.log(getRandoSeed(81))
console.log(getApi())

export default getApi
