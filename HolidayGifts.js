document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.SearchTab');
    var holidayGifts = document.querySelectorAll('.NewFeaturedLinks');

    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();

      holidayGifts.forEach(function (gift) {
        var giftText = gift.textContent.toLowerCase();
        var shouldShow = giftText.includes(searchTerm);
        gift.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });