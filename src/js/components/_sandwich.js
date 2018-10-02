$('.toggle-mnu').on('click', function() {
  const sandwich = $('.sandwich');
  const sideMenu = $('.header__wrap');
  sandwich.toggleClass('is-active');
  sideMenu.toggleClass('is-active');
});
