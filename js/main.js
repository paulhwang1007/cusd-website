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
    });
}
