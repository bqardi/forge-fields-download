(async function () {
  const response = await fetch("./info.json");
  const data = await response.json();

  const downloadLink = document.querySelector("[download]");
  downloadLink.textContent = `Download ${data.name} v${data.version}`;
})();

// Mobile menu
(function () {
  const menuButton = document.querySelector("[aria-controls=mobile-menu]");
  const menu = document.querySelector("#mobile-menu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
})();
