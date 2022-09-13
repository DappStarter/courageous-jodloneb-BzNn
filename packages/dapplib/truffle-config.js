require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant heavy kite brand term'; 
let testAccounts = [
"0x6081069d7e062b9102a3f246af0134010523d03f96cbe437dfa7cb00d6760bb9",
"0x706052b2d02f4719d3ca6c65f2e6286445117596dcb485fa19584a80920e92d0",
"0x7e7f427d214020b04f3c315d056ac26eadb5c0eb79c92810f5f1e00686c81458",
"0x6915094fc80d361c4646a97e399ce3a93076bd7f17427ca819aae36f30965bab",
"0x20e13eae21adceb0a17217027775315c0766ee91a79ea9b6d2dd4ae208553cfb",
"0xeb3a1ee947d1e582a6f953e5f117c5ebd3e3bc1aded713fac12555d5a9696ea4",
"0x9628082431d533b94c64a203a021f763a2849d29bcf4c0007dbaa54844636df7",
"0x427b002b4be73cc8ce69da45a09aa9a22b8c0dccf37de947f8e62426f8d02f7e",
"0x4b6151d9a1a306acd0c4163df191bdd3234ebee41170b0c7f2323da3a1998439",
"0xc57e50a67ab5856192d79428f7a2668d6e593abf85a3f83e6ec512344373c94c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

