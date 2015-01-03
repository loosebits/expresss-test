module.exports = {
  jade: {
      files: ['app/views/**'],
      options: {
        livereload: true,
      },
  },
  js: {
    files: ['Gruntfile.js',' grunt/**.js','app/**/*.js', 'public/**/*.js', 'test/**/*.js', 'index.js'],
    tasks: ['jshint'],
    options: {
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