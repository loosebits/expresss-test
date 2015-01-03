module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  grunt.registerTask('serve',['concurrent']);
};