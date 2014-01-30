module.exports = function(grunt) {
  'use strict';
  var _ = grunt.util._;
  var taskName = 'load_plugin';
  var description = 'load';

  var taskFunction = function () {
    var plugins = this.data.src;
    plugins.forEach(function(plugin) {
      grunt.loadNpmTasks(plugin);
    });
  };
  grunt.registerMultiTask(taskName, description, taskFunction);
};
