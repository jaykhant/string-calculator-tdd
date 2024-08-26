# String Calculator

This is an implementation of the String Calculator using Test-Driven Development (TDD).

## Features

- Handles an empty string and returns 0.
- Handles a single number and returns the number itself.
- Handles two numbers separated by a comma and returns their sum.
- Supports an unknown amount of numbers separated by commas.
- Supports new lines as delimiters between numbers.
- Allows custom delimiters specified in the input string.
- Throws an exception if negative numbers are provided, listing all negative numbers.
- Ignores numbers greater than 1000.

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the Repository**  
   Open your terminal and clone the repository using the following command:
   ```bash
   git clone https://github.com/jaykhant/string-calculator.git
   ```

2. **Navigate to the Project Directory**  
   Once the repository is cloned, navigate to the project directory:
   ```bash
   cd string-calculator
   ```

3. **Install Dependencies**  
   Install the required dependencies using npm:
   ```bash
   npm install
   ```
   This will install all the necessary packages, including the testing framework (Jest).

4. **Run Tests**  
   Ensure everything is set up correctly by running the tests:
   ```bash
   npm test
   ```
   If all tests pass, you're ready to start using the String Calculator.
