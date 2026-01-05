// Update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

const modal = document.getElementById("store-modal");
const closeBtn = document.querySelector(".modal-close");
const backdrop = document.querySelector(".modal-backdrop");

function openModal(event) {
  event.preventDefault();
  if (modal) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
}

document.querySelectorAll(".store-btn").forEach((btn) => {
  btn.addEventListener("click", openModal);
});

closeBtn?.addEventListener("click", closeModal);
backdrop?.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("open")) {
    closeModal();
  }
});
