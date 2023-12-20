document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var underArmourShoes = document.querySelectorAll('.UnderArmourLinks');

    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();

      underArmourShoes.forEach(function (shoe) {
        var shoeText = shoe.textContent.toLowerCase();
        var shouldShow = shoeText.includes(searchTerm);
        shoe.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });