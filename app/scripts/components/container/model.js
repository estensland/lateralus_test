define([

  'lateralus'
  ,'lat_test.component.box'
  ,'./view'
  ,'text!./template.mustache'

], function (

  Lateralus
  ,BoxComponent
  ,View
  ,template

) {
  'use strict';

  var Base = Lateralus.Component.Model;
  var baseProto = Base.prototype;

  var ContainerComponentModel = Base.extend({
    /**
     * Parameters are the same as http://backbonejs.org/#Model-constructor
     * @param {Object} [attributes]
     * @param {Object} [options]
     */
    initialize: function () {
      baseProto.initialize.apply(this, arguments);
    }
  });

  return ContainerComponentModel;
});
