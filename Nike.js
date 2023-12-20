document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var nikeShoes = document.querySelectorAll('.NikeLinks');

    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();

      nikeShoes.forEach(function (shoe) {
        var shoeText = shoe.textContent.toLowerCase();
        var shouldShow = shoeText.includes(searchTerm);
        shoe.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });
    