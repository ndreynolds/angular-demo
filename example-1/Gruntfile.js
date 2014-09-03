module.exports = function(grunt) {
  grunt.initConfig({
    wiredep: {
      target: {
        src: 'index.html' // point to your HTML file.
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
}
