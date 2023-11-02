document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value;

  // Create a new window with the ChatGPT homepage
  const newWindow = window.open("https://chat.openai.com/", "_blank");

  // Wait for the new window to load and then fill in the textarea
  newWindow.onload = function () {
    const textarea = newWindow.document.getElementById("prompt-textarea");

    if (textarea) {
      textarea.value = query;
    }

    // Find the form and submit it (if it exists)
    const form = newWindow.document.querySelector("form.stretch"); // Use the provided form selector
    if (form) {
      form.submit();
    }
  };
});
