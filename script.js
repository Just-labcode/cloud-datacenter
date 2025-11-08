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
// hamburger btn

const hamburgerContainer = document.querySelector('.hamburger-container');
const navItems = document.querySelector('.nav-links');
const navIcon = hamburgerContainer.querySelector('.material-symbols-outlined');

navIcon.addEventListener('click', () => {
  navItems.classList.toggle('active');

  if (navItems.classList.contains('active')){
    navIcon.textContent = 'close';
  }
  else{
    navIcon.textContent = 'menu';
  }
});
