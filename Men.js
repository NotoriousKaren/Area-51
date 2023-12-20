document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var menShoes = document.querySelectorAll('.MenLinks');

    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();

      menShoes.forEach(function (menShoe) {
        var menShoeText = menShoe.textContent.toLowerCase();
        var shouldShow = menShoeText.includes(searchTerm);
        menShoe.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });