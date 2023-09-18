---
sidebar_position: 1
---

# The Subject Model

The **Grams Subject Model** is the architectural cornerstone of the Grams framework, seamlessly merging decentralized subject-oriented programming with the dynamic realm of Solidity.

## 🧱 Structure of a Subject

Each subject in Grams encapsulates specific functionality or behavior within the decentralized environment.

| Component   | Description                                                |
|-------------|------------------------------------------------------------|
| Identifier  | A unique blend of name and version.                        |
| State       | Attributes or state data intrinsic to the subject.         |
| Behaviors   | Actions or methods directly tied to Solidity functions.    |
| Events      | Blockchain-driven notifications the subject can broadcast. |

## 🌐 Web3 Types

These are foundational types for the Grams Subject IDL, aligning with standard Ethereum types.

| Type    | Description                                                      |
|---------|------------------------------------------------------------------|
| Address | Represents Ethereum addresses.                                   |
| Uint256 | Denotes large integers, especially used for token balances.      |
| Bytes32 | Fixed-size byte arrays, primarily used for cryptographic hashes. |

## 🔗 Traits

Traits in Grams are indicative of the characteristics or behaviors a subject or a shape generally can adopt. The below are examples and how they are mapped to corresponding Solidity constructs.

| Trait    | Description                                        | Solidity Equivalent |
|----------|----------------------------------------------------|---------------------|
| Payable  | Enables the subject to transact with Ether.        | `payable` modifier  |
| View     | Signifies the function as read-only.               | `view` modifier     |

## 📁 Referencing Behaviors in Separate `.sol` Files

To ensure clarity and modularity, behaviors can be defined in distinct Solidity files and then referenced within the Subject IDL.

1. **Linking Solidity Files**: Utilize the `include` directive to connect external `.sol` files.
2. **Mapping Behaviors**: Within the Subject IDL, reference the behaviors defined in the linked Solidity files.

For illustration:

```plaintext
include "WalletBehaviors.sol";

subject Wallet@1.1 {
    properties {
        owner: Address;
        balance: Uint256;
    }

    behaviors {
        deposit: WalletBehaviors.deposit;   // Referencing from the linked .sol file
        withdraw: WalletBehaviors.withdraw; // Similar approach
    }

    events {
        FundsDeposited: Amount(Uint256);
        FundsWithdrawn: Amount(Uint256);
    }
}
```

Associated `WalletBehaviors.sol`:

```solidity
function deposit() public payable { /*...*/ }

function withdraw(uint256 amount) public { /*...*/ }
```

## 🎉 Conclusion

The Grams Subject Model offers a structured and intuitive interface for designing, referencing, and harmonizing decentralized components within the web3 domain. Its tight integration with Solidity ensures that developers can harness the full potential of Ethereum's smart contract capabilities, all while maintaining a clear and organized design paradigm.
