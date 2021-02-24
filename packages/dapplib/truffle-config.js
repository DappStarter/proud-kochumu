require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign stove response misery attitude hope praise army gather'; 
let testAccounts = [
"0x14152291d0fd96229d6a929c39db927429fbfcbca49a52719843892dd0038932",
"0x057d462a459e9c6239599d2b7291d15501a89088b0e71111236b30ad0cf75c08",
"0x7f6c0f4481bf33c83bf7eb1617ac1f454b7e2beacb3059adf0aa5de1c47e34dc",
"0xa801f4efd5b79f998d1fdac5c38875cb7b8d8eaaca2879a89fa2464878564041",
"0x01f4aa4eaa0d9789d28c23ab8c18c51cfc0e4b20488eda9a364aadc2f3ba8453",
"0xa39bfeacbf3db8ffa5fd5e0e0064acef46b20f8ac7967e40007576a90c6b060a",
"0x82e6e232c9b2494d7fa09ff7e6d77d40f1622b567977c72349e3555eec93e15f",
"0x23c97fa9896048d935462fd4b3511de65733802b47926afc8f57c0be51b11885",
"0x12d615487d228230839c792bc97f1bc53639640534384c551f36ee1df871c844",
"0x89ab405d8be455923c5aeabae29e64ede263c0fc3e964852a4ec5922c1bfe27c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
