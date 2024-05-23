document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".nav__conatiner");
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".navbar__list__item__link");
  const lyuboy = navbar.offsetTop;

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      links.forEach((notHover) => {
        if (notHover !== link) {
          notHover.style.opacity = "0.4";
        } else {
          notHover.style.opacity = "1";
          link.style.transform = "scale(1.1)";
        }
      });
    });

    link.addEventListener("mouseleave", () => {
      links.forEach((notHover) => {
        notHover.style.opacity = "1";
        notHover.style.transform = "scale(1)";
      });
    });
  });

  const handleScroll = () => {
    if (window.pageYOffset > lyuboy) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section, index) => {
    if (index % 3 === 0) {
      section.classList.add("section-left");
    } else if (index % 3 === 1) {
      section.classList.add("section-right");
    } else {
      section.classList.add("section-bottom");
    }
    observer.observe(section);
  });

  window.addEventListener("scroll", handleScroll);
});
