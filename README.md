# RecursiveSearchOfObjectValue Function

This TypeScript function recursively searches and prints all leaf values of nested objects.

## Table of Contents

- [Introduction](#introduction)
- [Functionality](#functionality)
- [Usage](#usage)
- [Example](#example)
- [Parameters](#parameters)
- [Return Value](#return-value)
- [Contributing](#contributing)

## Introduction

The `RecursiveSearchOfObjectValue` function is designed to traverse through nested objects and print out all leaf values (values that are not objects themselves). It can be particularly useful when you need to explore the structure of complex objects and extract specific data points.

## Functionality

The function uses recursion to traverse through each level of nested objects. It checks each property value:
- If the value is an object, it recursively calls itself.
- If the value is not an object (e.g., string, number, boolean), it prints the value to the console.

## Usage

To use the `RecursiveSearchOfObjectValue` function:
1. Ensure you have TypeScript set up in your environment.
2. Copy the function into your TypeScript project or script.
3. Call the function with the object you want to explore as the argument.

## Example

```typescript
// Example usage with a userData object
const testInt = {
    full_name: "Emmanuel Obolo",
    age: 24,
    isStudent: true,
    results: [{
        id: 1,
        subject: "Maths",
        Score: 85,
        passed: true,
    }],
    isGraduating: false,
};

RecursiveSearchOfObjectValue(testInt);
```

Output:

- Emmanuel Obolo
- 24
- true
- 1
- Maths
- 85
- true
- false


## Parameters

- `user` (object): The object to be recursively searched.
- `propAmount` (number, optional): The number of properties to consider. Default is 0.
- `ranAlready` (boolean, optional): Flag to indicate if the function has already run. Default is false.

## Return Value

The function does not return any value explicitly. It recursively prints leaf values of nested objects to the console.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.