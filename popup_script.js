// function navigateToReactPage() {
//   alert("button is clicked");
//   console.log("React page");
//   window.location.href = "https://f787-72-73-30-138.ngrok-free.app/SignUp";
// }

// document.getElementById("signupButton").addEventListener("click", navigateToReactPage);

document.addEventListener("DOMContentLoaded", function () {
  function navigateToReactPage() {
    alert("Taking you sign in page");

    // Use chrome.tabs.update to navigate to the new URL
    chrome.tabs.update({ url: "https://f787-72-73-30-138.ngrok-free.app/SignUp" });
  }

  var signupButton = document.getElementById("signupButton");

  if (signupButton) {
    signupButton.addEventListener("click", navigateToReactPage);
  }
});
