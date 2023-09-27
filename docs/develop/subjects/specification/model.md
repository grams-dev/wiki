---

sidebar_position: 1

---

# The Subject Model

Dive deep into the heart of Grams: Subjects. These dynamic entities represent the very essence of decentralized subject-oriented programming in the Grams ecosystem, architecturally designed to interlace seamlessly with the diverse world of Solidity and beyond.

## 🧱 Structure of a Subject

At its core, a Subject is a shape, encapsulating specific behaviors, state, and logic. It's the cornerstone for creating interoperable building blocks in decentralized applications.

| Component   | Description                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------|
| Identifier  | A unique descriptor consisting of a name and version, ensuring easy referencing and versioning.   |
| State       | The innate attributes or data tied to the subject, representing its current status.               |
| Behaviors   | Actions or methods that map directly to functionalities, often linked to Solidity functions.     |
| Triggers    | Events that the subject can initiate, akin to blockchain-driven notifications.                   |
| Subscriptions | Allows the subject to stay updated or respond to specific events or triggers.                |

## 🌐 Web3 Types in Grams

Grams brings forth foundational types that resonate with standard Ethereum types, ensuring smooth transition and compatibility.

| Type    | Description                                                      |
|---------|------------------------------------------------------------------|
| Address | Denotes Ethereum addresses, facilitating transactions and identity.|
| Uint256 | Represents large integers, commonly used for token balances and calculations.|
| Bytes32 | Fixed-size byte arrays, often employed for cryptographic hashes and secure operations.|

## 🔗 Traits

Traits define the inherent characteristics or behaviors a subject or its components can exhibit. They offer cues on how the subject operates or interacts within the decentralized framework. Use a combination of existing traits or create your own!

| Trait    | Description                                        | Solidity Equivalent    |
|----------|----------------------------------------------------|------------------------|
| Payable  | Enables the subject to engage in Ether transactions.| `payable` modifier     |
| View     | Designates the function as read-only, ensuring state consistency.| `view` modifier  |

## 📜 Protocol Agnostic Design

Crafted with a vision for the future, Subjects use an Interface Definition Language (IDL) or JSON AST. This design choice makes them not just adaptable to current technologies but also future-ready. It ensures compatibility across various protocols and allows for easy generation of client-side packages and contracts in Solidity, with a roadmap laid out for WebAssembly.

## 🚀 Takeaways

Grams Subjects herald a new age in decentralized application design. They provide a robust, scalable, and intuitive framework that dovetails perfectly with Solidity, unlocking a realm of possibilities in Ethereum's smart contract world. With Subjects, developers are equipped with the tools to craft, scale, and innovate, driving the next generation of decentralized marvels.
