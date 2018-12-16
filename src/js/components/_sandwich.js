$('.toggle-mnu').on('click', function() {
  const sandwich = $('.sandwich');
  const $body = $('body');
  const sideMenu = $('.header__wrap');
  sandwich.toggleClass('is-active');
  $body.toggleClass('menuOpen');
  sideMenu.toggleClass('is-active');
});
