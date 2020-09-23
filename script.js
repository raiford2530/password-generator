// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to contain?"
  );
  var d = parseInt(passwordLength);

  //Confirm and get requirements for generated password
  var specialCharacters = confirm("Click ok to include special characters.");
  var numeric = confirm("Click ok to include numeric characters.");
  var lowercase = confirm("Click ok to include lowercase characters.");
  var uppercase = confirm("Click ok to include uppercase characters.");

  var characters = "";
  var password = "";

  //Add lowercase letters to characters to include in generated password
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  //Add uppercase letters to characters to include in generated password
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  //Add numbers to characters to include in generated password
  if (numeric) {
    characters += "123457890";
  }

  //Add special symbols to characters to include in generated password
  if (specialCharacters) {
    characters += " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }

  for(var i = 0; i < passwordLength; i++){
  
    //Get random number to represent an index that is in the range of the characters string
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
