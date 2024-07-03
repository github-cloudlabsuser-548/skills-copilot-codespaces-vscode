// Step 1: Define the Calculator class
class Calculator {
    constructor() {
      this.value = 0;
    }
  
    // Method to add a number to the current value
    add(number) {
      this.value += number;
      return this;
    }
  
    // Method to subtract a number from the current value
    subtract(number) {
      this.value -= number;
      return this;
    }
  
    // Method to multiply the current value by a number
    multiply(number) {
      this.value *= number;
      return this;
    }
  
    // Method to divide the current value by a number
    divide(number) {
      if (number === 0) {
        console.log("Cannot divide by zero.");
        return this;
      }
      this.value /= number;
      return this;
    }
  
    // Method to clear the calculator to its default state
    clear() {
      this.value = 0;
      return this;
    }
  
    // Method to display the current value
    display() {
      console.log(`Current Value: ${this.value}`);
      return this;
    }
  }
  
  // Step 2: Use the Calculator class
  const calc = new Calculator();
  
  // Example usage
  calc.add(5).subtract(2).multiply(3).divide(2).display(); // Should display "Current Value: 4.5"
  calc.clear().add(10).divide(0).display(); // Should display "Cannot divide by zero." followed by "Current Value: 10"