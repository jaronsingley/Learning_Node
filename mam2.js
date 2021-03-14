import getRandoSeed from './randoSeed.js'

//Return: json objct of the api data
//Action: Get api data from binance api

import fetch from "node-fetch";

const url = "https://www.binance.com/api/v3/ticker/24hr?symbol=IOTAUSDT";

const getApiData = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getApiData(url);

//Input: Data: json object
//Return: Nothing
//Action: Appends to a json file the data object.

const logData = async data => {
    const mamMessage = JSON.parse(data);
    console.log('your message is' + mamMessage);
    return mamMessage;
}

logData(data);

