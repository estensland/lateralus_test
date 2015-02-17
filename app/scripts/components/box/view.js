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
        switch (e.which) {
        case 37:
            $('.moving-box').stop().animate({
                left: '-=20'
            }); //left arrow key
            break;
        case 38:
            $('.moving-box').stop().animate({
                top: '-=20'
            }); //up arrow key
            break;
        case 39:
            $('.moving-box').stop().animate({
                left: '+=20'
            }); //right arrow key
            break;
        case 40:
            $('.moving-box').stop().animate({
                top: '+=20'
            }); //bottom arrow key
            break;
        }
      })
    }
  });

  return BoxComponentView;
});
