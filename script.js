// document.addEventListener("DOMContentLoaded", function() {
//   // Select all elements with the data-pf-type="ProductATC" attribute
//   const elements = document.querySelectorAll('[data-pf-type="ProductATC"]');

//   // Define the redirect URL
//   const redirectUrl = "https://www.google.co.in/";

//   elements.forEach((el) => {
//       const rect = el.getBoundingClientRect(); // Get element's dimensions and position

//       // Create the overlay element
//       const overlay = document.createElement('a');
//       overlay.href = redirectUrl; // Set the redirect URL for the overlay
//       overlay.style.position = 'absolute';
//       overlay.style.top = `${rect.top + window.scrollY}px`;
//       overlay.style.left = `${rect.left + window.scrollX}px`;
//       overlay.style.width = `${rect.width}px`;
//       overlay.style.height = `${rect.height}px`;
//       overlay.style.zIndex = '1000'; // Ensure it's on top of the element
//       overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent background
//       overlay.style.border = '2px solid #fff'; // Optional: Border for visibility

//       // Append the overlay to the body
//       document.body.appendChild(overlay);
//   });
// });


////////////new
document.addEventListener("DOMContentLoaded", function () {
  // Select all "Add to Cart" buttons
  const buttons = document.querySelectorAll('[data-pf-type="ProductATC"]');
  const redirectUrl = "https://www.google.co.in/";

  buttons.forEach((button) => {
    // Ensure the parent container has position: relative
    const parent = button.closest('.product-container'); // Adjust this selector if needed
    parent.style.position = 'relative';

    // Create overlay
    const overlay = document.createElement('a');
    overlay.href = redirectUrl;
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '1000';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; // Fully transparent

    // Append the overlay inside the parent
    button.style.position = 'relative'; // Ensure button stays in place
    button.appendChild(overlay);

    // Adjust on window resize
    window.addEventListener("resize", function () {
      overlay.style.width = `${button.offsetWidth}px`;
      overlay.style.height = `${button.offsetHeight}px`;
    });
  });
});
