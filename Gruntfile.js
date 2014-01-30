module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    load_plugin: {
      all: {
        src: [
          'grunt-contrib-jshint'
        ]
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['load_plugin']);
};
