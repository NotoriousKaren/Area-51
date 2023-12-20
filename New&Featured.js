document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var newShoes = document.querySelectorAll('.NewLinks');

    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();

      newShoes.forEach(function (newShoe) {
        var newShoeText = newShoe.textContent.toLowerCase();
        var shouldShow = newShoeText.includes(searchTerm);
        newShoe.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });