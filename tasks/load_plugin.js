module.exports = function(grunt) {
  'use strict';
  var _ = grunt.util._;
  var taskName = 'load_plugin';
  var description = 'load';

  var taskFunction = function () {
    var done = this.async();
    var plugins = this.data.src;
    plugins.forEach(function(plugin) {
      grunt.task.loadNpmTasks(plugin);
    });
    done();
  };
  grunt.registerMultiTask(taskName, description, taskFunction);
};
