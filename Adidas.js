
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var adidasShoes = document.querySelectorAll('.AdidasLinks');

    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        adidasShoes.forEach(function (adidasShoe) {
            var adidasShoeText = adidasShoe.textContent.toLowerCase();
            var shouldShow = adidasShoeText.includes(searchTerm);
            adidasShoe.style.display = shouldShow ? 'block' : 'none';
        });
    });
});
