module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  grunt.registerTask('serve',['jshint','concurrent']);
  grunt.registerTask('default','serve');
  grunt.registerTask('build','bower');
};