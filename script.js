const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const tags = card.dataset.tags.split(" ");
      card.classList.toggle("hidden", filter !== "all" && !tags.includes(filter));
    });
  });
});

document.querySelector(".menu-btn")?.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  if (nav.style.display === "flex") {
    nav.style.position = "absolute";
    nav.style.top = "74px";
    nav.style.left = "12px";
    nav.style.right = "12px";
    nav.style.padding = "16px";
    nav.style.background = "#0d1916";
    nav.style.border = "1px solid #20342e";
    nav.style.borderRadius = "16px";
    nav.style.flexDirection = "column";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
