const button = document.querySelector("#submitButton");

button.addEventListener("click", clickListener);

function clickListener(event) {
  event.preventDefault(); // when someone clicks on the button, the page will no longer refresh.
  // this is how we prevent the default functionality - where the page is reloaded everytime a user clicks on the submit button

  // we are grabbing the input element with the id "username"
  const inputElement = document.getElementById("username");

  const userInput = inputElement.value;
  // the value property is whatever text is in the input box.

  alert(userInput);
  // open an alert window and show me the text that's inside of the input box!
}

button.addEventListener("click", function (e) {
  console.log(e);
});
