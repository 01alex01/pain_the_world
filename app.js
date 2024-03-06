// Get all elements with the class 'open-popup'
const openPopupButtons = document.querySelectorAll(".open-popup");

// Attach event listener to each button
openPopupButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".popup").style.display = "block";
  });
});

document.querySelector(".close-popup").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

document
  .getElementById("paypal-account")
  .addEventListener("click", function () {
    // Get the text to copy
    var accountNumber = this.innerText;

    // Create a temporary textarea element
    var textarea = document.createElement("textarea");
    textarea.value = accountNumber;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea element
    document.body.removeChild(textarea);

    // Alert the user that the text has been copied
    alert("paypal Account copied to clipboard: " + accountNumber);
  });
