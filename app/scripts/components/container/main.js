define([

  'lateralus'
  ,'lat_test.component.box'

  ,'./model'
  ,'./view'
  ,'text!./template.mustache'

], function (

  Lateralus
  ,BoxComponent
  ,Model
  ,View
  ,template

) {
  'use strict';

  var Base = Lateralus.Component;

  var ContainerComponent = Base.extend({
    name: 'container'
    ,Model: Model
    ,View: View
    ,template: template
    ,initialize: function(){
      this.boxComponent = this.addComponent(BoxComponent, {
        el: this.view.$box
      })
    }
  });

  return ContainerComponent;
});
