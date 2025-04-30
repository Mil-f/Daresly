const tutors = [
  {
    name: "Ahmed Youssef",
    subject: "Math",
    experience: "5 years",
    area: "El-Salam",
    contact: "https://wa.me/201234567890",
    image: "b14860accd9e3d0620d5177d8560c352.jpg"
  },
  {
    name: "Mona Ibrahim",
    subject: "English",
    experience: "3 years",
    area: "Garden City",
    contact: "https://wa.me/201112223344",
    image: "c6b316eb68d92fbfe65ec32c9d0b6313.jpg"
  },
  {
    name: "Hassan Mahmoud",
    subject: "Physics",
    experience: "6 years",
    area: "Sheikh Zayed",
    contact: "https://wa.me/201009988776",
    image: "6ef08cab9f27ce760e5629af8e5e4035.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  loadTutors();

  const toggle = document.getElementById('profileToggle');
  const dropdown = document.getElementById('profileDropdown');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  });

  window.addEventListener('click', () => {
    dropdown.style.display = 'none';
  });

  document.getElementById("searchBar").addEventListener("input", filterTutors);
});

function loadTutors() {
  renderTutorCards(tutors);
}

function renderTutorCards(tutorArray) {
  const container = document.getElementById("tutorList");
  container.innerHTML = "";
  tutorArray.forEach(tutor => {
    const card = document.createElement("div");
    card.className = "tutor-card";
    card.innerHTML = `
      <img src="${tutor.image}" class="tutor-img" alt="${tutor.name}">
      <div class="tutor-info">
        <h2>${tutor.name}</h2>
        <p><strong>Subject:</strong> ${tutor.subject}</p>
        <p><strong>Experience:</strong> ${tutor.experience}</p>
        <p><strong>Area:</strong> ${tutor.area}</p>
        <a class="contact-btn" href="${tutor.contact}" target="_blank">Contact via WhatsApp</a>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterTutors() {
  const search = document.getElementById("searchBar").value.toLowerCase();
  const filtered = tutors.filter(tutor =>
    tutor.name.toLowerCase().includes(search) ||
    tutor.subject.toLowerCase().includes(search) ||
    tutor.area.toLowerCase().includes(search)
  );
  renderTutorCards(filtered);
}
