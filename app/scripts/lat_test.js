define([

  'lateralus'

  ,'lat_test.component.container'
  ,'lat_test.component.box'

], function (

  Lateralus

  ,ContainerComponent
  ,BoxComponent

) {
  'use strict';

  /**
   * @param {Element} el
   * @extends {Lateralus}
   * @constuctor
   */
  var LatTest = Lateralus.beget(function () {
    Lateralus.apply(this, arguments);
    this.containerComponent = this.addComponent(ContainerComponent);
  });

  return LatTest;
});
