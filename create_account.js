const seed = 'CSU9XWCXYFWUUXUWW9ELBUMUJQWSAZNQBPIHZYWQATGTXXSZJUQPJXBFZUGLC9WCU9XYIRJCJPBMFL9AI';

// The IOTA node to connect to
const provider = 'https://nodes.devnet.iota.org:443';

// How far back in the Tangle to start the tip selection
const depth = 3;

// The minimum weight magnitude for the Devnet
const minWeightMagnitude = 9;

// How long to wait between each reattachment round
const delay = 1000 * 30;

// The depth at which transactions are no longer promotable
// and are automatically reattached
const maxDepth = 6;
const timeSource = () => util.promisify(ntpClient.getNetworkTime)("time.google.com", 123);
const account = createAccount (
      seed,
      provider,
      depth,
      minWeightMagnitude,
      delay,
      maxDepth,
      timeSource
);
account.start();
account.getAvailableBalance()
.then(balance => {
    console.log(`Your total available balance is: ${balance}`);
})
.catch(error => {
    console.log(error);
    // Close the database and stop any ongoing reattachments
    account.stop();
});
