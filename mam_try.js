import getRandoSeed from './randoSeed.js'




async function getApiData() {
    const fetch = require('node-fetch');
    const response = await fetch()
    const data = await response.json()
    console.log(data);
    return data;
}


const mamData = (data)=>{
    const Mam = require('../lib/mam.client.js')
    const mode = 'public'
    const provider = 'https://nodes.devnet.iota.org'
    const mamExplorerLink = `https://mam-explorer.firebaseapp.com/?provider=${encodeURIComponent(provider)}&mode=${mode}&root=`
    // Initialise MAM State
    let mamState = Mam.init(provider, getRandoSeed, 2)
    const logData = data => JSON.parse((trytesToAscii(data)), '\n')
}   

// Publish to tangle
    const publish = async packet => {
        const { asciiToTrytes, trytesToAscii } = require('@iota/converter')
    // Create MAM Payload - STRING OF TRYTES
        const trytes = asciiToTrytes(JSON.stringify(packet))
        const message = Mam.create(mamState, trytes)

        // Save new mamState
        mamState = message.state

        // Attach the payload
        await Mam.attach(message.payload, message.address, 3, 9)

        console.log('Published', packet, '\n');
        return message.root
}

//Main function that is calling the others in order.

let publishApi = ()=>{
    const URL_BINANCE_IOTA = "https://www.binance.com/api/v3/ticker/24hr?symbol=IOTAUSDT";
    const data = getApiData(URL_BINANCE_IOTA)
    const apiMessage = mamData(data)
      console.log(apiMessage)
    publish(apiMessage)
    return true
}

//test run
console.log(getRandoSeed(81))
console.log(publishApi())

export default publishApi
