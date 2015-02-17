define([

  'lateralus'

  ,'./model'
  ,'./view'
  ,'text!./template.mustache'

], function (

  Lateralus

  ,Model
  ,View
  ,template

) {
  'use strict';

  var Base = Lateralus.Component;

  var BoxComponent = Base.extend({
    name: 'box'
    ,Model: Model
    ,View: View
    ,template: template
  });

  return BoxComponent;
});
