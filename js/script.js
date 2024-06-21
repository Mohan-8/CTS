//kural
document.addEventListener("DOMContentLoaded", function () {
  const thirukuralElement = document.getElementById("thirukural-display");
  const porulElement = document.querySelector(
    ".elementor-element-9485a45 .elementor-widget-container p"
  );

  fetch(
    "https://npiet7akygrye80z.public.blob.vercel-storage.com/kural-xoZNKr6WSOIg6osfB5Cp2vqv2Csl3J.json"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch kural.json: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const thirukurals = data.kural.map((kural) => {
        return {
          lines: `${kural.Line1} ${kural.Line2}`,
          mv: kural.mv,
          sp: kural.sp,
          mk: kural.mk,
        };
      });

      const today = new Date();
      const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
      );
      const kuralOfTheDay = thirukurals[dayOfYear % thirukurals.length];

      function typeText(element, text, speed) {
        let index = 0;
        function type() {
          if (index < text.lines.length) {
            element.innerHTML += text.lines.charAt(index);
            index++;
            setTimeout(type, speed);
          }
        }
        type();
      }

      typeText(thirukuralElement, kuralOfTheDay, 100);
      porulElement.textContent = `${kuralOfTheDay.mv}\n ${kuralOfTheDay.sp}\n ${kuralOfTheDay.mk}`;
    })
    .catch((error) => {
      console.error("Error fetching or parsing kural.json:", error);
      thirukuralElement.textContent = "Unable to fetch or parse kural.json";
    });
});

//calender
document.addEventListener("DOMContentLoaded", async function () {
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let events = [];

  async function fetchEventsFromCSV() {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTp8aEbShmTpyO2D6Rq2l89s6uiQFWP_4nUpyoPTNgwD6n1B92G9jZd0E1avSCm48HLDesY3KhJdlm0/pub?gid=1947224701&single=true&output=csv";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const csvData = await response.text();
      events = parseCSV(csvData);
      generateCalendar(currentMonth, currentYear);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  function parseCSV(csvData) {
    const lines = csvData.split("\n").slice(1);
    return lines.map((line) => {
      const columns = line.split(",");
      return {
        date: columns[1].trim(),
        description: columns[2].trim(),
        place: columns[4] ? columns[4].trim() : "yet to define",
        time: columns[3] ? columns[3].trim() : "yet to define",
      };
    });
  }

  function generateCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    const monthName = document.querySelector(".month-name");
    monthName.textContent = new Date(year, month).toLocaleDateString("en-us", {
      month: "long",
      year: "numeric",
    });

    const daysContainer = document.querySelector(".days-container");
    daysContainer.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement("div");
      daysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const newDay = document.createElement("div");
      newDay.textContent = day;
      daysContainer.appendChild(newDay);

      const eventsForDay = events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === year &&
          eventDate.getMonth() === month &&
          eventDate.getDate() === day
        );
      });

      if (eventsForDay.length > 0) {
        const eventList = document.createElement("ul");
        eventList.classList.add("event-list");
        eventsForDay.forEach((event) => {
          const eventItem = document.createElement("li");
          const eventLink = document.createElement("a");
          eventLink.href = `event-details.html?date=${encodeURIComponent(
            event.date
          )}&time=${encodeURIComponent(
            event.time
          )}&description=${encodeURIComponent(
            event.description
          )}&place=${encodeURIComponent(event.place)}`;
          eventLink.innerHTML = `<strong>${event.description}</strong><br/>at ${event.time}`;
          eventItem.appendChild(eventLink);
          eventList.appendChild(eventItem);
        });
        newDay.appendChild(eventList);
      }

      if (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate()
      ) {
        newDay.classList.add("today");
      }
    }
  }

  document.querySelector(".prev").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
  });

  document.querySelector(".next").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
  });

  await fetchEventsFromCSV();
});
//table view
document.addEventListener("DOMContentLoaded", async function () {
  let events = [];

  async function fetchEventsFromCSV() {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTp8aEbShmTpyO2D6Rq2l89s6uiQFWP_4nUpyoPTNgwD6n1B92G9jZd0E1avSCm48HLDesY3KhJdlm0/pub?gid=1947224701&single=true&output=csv";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const csvData = await response.text();
      events = parseCSV(csvData);
      populateEventTable(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  function parseCSV(csvData) {
    const lines = csvData.split("\n").slice(1);
    return lines.map((line) => {
      const columns = line.split(",");
      return {
        date: columns[1].trim(),
        description: columns[2].trim(),
        place: columns[4] ? columns[4].trim() : "yet to define",
        time: columns[3] ? columns[3].trim() : "",
      };
    });
  }

  function populateEventTable(events) {
    const tableBody = document.getElementById("event-table-body");
    tableBody.innerHTML = "";

    events.forEach((event) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                        <td>${event.date}</td>
                        <td>${event.time}</td>
                        <td>${event.description}</td>
                        <td>${event.place}</td>
                    `;
      tableBody.appendChild(row);
    });
  }
  await fetchEventsFromCSV();
});
