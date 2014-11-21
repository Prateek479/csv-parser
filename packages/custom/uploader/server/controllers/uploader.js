'use strict';

/**
 * Module dependencies.
 */
var config = require('meanio').loadConfig(),
  formidable = require('formidable'),
  fs = require('fs'),
  Converter = require('csvtojson').core.Converter;

exports.uploadFile = function(req, res) {
  var dirpath = config.root + '/files/Documents/';
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, data, files) {
    fs.readFile(files.file.path, function(err, data) {
      var newPath = dirpath + files.file.name;
      fs.writeFile(newPath, data, function(err) {
        if (!err) {
          var csvFileName = newPath;
          //new converter instance
          var csvConverter = new Converter({
            constructResult: true
          });

          //end_parsed will be emitted once parsing finished
          csvConverter.on('end_parsed', function(jsonObj) {
            res.jsonp(jsonObj); //here is your result json object
          });
          fs.createReadStream(csvFileName).pipe(csvConverter);
        }
      });
    });
  });
};