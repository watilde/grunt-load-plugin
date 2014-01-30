module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    require_config: {
      all: {
        src: 'grunt'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-require-config');
  grunt.registerTask('default', ['require_config', 'load_plugin', 'jshint']);
};
