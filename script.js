// ==========================
// Part 1: Date Display
// ==========================

// TODO:

// 1. Create a Date object
var currentDate = new Date();

// 2. Get the current month, day, and year
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var year = currentDate.getFullYear();

// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
if (month < 10) {
  month = "0" + month;
} else {
  month = String(month);
}

if (day < 10) {
  day = "0" + day;
} else {
  day = String(day);
}

// 5. Create a string in the format: "Today is MM/DD/YYYY"
var formattedDate = "Today is " + month + "/" + day + "/" + year;

// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = formattedDate;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
var valueOne = "85";
var valueTwo = "24.25";
var valueThree = "world";
var valueFour = "9000";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()
var convertedOne = Number(valueOne);
var convertedTwo = Number(valueTwo);
var convertedThree = Number(valueThree);
var convertedFour = Number(valueFour);

var valueOneIsNaN = Number.isNaN(convertedOne);
var valueTwoIsNaN = Number.isNaN(convertedTwo);
var valueThreeIsNaN = Number.isNaN(convertedThree);
var valueFourIsNaN = Number.isNaN(convertedFour);

var valueOneIsInteger = Number.isInteger(convertedOne);
var valueTwoIsInteger = Number.isInteger(convertedTwo);
var valueThreeIsInteger = Number.isInteger(convertedThree);
var valueFourIsInteger = Number.isInteger(convertedFour);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

var valueOneMessage = "";
if (valueOneIsNaN) {
  valueOneMessage = "This value is not a valid number.";
} else {
  valueOneMessage = "This value is a valid number.";
}

var valueTwoMessage = "";
if (valueTwoIsInteger) {
  valueTwoMessage = "This value is an integer.";
} else {
  valueTwoMessage = "This value is not an integer.";
}

var valueThreeMessage = "";
if (valueThreeIsNaN) {
  valueThreeMessage = "This value is not a valid number.";
} else {
  valueThreeMessage = "This value is a valid number.";
}

var valueFourMessage = "";
if (valueFourIsInteger) {
  valueFourMessage = "This value is an integer.";
} else {
  valueFourMessage = "This value is not an integer.";
}

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

var conversionResults = "";
conversionResults += "<p>Original value: \"" + valueOne + "\" &rarr; Converted: " + convertedOne + " &rarr; isNaN: " + valueOneIsNaN + " &rarr; isInteger: " + valueOneIsInteger + "<br>" + valueOneMessage + "</p>";
conversionResults += "<p>Original value: \"" + valueTwo + "\" &rarr; Converted: " + convertedTwo + " &rarr; isNaN: " + valueTwoIsNaN + " &rarr; isInteger: " + valueTwoIsInteger + "<br>" + valueTwoMessage + "</p>";
conversionResults += "<p>Original value: \"" + valueThree + "\" &rarr; Converted: " + convertedThree + " &rarr; isNaN: " + valueThreeIsNaN + " &rarr; isInteger: " + valueThreeIsInteger + "<br>" + valueThreeMessage + "</p>";
conversionResults += "<p>Original value: \"" + valueFour + "\" &rarr; Converted: " + convertedFour + " &rarr; isNaN: " + valueFourIsNaN + " &rarr; isInteger: " + valueFourIsInteger + "<br>" + valueFourMessage + "</p>";

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = conversionResults;


// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
var homeworkScore = 88;
var quizScore = 92;
var examScore = 81;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
var totalScore = homeworkScore + quizScore + examScore;
var averageScore = totalScore / 3;

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
var averageScoreFormatted = averageScore.toFixed(2);

// 4. Build a string showing your results
var gradeMessage = "";
if (averageScore >= 70) {
  gradeMessage = "Passing";
} else {
  gradeMessage = "Not passing";
}

var mathResults = "";
mathResults += "<p>Homework score: " + homeworkScore + "</p>";
mathResults += "<p>Quiz score: " + quizScore + "</p>";
mathResults += "<p>Exam score: " + examScore + "</p>";
mathResults += "<p>Total score: " + totalScore + "</p>";
mathResults += "<p>Average score: " + averageScoreFormatted + "</p>";
mathResults += "<p>Result: " + gradeMessage + "</p>";

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements -> implemented in line 82-107
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition -> line 150-154 implements this 
//    (append it to an existing section or create a new message)
