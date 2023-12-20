document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var kidsShoes = document.querySelectorAll('.KidsLinks');

    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();

      kidsShoes.forEach(function (kidsShoe) {
        var kidsShoeText = kidsShoe.textContent.toLowerCase();
        var shouldShow = kidsShoeText.includes(searchTerm);
        kidsShoe.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });