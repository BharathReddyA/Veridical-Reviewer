function handleWebPageStarClick(selectedStarIndex) {
  // Add your logic here to handle the selected star index on the web page
  // For example, you can update the webpage content or send the selected index to your server
  console.log(`Selected Star Index on Web Page: ${selectedStarIndex}`);

  // Check if the selected star index is 4
  if (selectedStarIndex === 4) {
    // Display a "Thank you" message on the webpage
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for rating this website with 4 stars!';
    document.body.appendChild(thankYouMessage);

    // Show an alert
    alert('Thanks for rating this website with 4 stars!');
  }
}

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'review_website') {
    // The selectedStarIndex is received from the popup.js
    const selectedStarIndex = request.selectedStarIndex;

    // Handle the selected star index on the web page
    handleWebPageStarClick(selectedStarIndex);
  }
});