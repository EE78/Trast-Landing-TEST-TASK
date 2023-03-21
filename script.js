let catalog = document.getElementById("catalog");

document.getElementById("showCatalog").addEventListener("click", () => {
  catalog.style.display =
    getComputedStyle(catalog).display === "none" ? "flex" : "none";
});
