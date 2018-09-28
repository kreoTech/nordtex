import validate from '../lib/jquery.form-validator.js';
const forms = $('.modal-form');
$.validate({
  onError: function($form) {
    $form.addClass('novalidate');
  },
  borderColorOnError: '#e29191',
});

