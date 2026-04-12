(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector(".page-header");
  const headerLink = header ? header.querySelector("a[href]") : null;
  const nav = document.querySelector("ul");
  const navLinks = document.querySelectorAll("ul a[href]");
  const firstNavLink = nav ? nav.querySelector("li a[href]") : null;
  const projectPages = new Set([
    "projects.html",
    "projectsen.html",
    "B easy.html",
    "B easyen.html",
    "Mileworld1.html",
    "Mileworld1en.html",
    "TJUracing.html",
    "TJUracingen.html"
  ]);
  const hobbiesPages = new Set(["hobbies.html", "hobbiesen.html"]);
  const contactPages = new Set(["contact.html", "contacten.html"]);

  if (nav && firstNavLink && !nav.querySelector(".nav-logo")) {
    const logoItem = document.createElement("li");
    const logoLink = document.createElement("a");
    const logoImg = document.createElement("img");
    logoItem.className = "nav-logo";
    logoLink.href = firstNavLink.getAttribute("href");
    logoLink.setAttribute("aria-label", "Homepage");
    logoImg.src = "图片/水印.png";
    logoImg.alt = "Personal logo";
    logoLink.appendChild(logoImg);
    logoItem.appendChild(logoLink);
    nav.insertBefore(logoItem, nav.firstChild);
  }

  if (nav && headerLink && !nav.querySelector(".nav-lang")) {
    const langItem = document.createElement("li");
    const langLink = document.createElement("a");
    langItem.className = "nav-lang";
    langLink.href = headerLink.getAttribute("href");
    langLink.textContent = headerLink.textContent.trim();
    langItem.appendChild(langLink);
    nav.appendChild(langItem);
    header.classList.add("is-integrated");
  }

  let activeHref = path;
  if (projectPages.has(path) && path !== "projectsen.html") {
    activeHref = "projects.html";
  } else if (path === "projectsen.html") {
    activeHref = "projectsen.html";
  } else if (hobbiesPages.has(path)) {
    activeHref = path;
  } else if (contactPages.has(path)) {
    activeHref = path;
  } else if (path === "index.html" || path === "indexen.html") {
    activeHref = path;
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === activeHref) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
})();
