---
sidebar_position: 2.4
title: Create a Subject
---

In this guide, we will walk you through the process of creating a Grams Subject using the `create-grams-subject` tool. `create-grams-subject` is a command-line interface (CLI) tool provided by Grams that sets up a new Subject project with the necessary boilerplate code and configurations.

## Prerequisites

Before you begin, make sure you have the following installed on your development machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Getting Started

To create a new Grams Subject project, you can use the `npx` command to run the `create-grams-subject` tool without installing it globally. Open your terminal and run the following command:

```shell
npx create-grams-subject my-subject
```

Replace `my-subject` with the desired name for your Subject project. This command will initialize a new Subject project in a directory with the specified name.

## Project Structure

The `create-grams-subject` tool will set up a basic project structure for your Subject, including the following files and directories:

```
my-subject/
├── README.md
├── src/
│   ├── index.js
│   └── config.js
├── .gitignore
└── package.json
```

- The `README.md` file is where you can provide instructions and documentation specific to your Subject.

- The `src` directory contains the JavaScript code for your Subject.

- The `index.js` file is the entry point of your Subject's JavaScript code.

- The `config.js` file is where you can configure your Subject's settings and parameters.

- The `.gitignore` file specifies the files and directories that should be ignored by Git.

- The `package.json` file contains the dependencies and scripts for your Subject project.

## Customization and Further Development

With the initial project set up, you can now start customizing your Grams Subject by modifying the code in the `src` directory. You can add your own logic, integrate with Grams APIs, and implement specific functionality for your Subject.

To learn more about developing Grams Subjects and exploring advanced features, refer to the [Grams Developer Documentation](https://wiki.grams.dev/).

## Conclusion

Creating a Grams Subject allows you to build powerful and decentralized applications that can interact with the Grams ecosystem. With the `create-grams-subject` tool, you can quickly set up a new Subject project and start developing your own Subject.

Enjoy creating innovative Grams Subjects with ease!