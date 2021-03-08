////////////////////////////////////////////////
// Check the balance of an address
////////////////////////////////////////////////

// Require the IOTA library
const Iota = require('@iota/core');

// Connect to a node
const iota = Iota.composeAPI({
provider: 'https://nodes.devnet.iota.org:443'
});

// The address whose balance you want to check
const address =
  'KPUTHEPBCOQLIHNZECLOMEMJEPKEMDXFJWBPKVTMSOGCHZLMINMAAKFWAFVRSOOYVUZWFGCPRHEFAGGZC'

// Get the confirmed balance of the address
iota
  .getBalances([address])
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  })
