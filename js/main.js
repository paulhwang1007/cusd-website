// Highlight Current Page Link on Nav Bar in Header
function highlightCurrentPageLink() {
  const currentPath = window.location.pathname;
  const headerLinks = document.querySelectorAll(".header-link");

  headerLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    if (
      linkPath === currentPath ||
      (currentPath === "/" && linkPath.includes("index.html"))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Load Custom Components
function loadHeader() {
  fetch("/components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      highlightCurrentPageLink();

      const links = document.querySelector("ul");
      const burger = document.querySelector(".burger-menu");
      const closeMenu = document.querySelector(".close-menu");

      burger.addEventListener("click", function () {
        links.classList.add("display");
      });

      closeMenu.addEventListener("click", function () {
        links.classList.remove("display");
      });
    });
}

function loadFooter() {
  fetch("/components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
}
