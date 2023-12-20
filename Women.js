document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var womenShoes = document.querySelectorAll('.WomenLinks');

    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();

      womenShoes.forEach(function (womenShoe) {
        var womenShoeText = womenShoe.textContent.toLowerCase();
        var shouldShow = womenShoeText.includes(searchTerm);
        womenShoe.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });