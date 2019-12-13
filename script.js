// Assignment Code



alert("Hello! This is a password generator.  I just need you to answer a few questions about the type of password.");

// While to determine length
while (length < 8 || length > 128 || isNaN(length)) {
  var length = prompt("The length can be between 8-128 characters.  How long would you like it?");
  if (length < 8 || length > 128) {
    alert("Keep it between 8 and 128.");
  };
  if (isNaN(length)) {
    alert("Please chose a number.")
  };
};

// While to determine which characters to use
while (special != true && numeric != true && lower != true && upper != true) {
  var special = confirm("Would you like special characters?  i.e. ! # $ \n(Press OK for yes and Cancel for no)");
  var numeric = confirm("Would you like numeric characters?  i.e. 1 2 3\n(Press OK for yes and Cancel for no)");
  var lower = confirm("Would you like to use lower case characters?  i.e. a b c\n(Press OK for yes and Cancel for no)");
  var upper = confirm("Would you like to use upper case characters?  i.e. A B C\n(Press OK for yes and Cancel for no)");

  // variable to hold all of the characters that they have agreed can be used
  var passwordOptions = [];

  // If to make sure they picked at least one
  if (special != true && numeric != true && lower != true && upper != true) {
    alert("Please choose at least one option.")
  }

  // series of ifs to add the characters to our full list, passwordOptions
  if (special) {
    passwordOptions = passwordOptions.concat("!", "(", ")", "-", ".", "?", "[", "]", "_", "'", "~", ";", ":", "@", "#", "$", "%", "^", "&", "*", "+", "+");
  };

  if (numeric) {
    passwordOptions = passwordOptions.concat("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  };

  if (lower) {
    passwordOptions = passwordOptions.concat("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }

  if (upper) {
    passwordOptions = passwordOptions.concat("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }

}

// function to attach to the generate button
function generatePassword() {

  // variable to hold the password we will make
  var buildPassword = [];

  // loop to build the password one letter at a time
  for (var i = 0; i < length; i++) {
    // variable for the current character we are going to randomize
    var currentOption = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    // adding the current character on to the end of buildPassword
    buildPassword = buildPassword.concat(currentOption);
  }

  // taking the spaces out of buildPassword
  var password = buildPassword.join("");

  // prints the password in the password area
  document.getElementById("password").value = password;

}


// copy function, googled it
function copyFunction() {

  // creates a variable that calls the password area
  var copyText = document.getElementById("password");
  // selects the content
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  // copies it to clipboard
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}