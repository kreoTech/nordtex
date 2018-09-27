import { BODY, SHOW, ACTIVE } from '../constants';
const trigger = $('.js-cities-current');
const cities = $('.js-cities');
const list = $('.js-cities-list');
const item = $('.js-cities-item a');
const first = $('.js-cities-item a:first');
first.addClass(ACTIVE);

trigger.html(first.html());

item.on('click', function(e) {
  e.preventDefault();
  if(!($(this).hasClass(ACTIVE))) {
    item.removeClass(ACTIVE);
    $(this).addClass(ACTIVE);
    trigger.html($(this).html());
  };
  $(this).parents('.js-cities').removeClass(SHOW);
});

trigger.on('click', function() {
  const parent = $(this).parents('.js-cities');
  if (parent.hasClass(SHOW)) {
    parent.removeClass(SHOW);
  }
  else {
    cities.removeClass(SHOW);
    parent.addClass(SHOW);
  }
});

BODY.on('click', e => {
  if ($(e.target).closest('.js-cities').length) return;
  cities.removeClass(SHOW);
});
