// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];





// function to prompt the user for password options

const generatePassword = () => {
  let passwordLength = parseInt(prompt("Enter the length of the password (10-64 characters):"));
  while (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    passwordLength = parseInt(prompt("Invalid input. Enter the length of the password (10-64 characters):"));
  }

  let hasLowercase = confirm("Include lowercase characters?");
  let hasUppercase = confirm("Include uppercase characters?");
  let hasNumeric = confirm("Include numeric characters?");
  let hasSpecial = confirm("Include special characters ($@%&*, etc)?");
  while (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
    alert("At least one character type must be selected.");
    hasLowercase = confirm("Include lowercase characters?");
    hasUppercase = confirm("Include uppercase characters?");
    hasNumeric = confirm("Include numeric characters?");
    hasSpecial = confirm("Include special characters ($@%&*, etc)?");
  }
// An empty string that will store the generated password
let password = "";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "$@%&*";
// while loop to generate the password by randomly selecting characters
while (password.length < passwordLength) {
  if (hasLowercase) password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  if (hasUppercase) password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  if (hasNumeric) password += numeric.charAt(Math.floor(Math.random() * numeric.length));
  if (hasSpecial) password += special.charAt(Math.floor(Math.random() * special.length));
}
// display the generated passowrd
alert("Generated password: " + password);
};

// bind generatePassword function to button
const generatePasswordButton = document.getElementById("generate-password-button");
generatePasswordButton.addEventListener("click", generatePassword);
