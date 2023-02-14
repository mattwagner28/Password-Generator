// Assignment Code

//Generate Button

var generateBtn = document.querySelector("#generate");

// Arrays with different password material types
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// User specification prompt confirmations
var passwordLength = "";
var confirmNumbers;
var confirmLetters;
var confirmLettersUppercase;
var confirmSpecialChar;

// Variable that would concatenated from user specifications
var passwordMaterial = [];

//Random number generator function, which will be used throughout. From MDN. 
function randomNum (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Password generating prompts

function generatePassword () {

  var safetyChars = [];
  var selections = 0;

  var passwordLength = prompt("Choose the character length of you password. It should be bewteen 8 and 128 chracters.");
  //This is a placeholder array variable that will comprise of a one random character from each selected group to ensure at least one character of every selected group is chosen.

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Sorry, try again. The length should be bewteen 8 and 128 chracters.");
    var passwordLength = prompt("Choose the character length of you password. It should be bewteen 8 and 128 chracters.");
  }   

  confirmNumbers = confirm("Click OK to confirm if you would like to include numbers");
  confirmLetters = confirm("Click OK to confirm if you would like to include lowercase letters.");
  confirmLettersUppercase = confirm("Click OK to confirm if you would like to include uppercase letters");
  confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters.");

  if (confirmNumbers) {
    passwordMaterial = passwordMaterial.concat(numbers);
    randomDigit = [numbers[randomNum(0, numbers.length - 1)]];
    safetyChars = safetyChars.concat(randomDigit);
    var selections = 1;
  }
  if (confirmLetters) {
    passwordMaterial = passwordMaterial.concat(letters);
    randomLetter = [letters[randomNum(0, letters.length - 1)]];
    safetyChars = safetyChars.concat(randomLetter);
    selections++;
  }
  if (confirmLettersUppercase) {
    passwordMaterial = passwordMaterial.concat(lettersUppercase);
    randomLetterUppercase = [lettersUppercase[randomNum(0, lettersUppercase.length - 1)]];
    safetyChars = safetyChars.concat(randomLetterUppercase);
    selections++;
  }
  if (confirmSpecialChar) {
    passwordMaterial = passwordMaterial.concat(specialChar);
    randomSpecialChar = specialChar[[randomNum(0, specialChar.length - 1)]];
    safetyChars = safetyChars.concat(randomSpecialChar);
    selections++;
  }

  //Placeholder array variable that will accumulate random characters from the loop
  var passwordCharacters = [];

  //Loop that will iterate through the passwordMaterial array 
  for (i = 0; i < passwordLength - selections; i++) {
      var genPassword = (passwordMaterial[randomNum(0, passwordMaterial.length - 1)]);
      passwordCharacters.push(genPassword);
    
  }

passwordCharacters = passwordCharacters.concat(safetyChars);

var finalPassword = passwordCharacters.join("");

return finalPassword;
}

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


