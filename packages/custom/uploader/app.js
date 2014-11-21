'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Uploader = new Module('uploader');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Uploader.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Uploader.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Uploader.menus.add({
    title: 'uploader example page',
    link: 'uploader example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Uploader.aggregateAsset('css', 'uploader.css');
  Uploader.angularDependencies(['ng-file-upload-shim', 'ng-file-upload', 'underscore']);

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Uploader.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Uploader.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Uploader.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Uploader;
});