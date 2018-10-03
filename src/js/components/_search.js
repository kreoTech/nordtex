const searchButton = $('.search__button');
const searchClose = $('.search__close');
const searchBar = $('.search__wrap');

searchButton.on('click', function() {
  searchBar.toggleClass('is-active');
});
searchClose.on('click', function() {
  searchBar.removeClass('is-active');
});
