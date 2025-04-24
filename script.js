// === Typing Effect ===
window.addEventListener("DOMContentLoaded", () => {
  const typedText = document.querySelector(".typing");
  if (typedText) {
    typedText.style.visibility = "visible";
  }
});

// === Smooth Scroll & Scroll Highlight ===
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= scrollY + 100 &&
      section.offsetTop + section.offsetHeight > scrollY + 100
    ) {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// === Dark Mode Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Dark Mode";
  toggle.style.marginTop = "1rem";
  toggle.onclick = () => document.body.classList.toggle("dark-mode");
  document.body.insertBefore(toggle, document.body.firstChild);
});

// === Modal Popup ===
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <h3>Project Title</h3>
    <p>This is detailed project information loaded via modal.</p>
  </div>`;
document.body.appendChild(modal);
document.querySelectorAll("#projects h3").forEach(project => {
  project.style.cursor = "pointer";
  project.addEventListener("click", () => modal.style.display = "flex");
});
document.querySelector(".modal-close").onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// === Filterable Projects (Placeholder Logic) ===
// Future: Add buttons and JS to show/hide projects by category

// === Download Resume ===
const downloadBtn = document.createElement("button");
downloadBtn.className = "download-btn";
downloadBtn.textContent = "Download Resume";
downloadBtn.onclick = () => window.open("/path-to-resume.pdf", "_blank");
document.querySelector("#summary").appendChild(downloadBtn);

// === Contact Form Validation ===
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector("input[name='name']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();
    if (!name || !message) {
      e.preventDefault();
      alert("Please fill out all required fields.");
    }
  });
}
