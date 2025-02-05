document.addEventListener("DOMContentLoaded", function() {
  // Select all elements with the data-pf-type="ProductATC" attribute
  const elements = document.querySelectorAll('[data-pf-type="ProductATC"]');

  // Define the redirect URL
  const redirectUrl = "https://www.google.co.in/";

  elements.forEach((el) => {
      const rect = el.getBoundingClientRect(); // Get element's dimensions and position

      // Create the overlay element
      const overlay = document.createElement('a');
      overlay.href = redirectUrl; // Set the redirect URL for the overlay
      overlay.style.position = 'absolute';
      overlay.style.top = `${rect.top + window.scrollY}px`;
      overlay.style.left = `${rect.left + window.scrollX}px`;
      overlay.style.width = `${rect.width}px`;
      overlay.style.height = `${rect.height}px`;
      overlay.style.zIndex = '1000'; // Ensure it's on top of the element
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent background
      overlay.style.border = '2px solid #fff'; // Optional: Border for visibility

      // Append the overlay to the body
      document.body.appendChild(overlay);
  });
});


