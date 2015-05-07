module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    csslint: {
      strict: {
        options: {
          "box-sizing": false,
          "box-model": false,
          "unique-headings": false,
          "universal-selector": false,
          "font-sizes": false,
          "gradients": false
        },
        src: ['css/main.css']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-csslint');
  
  grunt.registerTask('lint', ['csslint']);
}