const ifElsecode = (name) => {
  return `// SPDX-License-Identifier: MIT 
  pragma solidity ^0.8.0;
  
    // In Solidity, the if-else statement is used for conditional execution of code. It allows you to control 
      the flow of your smart contract based on certain conditions.
      Here's a simple example demonstrating the use of if-else in Solidity:
  
  contract ${name} {
    
      // Define a state variable
      uint public myNumber;
  
      // Function to set the value of myNumber based on a condition
      function setNumber(uint _input) external {
          // If-else statement
          if (_input > 10) {
              myNumber = _input;
          } else {
              myNumber = 10; // Set a default value if the condition is not met
          }
      }
  }
  `;
};
const loopCode = (name) => {
  return `// SPDX-License-Identifier: MIT 
  pragma solidity ^0.8.0;
     
       //Loops in Solidity serve similar purposes as loops in other programming languages – they allow you to repeat a certain block of code multiple times. 
         Solidity supports different types of loops, including for, while, and do-while loops. 
         Here are examples of each:
  
    contract ${name} {
  
        function forLoopExample() public pure returns (uint) {
            uint sum = 0;
  
            //For Loop Example
  
            for (uint i = 1; i <= 10; i++) {
                sum += i;
            }
            return sum;
        }
  
  
        function whileLoopExample() public pure returns (uint) {
            uint sum = 0;
            uint i = 1;
  
         //While Loop Example
  
            while (i <= 10) {
                sum += i;
                i++;
            }
            return sum;
        }
  
    
        function doWhileLoopExample() public pure returns (uint) {
            uint sum = 0;
            uint i = 1;
  
        //Do While Loop Example
  
            do {
                sum += i;
                i++;
            } while (i <= 10);
            return sum;
        }
    }
    
  `;
};

const classesCode = (name) => {
  return `// SPDX-License-Identifier: MIT 
   pragma solidity ^0.8.0;
  
    contract ${name} {

    //Person is similar to a class with fields name and age.

      struct Person {
          string name;
          uint age;
      }
  
  
      //people is an array of Person structs, akin to an array of objects.
  
      Person[] public people;
  
      // Constructor to initialize the contract
  
      constructor() {
          // You can perform initialization here if needed
      }
  
     // Function to add a person to the array
  
      function addPerson(string memory _name, uint _age) public {
          Person memory newPerson = Person(_name, _age);
          people.push(newPerson);
      }
  
      // Function to get details of a person at a specific index
      
      function getPerson(uint index) public view returns (string memory, uint) {
          require(index < people.length, "Index out of bounds");
          return (people[index].name, people[index].age);
      }
  }
  `;
};

export { ifElsecode, loopCode, classesCode };
