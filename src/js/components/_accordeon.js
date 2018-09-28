$(document).ready(function() {

  $('.js-accordeon-head').on('click', accordeon);
});
  
function accordeon() {
  $(this).toggleClass('is-active');
  $('.js-accordeon-body').not($(this).next()).slideUp(400);
  $(this).next().slideToggle(400);
  
}
