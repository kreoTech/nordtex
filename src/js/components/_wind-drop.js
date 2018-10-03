import { BODY, SHOW, ACTIVE } from '../constants';

const trigger = $('[wind-drop-trigger]');
const dropItem = $('[wind-drop-list]');

trigger.on('click', function() {
  if(!($(this).hasClass(ACTIVE))) {
    trigger.removeClass(ACTIVE);
    dropItem.removeClass(SHOW);
  };
  $(this).toggleClass(ACTIVE);
  $(this).parents('[wind-drop-parent]').find('[wind-drop-list]').toggleClass(SHOW);
});


BODY.on('click', e => {
  if ($(e.target).closest('[wind-drop-parent]').length) return;
  dropItem.removeClass(SHOW);
  trigger.removeClass(ACTIVE);
});
