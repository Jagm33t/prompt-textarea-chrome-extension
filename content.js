// content.js
document.addEventListener("DOMContentLoaded", function () {
  const query = chrome.extension.getBackgroundPage().query;

  const searchBox = document.querySelector(".search-input"); // Replace with the actual selector
  if (searchBox) {
    searchBox.value = query;
    
    // Optionally, trigger a search event on the input field
    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    searchBox.dispatchEvent(event);
  }

  // Create a new textarea element and set its content to the query
  const textarea = document.createElement("textarea");
  textarea.id = "prompt-textarea";
  textarea.tabIndex = 0;
  textarea.dataset.id = "root";
  textarea.rows = 1;
  textarea.placeholder = "Send a message";
  textarea.classList.add(
    "m-0",
    "w-full",
    "resize-none",
    "border-0",
    "bg-transparent",
    "py-[10px]",
    "pr-10",
    "focus:ring-0",
    "focus-visible:ring-0",
    "dark:bg-transparent",
    "md:py-4",
    "md:pr-12",
    "gizmo:md:py-3.5",
    "gizmo:placeholder-black/50",
    "gizmo:dark:placeholder-white/50",
    "pl-3",
    "md:pl-4"
  );
  textarea.style.maxHeight = "200px";
  textarea.style.height = "44px";
  textarea.style.overflowY = "hidden";
  textarea.textContent = query; // Set the content of the textarea

  // Insert the textarea element into the page
  document.body.appendChild(textarea);
});
