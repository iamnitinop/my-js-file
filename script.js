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


//new
document.addEventListener("DOMContentLoaded", function () {
  // Select all "Add to Cart" buttons
  const buttons = document.querySelectorAll('[data-pf-type="ProductATC"]');
  const redirectUrl = "https://www.google.co.in/";

  buttons.forEach((button) => {
      function positionOverlay() {
          const rect = button.getBoundingClientRect();
          const overlay = button.parentNode.querySelector(".custom-overlay");

          if (!overlay) {
              // Create overlay only if it doesn't exist
              const newOverlay = document.createElement("a");
              newOverlay.href = redirectUrl;
              newOverlay.classList.add("custom-overlay");
              newOverlay.style.position = "absolute";
              newOverlay.style.zIndex = "1000";
              newOverlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Fully transparent
              newOverlay.style.cursor = "pointer"; // Ensures clicks work

              button.parentNode.appendChild(newOverlay);
              positionOverlay(); // Position it after adding
          } else {
              // Update position dynamically
              overlay.style.top = `${rect.top + window.scrollY}px`;
              overlay.style.left = `${rect.left + window.scrollX}px`;
              overlay.style.width = `${rect.width}px`;
              overlay.style.height = `${rect.height}px`;
          }
      }

      positionOverlay(); // Initial positioning

      // Reposition overlay on window resize or scroll
      window.addEventListener("resize", positionOverlay);
      window.addEventListener("scroll", positionOverlay);
  });
});
