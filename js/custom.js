    document.addEventListener("DOMContentLoaded", function () {
      const toggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector(".main-nav");

      toggle.addEventListener("click", function () {
        nav.classList.toggle("active");
      });

      // Close menu after clicking a link
      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("active");
        });
      });
    });

document.addEventListener('DOMContentLoaded', function () {

    const openSearch = document.getElementById('open-search');
    const closeSearch = document.getElementById('close-search');
    const searchPopup = document.getElementById('search-popup');

    if (openSearch) {
        openSearch.addEventListener('click', function () {
            searchPopup.classList.add('active');
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', function () {
            searchPopup.classList.remove('active');
        });
    }

});