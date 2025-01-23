(async function () {
  const response = await fetch("./info.json");
  const data = await response.json();

  const downloadLink = document.querySelector("[download]");
  downloadLink.textContent = `Download ${data.name} v${data.version}`;
})();
