function applyArtworkFilter() {
  var filter = (location.hash || "#all").slice(1);
  var items = document.querySelectorAll(".grid .item");
  var shown = 0;

  items.forEach(function(item) {
    var match = filter === "all" ||
      (filter === "available" && item.dataset.available === "true") ||
      item.dataset.year === filter;

    item.hidden = !match;
    if (match) shown += 1;
  });

  var label = document.querySelector("[data-filter-label]");
  if (label) label.textContent = filter.toUpperCase();

  var empty = document.querySelector("[data-empty]");
  if (empty) empty.hidden = shown !== 0;
}

window.addEventListener("hashchange", applyArtworkFilter);
applyArtworkFilter();
