---
sidebar_position: 2.3
title: Create a dApp
---

In this guide, we will walk you through the process of creating a decentralized application (dApp) using the `create-grams-dapp` tool. `create-grams-dapp` is a command-line interface (CLI) tool provided by Grams that sets up a new dApp project with the necessary boilerplate code and configurations.

## Prerequisites

Before you begin, make sure you have the following installed on your development machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Getting Started

To create a new dApp project, you can use the `npx` command to run the `create-grams-dapp` tool without installing it globally. Open your terminal and run the following command:

```shell
npx create-grams-dapp my-dapp
```

Replace `my-dapp` with the desired name for your dApp project. This command will initialize a new dApp project in a directory with the specified name.

## Project Structure

The `create-grams-dapp` tool will set up a basic project structure for your dApp, including the following files and directories:

```
my-dapp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── styles/
│   └── App.js
├── .gitignore
├── package.json
└── README.md
```

- The `public` directory contains the HTML file (`index.html`) that serves as the entry point for your dApp.

- The `src` directory contains the JavaScript code and other assets for your dApp.

- The `components` directory is where you can create and organize your dApp's components.

- The `styles` directory is where you can add CSS or other styling files for your dApp.

- The `App.js` file is the main entry point of your dApp's JavaScript code.

- The `.gitignore` file specifies the files and directories that should be ignored by Git.

- The `package.json` file contains the dependencies and scripts for your dApp project.

- The `README.md` file is where you can provide instructions and documentation specific to your dApp.

## Running the dApp

Once your dApp project is set up, you can navigate to the project directory using the following command:

```shell
cd my-dapp
```

To start the development server and run your dApp locally, run the following command:

```shell
npm start
```

This will start the development server and open your dApp in a web browser. Any changes you make to your dApp's code will be automatically reflected in the browser.

## Customization and Further Development

With the initial project set up, you can now start customizing your dApp by adding new components, modifying existing code, and integrating with Grams APIs and smart contracts. The possibilities are endless!

To learn more about developing dApps with Grams and exploring advanced features, refer to the [Grams Developer Documentation](https://wiki.grams.dev/).

## Conclusion

Creating a dApp with Grams is a powerful way to leverage blockchain technology and build decentralized applications. With the `create-grams-dapp` tool, you can quickly set up a new dApp project and start developing your vision.

Happy dApp development with Grams!