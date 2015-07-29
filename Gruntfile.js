module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['dist/','doc/'],
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'static/', src:['**'], dest: 'dist/'}
        ]
      }
    },
    browserify: {
      options: {
        transform: ["babelify"],
        browserifyOptions: {
          debug: true
        },
      },
      app: {
        src:  'src/jsx/app.jsx',
        dest: 'dist/js/app.js'
      }
    },
    watch: {
      all: {
        files: ['src/**/*.*','static/**'],
        tasks: ['clean','build']
      }
    },
    'http-server': {
      'dev': {
        root: 'dist/',
        port: 8282
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-browserify')
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['copy','browserify']);
};
