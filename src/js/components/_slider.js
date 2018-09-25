import { BODY } from '../constants';
import slick from 'slick-carousel';

const initSlider = () => {
  const wrap = $('.js-slider-wrap');
  const slider = wrap.find('.js-slider');
  const sliderNumber = $('.js-slide-length');
  slider
  	.on('init', () => { sliderNumber.text('01'); })
  	.slick({
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    })
    .on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    	const nextSl = $($(slick.$slides[nextSlide]).find('.js-slider-slide'));
    	const data = nextSl.data('name');
    	const name = $('.js-slide-name');
    	name.text(data);
    	(nextSlide + 1 <= 9)
    		? sliderNumber.text(`0${nextSlide+1}`)
    		: sliderNumber.text(`${nextSlide+1}`);
    });

  const btnPrev = $('.js-slider-prev');
  const btnNext = $('.js-slider-next');

  btnPrev.click(() => { wrap.find('.js-slider').slick('slickPrev'); });
  btnNext.click(() => { wrap.find('.js-slider').slick('slickNext'); });

};

window.initSlider = initSlider;
window.initSlider();
