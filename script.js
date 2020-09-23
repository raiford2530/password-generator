// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to contain?");
  var d = parseInt(passwordLength);

  //Confirm and get requirements for generated password
  var specialCharacters = confirm("Click ok to include special characters.");
  var numeric = confirm("Click ok to include numeric characters.");
  var lowercase = confirm("Click ok to include lowercase characters.");
  var uppercase = confirm("Click ok to include uppercase characters.");



  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
