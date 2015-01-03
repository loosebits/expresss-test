module.exports = {
  jade: {
      files: ['app/views/**'],
      options: {
        livereload: true,
      },
  },
  js: {
    files: ['Gruntfile.js',' grunt/**.js','app/**/*.js', 'public/**/*.js', 'test/**/*.js', 'index.js'],
    options: {
      tasks: ['jshint:all'],
      livereload: true,
      spawn: false
    },
  },
  public: {
    files: ['public/**'],
    options: {
      livereload: true,
    },
  },
};