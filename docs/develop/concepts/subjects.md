---
title: Subjects
---

Welcome to one of the core concept of Grams: **Subjects**. This page offers an introductory overview of what Subjects are, laying the foundation for a deeper dive in subsequent sections.

## Introduction

At its heart, a Subject in the Grams ecosystem is a declarative, modular, and stateful component, encapsulating both behavior and state. Just as "objects" are the fundamental building blocks in Object-Oriented Programming (OOP), Subjects form the cornerstone of Grams' Subject-Oriented Programming paradigm.

## Why Subjects?

Traditional software development, especially in the web3 space, often involves writing repetitive, boilerplate code. Moreover, decentralized applications (dApps) require a tight integration of frontend logic with smart contract backends, leading to code duplication and maintenance challenges.

Subjects aim to streamline this process, offering:

- **Declarative Syntax**: Define what you want, not how to achieve it.
- **Modularity**: Reusable components that can be plugged into various dApps.
- **Statefulness**: Built-in state management, making it easier to manage and track data changes.

## The Structure of a Subject

A Subject typically comprises:

- **Metadata**: Information about the Subject, such as its version.
- **State**: The Subject's inherent data or properties.
- **Behaviors**: Functions or methods that define the Subject's actions.
- **Triggers**: Events that the Subject can emit.
- **Subscriptions**: Mechanisms by which a Subject can listen to or react to external triggers or events, making them inherently responsive.

This organized structure ensures that Subjects are both readable and maintainable.

## Benefits of Using Subjects

- **Scalability**: As modular components, Subjects can be easily scaled and integrated into larger systems.
- **Maintainability**: Clear separation of concerns makes updates and bug fixes more straightforward.
- **Interoperability**: Subjects are designed to be future-proof, compatible across various platforms, from Solidity to Wasm, ensuring a broad reach.
- **Rapid Development**: With built-in state management and a library of pre-defined behaviors, building dApps becomes faster and more efficient.

## A Practical Example

```
$version: "1.0.0"

@pattern("^0x[a-fA-F0-9]{40}$")
type Address = String;

@inherits("grams.Organization")
subject NonProfitOrganization {
    version: "1.0.0"

    state {
        donations: Uint256,
        projects: List<String>
    }

    behaviors {
        @payable
        donate(amount: Uint256) -> (success: Boolean);
        startProject(projectName: String) -> (projectId: Uint256);
    }

    triggers {
        DonationReceived: Uint256,
        ProjectStarted: String
    }

    subscriptions {
        VolunteerJoined(projectId: Uint256);
    }
}
```

## What's Next?

Now that you have a foundational understanding of Subjects, consider diving deeper:

- **[Subjects 101](/docs/develop/subjects/subjects-101.md)**: A practical guide to getting started with Subjects.
- **[Subject Specification](/docs/develop/subjects/subject-specification/the-subject-model.md)**: Dive into more intricate aspects of Subjects, including advanced patterns and best practices.
