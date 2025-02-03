document.addEventListener("DOMContentLoaded", function () {
  let atcButtons = document.querySelectorAll("[ProductATC]"); // Select all elements with the ProductATC attribute

  atcButtons.forEach(function(atcButton) {
    let overlay = document.createElement("a");

    // Match button size and position
    let rect = atcButton.getBoundingClientRect();
    overlay.style.position = "absolute";
    overlay.style.width = rect.width + "px";
    overlay.style.height = rect.height + "px";
    overlay.style.top = rect.top + window.scrollY + "px";
    overlay.style.left = rect.left + window.scrollX + "px";
    overlay.style.background = "rgba(0, 0, 0, 0.3)"; // Semi-transparent black background
    overlay.style.cursor = "pointer";
    overlay.style.zIndex = "10";

    overlay.href = "https://www.amazon.in/gp/cart/view.html?ref_=nav_cart"; // Amazon cart link
    overlay.target = "_self"; // Open in the same tab

    document.body.appendChild(overlay);
  });
});
