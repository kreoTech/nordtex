export default class Map {

  constructor(config) {
    this._mapHTML = config.map.get(0);
    this._center = {
      lat: +config.map.data('center-lat'),
      lng: +config.map.data('center-lng')
    };
  
    this._init();
  }
  
  _init() {
    this._createMap();
  }
  
  _createMap() {
    this._map = new google.maps.Map(this._mapHTML, {
      center: this._center,
      zoom: 15,
      // disableDefaultUI: true,
      // scrollwheel: false,
      // zoomControl: true,
      // draggable: false
    });
    new google.maps.Marker({
      position: this._center,
      map: this._map,
      icon: {
        url: 'img/maps-and-flags(3)@2x.png',
        scaledSize: new google.maps.Size(36.77, 50.76)
      }
    });
  }
  
};
let map = $('.js-map');
  
if (map.length) {
  map.each(function() {
    new Map({
      map: $(this)
    });
  });
};
