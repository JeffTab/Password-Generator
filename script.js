// Assignment Code



alert("Hello! This is a password generator.  I just need you to answer a few questions about the type of password.");


while (length < 8 || length > 128 || isNaN(length)) {
  var length = prompt("The length can be between 8-128 characters.  How long would you like it?");
  if (length < 8 || length > 128) {
    alert("Keep it between 8 and 128.");
  };
  if (isNaN(length)) {
    alert("Please chose a number.")
  };
};
while (special != true && numeric != true && lower != true && upper != true) {
  var special = confirm("Would you like special characters?  i.e. ! # $ \n(Press OK for yes and Cancel for no)");
  var numeric = confirm("Would you like numeric characters?  i.e. 1 2 3\n(Press OK for yes and Cancel for no)");
  var lower = confirm("Would you like to use lower case characters?  i.e. a b c\n(Press OK for yes and Cancel for no)");
  var upper = confirm("Would you like to use upper case characters?  i.e. A B C\n(Press OK for yes and Cancel for no)");

  var passwordOptions = [];

  if (special != true && numeric != true && lower != true && upper != true) {
    alert("Please choose at least one option.")
  }

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

function generatePassword() {

  var buildPassword = [];

  for (var i = 0; i < length; i++) {

    var currentOption = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    buildPassword = buildPassword.concat(currentOption);


  }

  var password = buildPassword.join("");

  document.getElementById("password").value = password;

  // document.getElementById("generate").addEventListener("click", function () {
  //   document.getElementById("password").innerHTML = password;
  // });

}



function copyFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}