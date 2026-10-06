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

document.addEventListener("DOMContentLoaded", function () {

    const openSearch = document.getElementById("open-search");
    const closeSearch = document.getElementById("close-search");
    const popup = document.getElementById("search-popup");
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");

    if (openSearch) {
        openSearch.addEventListener("click", function () {
            popup.classList.add("active");
            input.focus();
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener("click", function () {
            popup.classList.remove("active");
        });
    }

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const keyword = input.value.trim();

            if (!keyword) return;

            window.location.href =
                "search.html?q=" + encodeURIComponent(keyword);
        });
    }

});