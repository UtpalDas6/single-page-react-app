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
      dev : {
        src:  'src/jsx/app.jsx',
        dest: 'dist/js/app.js',
        options: {
          watch: true, // use watchify for incremental builds
          keepAlive: true, // watchify will exit unless task is kept alive
          transform: ["babelify"],
          browserifyOptions: {
            debug: true // source maps
          },
        },
      },
      dist: {
        src:  'src/jsx/app.jsx',
        dest: 'dist/js/app.js'
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
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-browserify')
  grunt.registerTask('default', ['browserify:dev']);
  grunt.registerTask('dist', ['clean','copy','browserify:dist']);
  grunt.registerTask('build', ['dist']);
};
