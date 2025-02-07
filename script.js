document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.contains("active");

    // Close all items
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.querySelector(".accordion-button").classList.remove("active");
      item.querySelector(".accordion-answer").style.maxHeight = null;
    });

    // Open clicked item if it was closed
    if (!isActive) {
      const answer = button.nextElementSibling;
      button.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
