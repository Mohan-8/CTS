document.addEventListener("DOMContentLoaded", () => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTW9LR7ScIs8Id-jhth5EJxlJ0xd8jxpc6jBcb7u83C7DrH162b86USu-kHkQAOs-rYW4U98MBpcWld/pub?gid=0&single=true&output=csv";

  fetch(csvUrl)
    .then((response) => response.text())
    .then((data) => {
      const rows = data.split("\n").map((row) => row.split(","));
      createTable(rows);
    })
    .catch((error) => console.error("Error fetching CSV data:", error));
});

function createTable(data) {
  const tableContainer = document.querySelector(".Past-events");
  const table = document.createElement("table");

  data.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");

    row.forEach((cell, cellIndex) => {
      const cellElement =
        rowIndex === 0
          ? document.createElement("th")
          : document.createElement("td");
      if (cellIndex === row.length - 1 && rowIndex > 0) {
        cellElement.textContent = cell;
        tr.appendChild(cellElement);
      } else {
        cellElement.textContent = cell.trim();
        tr.appendChild(cellElement);
      }
    });

    table.appendChild(tr);
  });

  tableContainer.appendChild(table);
}
