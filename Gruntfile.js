module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    load_plugin: {
      all: {
        src: 'grunt'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['load_plugin']);
};
