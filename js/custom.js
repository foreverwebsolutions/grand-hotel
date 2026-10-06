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

document.addEventListener("DOMContentLoaded", async function () {

    const results = document.getElementById("search-results");
    const params = new URLSearchParams(window.location.search);
    const keyword = params.get("q");

    if (!keyword) {
        results.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    const pages = [
        "index.html",
        "about.html",
        "contact.html",
        "faq.html",
        "your-room.html",
        "blog.html",
        "terms.html",
        "privacy.html"
    ];

    const searchText = keyword.toLowerCase();
    let matches = [];

    for (const page of pages) {
        try {
            const response = await fetch(page);
            const html = await response.text();

            const doc = new DOMParser().parseFromString(html, "text/html");
            const text = doc.body.innerText;

            if (text.toLowerCase().includes(searchText)) {

                let title = doc.title || page;

                // Matching text ke around se short description
                const index = text.toLowerCase().indexOf(searchText);
                let description = text.substring(
                    Math.max(0, index - 80),
                    index + 180
                );

                matches.push({
                    title,
                    url: page,
                    description
                });
            }

        } catch (error) {
            console.log("Error loading:", page);
        }
    }

    let output = `<h2>Search Results for "${keyword}"</h2>`;

    if (matches.length === 0) {

        output += `<p>No results found for "${keyword}".</p>`;

    } else {

        matches.forEach(result => {

            output += `
                <div class="search-result">
                    <h3>
                        <a href="${result.url}">
                            ${result.title}
                        </a>
                    </h3>
                    <p>${result.description}...</p>
                </div>
            `;

        });
    }

    results.innerHTML = output;
});