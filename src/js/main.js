const cards = document.querySelectorAll(".project-card");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.getElementById("close-modal");

cards.forEach(card => {
    card.addEventListener("click", () => {

        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;

        modal.classList.remove("hidden");
        modal.classList.add("flex");
    });
});

closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }

});


document.querySelector('[style*="grid-template-columns:1fr 1fr"]').id = 'hero-grid';
const fullName = "Muhammad Farrel Satrya Ganendra";
let i = 0;
const nameEl = document.getElementById('typed-name');
  function type() {
    if (i <= fullName.length) {
      nameEl.textContent = fullName.slice(0, i++);
      setTimeout(type, i < 8 ? 90 : 65);
    } else {
      document.querySelectorAll('.tag-row').forEach(r => {
        r.style.opacity = '1';
        r.style.transform = 'translateX(0)';
      });
    }
  }
setTimeout(type, 400);