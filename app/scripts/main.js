/*global require*/
'use strict';

require.config({
  baseUrl: '/'
  ,shim: {
    bootstrap: {
      deps: ['jquery']
      ,exports: 'jquery'
    }
  }
  ,paths: {
    text: 'bower_components/requirejs-text/text'
    ,jquery: 'bower_components/jquery/dist/jquery'
    ,backbone: 'bower_components/backbone/backbone'
    ,underscore: 'bower_components/lodash/dist/lodash'
    ,mustache: 'bower_components/mustache/mustache'
  }
  ,packages: [{
    name: 'lateralus'
    ,location: 'bower_components/lateralus/scripts'
    ,main: 'lateralus'
  }, {
    name: 'lat_test'
    ,location: 'scripts'
    ,main: 'lat_test'
  }, {
    name: 'lat_test.component.container'
    ,location: 'scripts/components/container'
  }]
});

require([

  'lat_test'

], function (

  LatTest

) {
  window.latTest = new LatTest(document.getElementById('lat_test'));
});
