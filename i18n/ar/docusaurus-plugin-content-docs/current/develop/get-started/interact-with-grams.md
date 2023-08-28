---
sidebar_position: 2.2
title: Interact with Grams
---

As an app developer, you can leverage the Grams ecosystem to provide seamless blockchain interactions within your applications. This guide will walk you through the process of integrating Grams functionality into your app, allowing users to connect their wallets, authorize transactions, and interact with the Grams network.

## Prerequisites

Before you can start integrating Grams into your app, make sure you have the following:

- Node.js installed on your development machine
- A working knowledge of JavaScript and web development concepts

## Installation

To get started, you need to install the `@grams.dev/sdk` package, which provides the necessary tools and APIs for interacting with the Grams network. Open your terminal and run the following command:

```shell
npm install @grams.dev/sdk
```

This will add the Grams SDK to your app's dependencies.

## Connecting to Grams

To enable users to connect their Grams wallets to your app, you can use the Grams extension. The Grams extension acts as a bridge between your app and the Grams network.

### Using the Grams Extension

To connect to Grams using the Grams extension, you can leverage the `window.grams` API provided by the SDK. The following steps outline the process:

1. Ensure that the Grams extension is installed in the user's browser.

2. Use the `window.grams` object to check if the extension is available:

   ```javascript
   if (window.grams) {
     // Grams extension is available
   } else {
     // Grams extension is not installed
   }
   ```

3. To connect to the user's Grams wallet, you can use the `window.grams.connect` method. This will prompt the user to authorize the connection:

   ```javascript
   window.grams.connect()
     .then((accounts) => {
       // Connection successful, accounts contains the connected wallet addresses
     })
     .catch((error) => {
       // Connection failed, handle the error
     });
   ```

4. Once connected, you can access the user's wallet address and other account details through the `accounts` array returned by the `connect` method.

## Authorizing Transactions

Once the user's wallet is connected to your app, you can request authorization for transactions such as payments, contract interactions, or other blockchain operations. Here's an example of how to request transaction authorization using the Grams SDK:

```javascript
import { GramsExtension } from '@grams.dev/sdk';

// Check if Grams extension is available
if (window.grams) {
  GramsExtension.authorizeTransaction(transaction)
    .then((result) => {
      // Transaction authorized by the user
    })
    .catch((error) => {
      // Transaction authorization failed
    });
} else {
  // Grams extension is not available, inform the user
}
```

In this example, the `transaction` object represents the details of the transaction you want to perform. The `authorizeTransaction` method will prompt the user to review and approve the transaction in their Grams wallet.

## Exploring Grams Features

The Grams ecosystem offers a range of powerful features and functionalities that you can incorporate into your app:

- **dApps**: Build decentralized applications (dApps) on top of the Grams blockchain, leveraging smart contracts and blockchain data.

- **Subjects**: Use Grams subjects to create and manage verifiable credentials, enabling secure and tamper-proof identity verification within your app.

- **Smart Contracts**: Develop and interact with smart contracts on the Grams blockchain, enabling automation and programmable functionalities.

- **Files**: Store and retrieve files on the Grams network, leveraging the decentralized and censorship-resistant nature of blockchain technology.

- **Names**: Register human-readable names on the Grams blockchain, allowing users to interact with your app using familiar and memorable identifiers.

By exploring these features, you can unlock the full potential of the Grams ecosystem and provide your users with a rich and secure blockchain experience.

## Conclusion

Integrating Grams into your app opens up a world of possibilities for blockchain interactions. By connecting to the Grams network, authorizing transactions, and exploring the various features offered by Grams, you can create powerful and secure decentralized applications.

To learn more about the Grams SDK and available APIs, refer to the [Grams SDK Documentation](https://wiki.grams.dev/docs/develop/libraries/sdk). Happy building!
