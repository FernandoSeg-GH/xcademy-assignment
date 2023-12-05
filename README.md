# XCAD Network Developer Interview Assignment

Tasks are segmented based on levels of seniority, feel free to do as many as you want, although you may not be required to finish them and you will be questioned in a follow-up interview about how you resolved them.

## Task

We require you to create a NextJS TypeScript project. The project requires the following:

### Querying Lastest Average Prices (USD)

1. Create a page that queries the following endpoints and displays the latest average prices (USD) in a user friendly way on the page (both on mobile and desktop devices).

- CoinGecko (https://api.coingecko.com/api/v3/simple/price?ids=xcad-network&vs_currencies=usd)
- ZilStream (https://io-cdn.zilstream.com/chart/aggr/zil1z5l74hwy3pc3pr3gdh3nqju4jlyp0dzkhq2f5y)
- CryptoRank (https://api.cryptorank.io/v0/charts/prices-by-coin?keys=xcad-network&days=7)

2. Store these average prices in a global store using redux.

3. Create a selector that calculates the average value of all prices.

4. Periodically poll these prices and update the average price on-screen accordingly. Include a button on-screen that also requests the prices. Display the change in price to the user.

### Querying Balances - Zilliqa Package

1. Create an input on-screen to allow a user to input an address (Base16, convert an address if Bech32).

_Example_:

- Bech32 Address: zil1aa6pc34xa72duchewmq8nlrt8ygf82s9h826js
- Base16 Address: 0xeF741c46a6Ef94De62f976c079fC6b391093aA05

2. Using the '@zilliqa-js/crypto' (Zilliqa) package, query the following smart contract to get the user's XCAD smart contract balance (_Hint_: Query the smart contract state using `getState`, do not use `getBalance`, we require the smart contract 'balance', not the Zilliqa token balance).

- XCAD Smart Contract Address: `zil1z5l74hwy3pc3pr3gdh3nqju4jlyp0dzkhq2f5y`

3. Display the XCAD balance on screen with its equivalent USD value using the average price in the previous step.

### BONUS - Token Approve - Ethers Package

1. Create a function that calls the `approve` method of this token contract (This contract is on BSC Testnet)

- XCAD Token Smart Contract Address: `0xCfD9F58d0E9F035890DB489B9785d5c230Da01Ba`

2. Using the 'ethers' (Ethereum) package, connect with the contract in order to call the method (_Hint_: You need to provide a valid wallet with some balance you can use this faucet https://testnet.bnbchain.org/faucet-smart).

3. Display an status toast when the calls ends

### Bonus

- App/Website Styling
- Single Unit and E2E Test Case (Jest, Cypress)
- Linting and Code Structure
- GitHub Actions Template
- Deployment of the project

## Job Specific Directives

** Minimum Requirements **

- Typescript
- Communication with RESTful API
- Basic React Knowledge - Components and Hooks
- Basic Code Readability/Structure

**Software Engineer I**

- Component Libraries (e.g. MUI)
- State Management (Redux toolkit or Context)
- Next JS (SSR, Middleware)
- Basic Unit Testing (Jest)
- Responsiveness (Mobile, etc)

**Software Engineer II**

- Advanced Project Structuring
- Advanced Testing (Cypress, Jest)
- Basic Crypto Knowledge
  - Fetching Smart Contract States
  - Querying Token Balances
- Elegantly Handling Transitions, Fetching and Error States
- Data Fetching and Caching (React Query or SWR)

**Software Engineer III**

- Strong Crypto Knowledge (Zilliqa, Ethers)
- Wallet Connections
- Smart Contract Interactions (ABI Typing)
- Transaction Handling
