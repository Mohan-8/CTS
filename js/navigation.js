document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = link.getAttribute("href");
      if (href) {
        window.location.href = href;
      }
    });
  });
});
