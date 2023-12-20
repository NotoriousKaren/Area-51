document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var vansShoes = document.querySelectorAll('.VansLinks');

    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();

      vansShoes.forEach(function (shoe) {
        var shoeText = shoe.textContent.toLowerCase();
        var shouldShow = shoeText.includes(searchTerm);
        shoe.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });