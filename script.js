document.addEventListener("DOMContentLoaded", () => {
  const profileWrapper = document.querySelector('.profile-wrapper');
  const profileToggle  = document.getElementById('profileToggle');
  if (profileWrapper && profileToggle) {
    profileToggle.addEventListener('click', e => {
      e.stopPropagation();
      profileWrapper.classList.toggle('open');
    });
    profileWrapper.addEventListener('click', e => e.stopPropagation());
    window.addEventListener('click', () => {
      profileWrapper.classList.remove('open');
    });
  }

  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("headeritems");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  const searchBar     = document.getElementById("searchBar");
  const subjectFilter = document.getElementById("subjectFilter");
  const tutorListEl   = document.getElementById("tutorList");

  if (searchBar && subjectFilter && tutorListEl) {
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
        name: "Dr. Basel Hafiz",
        subject: "Professor",
        experience: "6 years",
        area: "Sheikh Zayed",
        contact: "https://wa.me/201009988776",
        image: "images/DrBasek.jpg"
      },
      {
        name: "Sara Something",
        subject: "Math",
        experience: "5 years",
        area: "El-Salam",
        contact: "https://wa.me/201234567890",
        image: "b14860accd9e3d0620d5177d8560c352.jpg"
      },
      {
        name: "Omar Adel",
        subject: "Physics",
        experience: "6 years",
        area: "Sheikh Zayed",
        contact: "https://wa.me/201009988776",
        image: "6ef08cab9f27ce760e5629af8e5e4035.jpg"
      }
    ];

    function loadTutors(list = tutors) {
      renderTutorCards(list);
    }

    function populateFilterOptions() {
      const subjects = [...new Set(tutors.map(t => t.subject))];
      subjectFilter.innerHTML =
        `<option value="">All Subjects</option>` +
        subjects.map(s => `<option value="${s}">${s}</option>`).join("");
    }

    function applyFilters() {
      const term    = searchBar.value.toLowerCase();
      const subject = subjectFilter.value;
      const filtered = tutors.filter(t => {
        const matchesText = [t.name, t.subject, t.area]
          .some(field => field.toLowerCase().includes(term));
        const matchesSubj = subject === "" || t.subject === subject;
        return matchesText && matchesSubj;
      });
      loadTutors(filtered);
    }

    function renderTutorCards(arr) {
      tutorListEl.innerHTML = "";
      arr.forEach(tutor => {
        const card = document.createElement("div");
        card.className = "tutor-card";
        card.innerHTML = `
          <img src="${tutor.image}" class="tutor-img" alt="${tutor.name}">
          <div class="tutor-info">
            <h2>${tutor.name}</h2>
            <p><strong>Subject:</strong> ${tutor.subject}</p>
            <p><strong>Experience:</strong> ${tutor.experience}</p>
            <p><strong>Area:</strong> ${tutor.area}</p>
            <a class="contact-btn" href="${tutor.contact}" target="_blank">
              Contact via WhatsApp
            </a>
          </div>
        `;
        card.addEventListener('click', e => {
          if (!e.target.closest('.contact-btn')) {
            window.location.href = 'tutor.html';
          }
        });
        tutorListEl.appendChild(card);
      });
    }

    loadTutors();
    populateFilterOptions();
    searchBar.addEventListener("input", applyFilters);
    subjectFilter.addEventListener("change", applyFilters);
  }
});
