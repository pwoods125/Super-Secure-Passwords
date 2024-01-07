// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1.Prompt the password criteria
  //   a) prompt the length of characters. Characters must be between 8-128.
  var pwlengthOption = prompt("How many characters would you like the password to have?");
  pwlengthOption = parseInt(pwlengthOption);
  if (pwlengthOption <=7 || pwlengthOption >= 129) {
    alert("Note: Password must be between 8 and 128 characters long!");
    return "";
  } 
  
  if (isNaN (pwlengthOption)) {
    alert("Note: Only number characters are permitted! Please try again!");
    return "";
  }

  //   b)Confirm confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //      -input should be validated and at least one character type should be selected
  var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
  var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  var numeric = ["0123456789"]
  var symb = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
  var characterSelect = "";

  var lowercaseOption = confirm("Should the password contain lowercase letters?");
  if (lowercaseOption) {
    characterSelect += lowercase;
  }
  
  var uppercaseOption = confirm("Should the password contain uppercase letters?");
  if (uppercaseOption) {
    characterSelect += uppercase;
  }
  var numericOption = confirm("Should the password contain numbers?");
  if (numericOption) {
    characterSelect += numeric;
  }
  var symbolOption = confirm("Should the password contain special characters?");
  if (symbolOption) {
    characterSelect += symb;
  }

  // 3.password is generated that matches the selected criteria
  var password = ""
 for (var i = 0; i < pwlengthOption; i++){
      var pwRandomize = Math.floor(Math.random() * characterSelect.length);
      password += characterSelect.charAt(pwRandomize);
  }

  // 4.password is either displayed in an alert or written to the page
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
