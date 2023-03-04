




// function to prompt the user for password options

const generatePassword = () => {
  let passwordLength = parseInt(prompt("Enter the length of the password (10-64 characters):"));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 64) {
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
while (password.length <= passwordLength) {
  if (hasLowercase) password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  if (hasUppercase) password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  if (hasNumeric) password += numeric.charAt(Math.floor(Math.random() * numeric.length));
  if (hasSpecial) password += special.charAt(Math.floor(Math.random() * special.length));
}
// display the generated passowrd
alert("Generated password: " + password);
document.getElementById("password").value = password
};

// bind generatePassword function to button
const generatePasswordButton = document.getElementById("generate-password-button");
generatePasswordButton.addEventListener("click", generatePassword);
