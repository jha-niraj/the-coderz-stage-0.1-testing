# Building a Calculator with React and Tailwind CSS

Follow these steps to create a basic calculator application using React and Tailwind CSS.

## Step 1: Create the Calculator Component

1. Create a new file `src/components/Calculator.tsx`.
2. Implement the basic structure of the calculator:

   ```jsx
   import React, { useState } from 'react';

   const Calculator: React.FC = () => {
     const [display, setDisplay] = useState('0');

     const handleButtonClick = (value: string) => {
       // Implement button click logic here
     };

     return (
       <div className="max-w-xs mx-auto mt-10 bg-gray-100 p-4 rounded-lg shadow-lg">
         <div className="bg-white p-4 mb-4 text-right text-2xl rounded">{display}</div>
         <div className="grid grid-cols-4 gap-2">
           {/* Add calculator buttons here */}
         </div>
       </div>
     );
   };

   export default Calculator;
   ```

## Step 2: Implement Calculator Logic

1. Update the `handleButtonClick` function to handle different button inputs.
2. Implement functions for basic arithmetic operations.
3. Add state for storing the current operation and previous value.

## Step 3: Add Calculator Buttons

1. Create a `Button` component for reusable calculator buttons.
2. Add buttons for digits 0-9, operations (+, -, *, /), decimal point, equals, and clear.

## Step 4: Style the Calculator

1. Use Tailwind CSS classes to style your calculator and make it visually appealing.
2. Ensure the layout is responsive and works well on different screen sizes.

## Step 5: Test and Refine

1. Test your calculator with various inputs and edge cases.
2. Refine the UI and UX based on your testing.
3. Consider adding additional features like keyboard support or a history of calculations.

Remember to commit your changes regularly as you progress through these steps. Good luck building your calculator!

![Calculator Example](https://via.placeholder.com/300x400.png?text=Calculator+Example)