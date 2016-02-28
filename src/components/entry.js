module.exports = function () {

  global.jQuery = require('jquery');
  require('ion-rangeslider');

  jQuery(function(){
    jQuery('#energyBill').ionRangeSlider();
  });

}