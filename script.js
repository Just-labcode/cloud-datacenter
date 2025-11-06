document.querySelectorAll(".open-modal").forEach((btn, index) => {
  const modal = document.querySelectorAll(".modal-container")[index];
  const closeBtn = modal.querySelector(".close-btn");

  btn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Close modal when clicking outside content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
