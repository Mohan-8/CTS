// Disable right-click context menu
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

// Disable F12 key and other shortcuts
document.addEventListener(
  "keydown",
  function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" || e.key === "J" || e.key === "C")) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  },
  false
);

// Clear console periodically
(function () {
  setInterval(function () {
    console.clear();
  }, 1000);
})();

// // Detect focus on DevTools
// document.addEventListener("visibilitychange", function () {
//   if (document.visibilityState === "hidden") {
//     alert("Please close Developer Tools.");
//   }
// });
