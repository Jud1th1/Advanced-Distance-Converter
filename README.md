# Distance Converter
A simple web application that allows users to convert distances between miles and kilometers using a form input or keyboard shortcuts.

## Table of contents

- [Description](#description)
  - [Features](#features)
  - [How It Works](#how-it-works)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Technologies Used](#technologies-used)
  - [Project Breakdown](#project-breakdown)
  - [Usage](#usage)
  - [Future Improvements](#future-improvements)

## Description

This project is a distance conversion tool that allows users to convert between miles and kilometers. Users can toggle the conversion type by pressing K (Kilometers to Miles) or M (Miles to Kilometers). The form prevents automatic reloading, ensuring a smooth user experience.


### Features

✔ Features of the converter include:
✔ Converts miles to kilometers and vice versa
✔ Keyboard shortcuts to toggle conversion type (K for Kilometers, M for Miles)
✔ Prevents form from reloading using event.preventDefault()
✔ Input validation to ensure a number is provided
✔ Displays the converted value rounded to three decimal places


### How It Works 
This project follows best practices, using "use strict", const, and let for variable declarations. Below is a step-by-step breakdown of how the code functions:

1. Declaring Variables
At the start, the code declares key variables:
- convertType stores the current conversion mode (default is "miles").
- heading, intro, answerDiv, and form store references to elements that dynamically change based on user input.
2. Keyboard Event Listener (keydown)
- Detects when the user presses K or M.
- Updates convertType, heading, and intro text accordingly.
3. Form Submission Event Listener (submit)
- Prevents default form submission behavior using event.preventDefault().
- Retrieves user input, converts it to a floating-point number (parseFloat).
- If valid, applies the appropriate conversion formula:
  - Miles → Kilometers → distance * 1.609344
  - Kilometers → Miles → distance * 0.621371192
- Uses .toFixed(3) to round the result to three decimal places.
- Updates the answerDiv with the converted value or an error message if input is invalid.


### Screenshot

![](/screenshot.png)


### Links

- Solution URL: [https://github.com/Jud1th1/Advanced-Distance-Converter] https://github.com/Jud1th1/Advanced-Distance-Converter
- Live Site URL: [https://distanceconverter01.netlify.app/] https://distanceconverter01.netlify.app/


## My process

### Technologies Used

- HTML5
- CSS
- JavaScript (ES6)

### Project Breakdown
1. Declaring Variables
At the start, we define several key variables needed for our functionality:

  - convertType: Tracks whether we are converting miles to kilometers or kilometers to miles (default: miles).
  - heading: Targets the (h1) element to update the title dynamically.
  - intro: Targets the (p) element for updating the conversion instructions.
  - answerDiv: Targets the <div> where the result will be displayed.
  - form: Targets the <form> element to handle user input.

2. Handling Key Presses (Event Listener for Keydown)
We add an event listener that listens for keyboard input:

  - If the user presses "K", we update convertType to "kilometers", change the heading to "Kilometers to Miles Converter", and update the instructions accordingly.
  - If the user presses "M", we reset convertType to "miles", update the heading to "Miles to Kilometers Converter", and adjust the instructions.
  - We use event.code to detect which key is pressed. (Note: This replaces the now-deprecated event.which.)

3. Handling Form Submission (Event Listener for Submit)

  - We prevent the default form behavior using event.preventDefault() to stop the page from refreshing when the user submits input.
  - The user's input is retrieved using document.getElementById('distance').value and converted to a floating-point number using parseFloat(). This ensures proper calculations.
  - If a valid number is provided:
    - If converting miles to kilometers, we multiply the value by 1.609344 and round it to three decimal places using .toFixed(3).
    - If converting kilometers to miles, we multiply by 0.621371192 and round it similarly.
  - The result is displayed inside answerDiv using innerHTML.
  - If the user does not enter a valid number, we display an error message prompting them to input a value.

4. Testing & Refinements
Throughout the project, we tested our functionality to ensure a smooth user experience. Some refinements included:

  - Adding "use strict" to enforce good coding practices.
  - Using let and const instead of var for better scoping and security.
  - Ensuring all text and elements update dynamically when toggling conversion types. 

### Key Takeaways & Learnings
- Keyboard Events: Learned how to use event.code to trigger actions based on keypresses.
- Form Handling: Used event.preventDefault() to manage form submissions without refreshing the page.
- Variable Scope: Reinforced the importance of using let and const properly.
- InnerHTML Manipulation: Dynamically updated HTML elements to provide a seamless user experience.
- Error Handling: Implemented checks to ensure the user enters a valid number before performing calculations.


### Usage
1. Type a number into the input field.
2. Click the Convert button.
3. View the converted value in the result box.
4. Press K to switch to "Kilometers to Miles" mode.
5. Press M to switch to "Miles to Kilometers" mode.


### Future Improvements
- Add more unit conversions (e.g., feet to meters).
- Implement real-time conversion as the user types.
- Improve accessibility and styling.
