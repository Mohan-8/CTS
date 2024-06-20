document.addEventListener("DOMContentLoaded", () => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQmKFcoyBpvfcHgdcA7-RD0zEbOe_Pd9otxOZa393C5IElo5Dx0TRmlp9_pSn4uZkoWxaMsvpsLpQvH/pub?gid=0&single=true&output=csv";

  fetch(csvUrl)
    .then((response) => response.text())
    .then((data) => {
      const rows = data.split("\n").map((row) => row.split(","));
      const normalizedRows = normalizeData(rows);
      createTable(normalizedRows);
    })
    .catch((error) => console.error("Error fetching CSV data:", error));
});

function normalizeData(data) {
  const normalizedData = [];
  let tempRow = [];

  data.forEach((row, index) => {
    if (row.length >= 7) {
      if (tempRow.length > 0) {
        normalizedData.push(tempRow);
        tempRow = [];
      }
      tempRow = row.map((cell) => cell.replace("\r", "").trim());
    } else {
      tempRow[tempRow.length - 1] += `, ${row[0].replace("\r", "").trim()}`;
    }
  });

  if (tempRow.length > 0) {
    normalizedData.push(tempRow);
  }

  return normalizedData;
}

function createTable(data) {
  const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");

  data.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");

    row.forEach((cell, cellIndex) => {
      const cellElement =
        rowIndex === 0
          ? document.createElement("th")
          : document.createElement("td");
      cellElement.textContent = cell;
      tr.appendChild(cellElement);
    });

    table.appendChild(tr);
  });

  tableContainer.appendChild(table);
}
