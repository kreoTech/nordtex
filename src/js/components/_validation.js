import validate from '../lib/jquery.form-validator.js';
const forms = $('.modal-form');
// forms.each((i,elem) => {
$.validate({
  // form: elem,
  onError: function($form) {
    $form.addClass('novalidate');
  },
  borderColorOnError: '#e29191',
});
// });

// const form = $('.modal-form');
// const inputWrap = $('.modal-input');
// const input = $('.modal-input input');

// form.on('submit', function(e) {
// //   e.preventDefault();
//   $(this).removeClass('novalidate');
//   let inputs = $(this).find(input);
//   for (let i = 0; i < inputs.length; i++) {
//     $(inputs[i]).parents(inputWrap).removeClass('is-error');
//     console.log(this);
//   }
  

//   for (let i = 0; i < inputs.length; i++) {
//     console.log(inputs[i]);
//     if(!inputs[i].value) {
//       $(inputs[i]).parents(inputWrap).addClass('is-error');
//       $(this).addClass('novalidate');
//       console.log(this);
//     }
//   }
// });
