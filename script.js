document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("header nav a");

  const activateMenuAtCurrentSection = () => {
    const fromTop = window.scrollY + 80; // 80 é um offset para a altura do header

    sections.forEach((section) => {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        // Remove a classe 'active' de todos os links
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Adiciona a classe 'active' ao link correspondente
        const correspondingLink = document.querySelector(
          `header nav a[href*=${section.id}]`
        );
        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  };

  window.addEventListener("scroll", activateMenuAtCurrentSection);
});