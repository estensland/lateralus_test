define([

  'lateralus'

  ,'lat_test.component.container'

], function (

  Lateralus

  ,ContainerComponent

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
