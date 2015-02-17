define([

  'lateralus'

  ,'text!./template.mustache'

], function (

  Lateralus

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var BoxComponentView = Base.extend({
    template: template

    /**
     * @param {Object} [options] See http://backbonejs.org/#View-constructor
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);

      $(document).on('keyup', function(e) {
        var amount = '20'
        switch (e.which) {
        case 37:
            if (parseFloat($('.moving-box').css('left').replace(/[a-z]*/g, '')) < 21){
              amount = $('.moving-box').css('left').replace(/[a-z]*/g, '')
            }
            $('.moving-box').stop().animate({
                left: '-=' + amount
            }); //left arrow key
            break;
        case 38:
            if (parseFloat($('.moving-box').css('top').replace(/[a-z]*/g, '')) < 21){
              amount = $('.moving-box').css('top').replace(/[a-z]*/g, '')
            }
            $('.moving-box').stop().animate({
                top: '-=' + amount
            }); //up arrow key
            break;
        case 39:
            if (parseFloat($('.moving-box').css('left').replace(/[a-z]*/g, '')) > 678){
              amount = 698 - parseFloat($('.moving-box').css('left').replace(/[a-z]*/g, ''))
            }
            $('.moving-box').stop().animate({
                left: '+=' + amount.toString()
            }); //right arrow key
            break;
        case 40:
            if (parseFloat($('.moving-box').css('top').replace(/[a-z]*/g, '')) > 328){
              amount = 348 - parseFloat($('.moving-box').css('top').replace(/[a-z]*/g, ''))
            }
            $('.moving-box').stop().animate({
                top: '+=' + amount.toString()
            }); //bottom arrow key
            break;
        }
      })
    }
  });

  return BoxComponentView;
});
