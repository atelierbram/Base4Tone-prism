module.exports = function(grunt) {
 // Project configuration.
 grunt.initConfig({
  pkg: grunt.file.readJSON("package.json"),
  // Sass task
   sass: {
     options: {
       implementation: require('node-sass'),
       sourceMap: true,
     },
     dist: {
       files: {
         "build/assets/css/critical.css": "src/assets/sass/critical.scss",
         "build/assets/css/demo-master-palette-24-hues.css": "src/assets/sass/demo/demo-master-palette-24-hues.scss",
         "build/assets/css/demo-monochrome-palette-24-hues.css": "src/assets/sass/demo/demo-monochrome-palette-24-hues.scss",
         "build/assets/css/demo.css": "src/assets/sass/demo/demo.scss",
         "build/assets/css/demo-b4t_Classic-A.css": "src/assets/sass/demo/demo-b4t_Classic-A.scss",
         "build/assets/css/demo-b4t_Classic-B.css": "src/assets/sass/demo/demo-b4t_Classic-B.scss",
         "build/assets/css/demo-b4t_Classic-C.css": "src/assets/sass/demo/demo-b4t_Classic-C.scss",
         "build/assets/css/demo-b4t_Classic-D.css": "src/assets/sass/demo/demo-b4t_Classic-D.scss",
         "build/assets/css/demo-b4t_Classic-E.css": "src/assets/sass/demo/demo-b4t_Classic-E.scss",
         "build/assets/css/demo-b4t_Classic-F.css": "src/assets/sass/demo/demo-b4t_Classic-F.scss",
         "build/assets/css/demo-b4t_Classic-I.css": "src/assets/sass/demo/demo-b4t_Classic-I.scss",
         "build/assets/css/demo-b4t_Classic-L.css": "src/assets/sass/demo/demo-b4t_Classic-L.scss",
         "build/assets/css/demo-b4t_Classic-O.css": "src/assets/sass/demo/demo-b4t_Classic-O.scss",
         "build/assets/css/demo-b4t_Classic-P.css": "src/assets/sass/demo/demo-b4t_Classic-P.scss",
         "build/assets/css/demo-b4t_Classic-Q.css": "src/assets/sass/demo/demo-b4t_Classic-Q.scss",
         "build/assets/css/demo-b4t_Classic-R.css": "src/assets/sass/demo/demo-b4t_Classic-R.scss",
         "build/assets/css/demo-b4t_Classic-S.css": "src/assets/sass/demo/demo-b4t_Classic-S.scss",
         "build/assets/css/demo-b4t_Classic-T.css": "src/assets/sass/demo/demo-b4t_Classic-T.scss",
         "build/assets/css/demo-b4t_Classic-U.css": "src/assets/sass/demo/demo-b4t_Classic-U.scss",
         "build/assets/css/demo-b4t_Classic-W.css": "src/assets/sass/demo/demo-b4t_Classic-W.scss",
         "build/assets/css/demo-b4t_Modern-C.css":  "src/assets/sass/demo/demo-b4t_Modern-C.scss",
         "build/assets/css/demo-b4t_Modern-N.css":  "src/assets/sass/demo/demo-b4t_Modern-N.scss",
         "build/assets/css/demo-b4t_Modern-W.css":  "src/assets/sass/demo/demo-b4t_Modern-W.scss",
         "build/assets/css/prism_b4t_Classic-A-light.css": "src/assets/sass/prism/prism_b4t_Classic-A-light.scss",
         "build/assets/css/prism_b4t_Classic-A-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-A-dark.scss",
         "build/assets/css/prism_b4t_Classic-B-light.css": "src/assets/sass/prism/prism_b4t_Classic-B-light.scss",
         "build/assets/css/prism_b4t_Classic-B-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-B-dark.scss",
         "build/assets/css/prism_b4t_Classic-C-light.css": "src/assets/sass/prism/prism_b4t_Classic-C-light.scss",
         "build/assets/css/prism_b4t_Classic-C-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-C-dark.scss",
         "build/assets/css/prism_b4t_Classic-D-light.css": "src/assets/sass/prism/prism_b4t_Classic-D-light.scss",
         "build/assets/css/prism_b4t_Classic-D-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-D-dark.scss",
         "build/assets/css/prism_b4t_Classic-E-light.css": "src/assets/sass/prism/prism_b4t_Classic-E-light.scss",
         "build/assets/css/prism_b4t_Classic-E-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-E-dark.scss",
         "build/assets/css/prism_b4t_Classic-F-light.css": "src/assets/sass/prism/prism_b4t_Classic-F-light.scss",
         "build/assets/css/prism_b4t_Classic-F-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-F-dark.scss",
         "build/assets/css/prism_b4t_Classic-I-light.css": "src/assets/sass/prism/prism_b4t_Classic-I-light.scss",
         "build/assets/css/prism_b4t_Classic-I-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-I-dark.scss",
         "build/assets/css/prism_b4t_Classic-L-light.css": "src/assets/sass/prism/prism_b4t_Classic-L-light.scss",
         "build/assets/css/prism_b4t_Classic-L-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-L-dark.scss",
         "build/assets/css/prism_b4t_Classic-O-light.css": "src/assets/sass/prism/prism_b4t_Classic-O-light.scss",
         "build/assets/css/prism_b4t_Classic-O-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-O-dark.scss",
         "build/assets/css/prism_b4t_Classic-P-light.css": "src/assets/sass/prism/prism_b4t_Classic-P-light.scss",
         "build/assets/css/prism_b4t_Classic-P-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-P-dark.scss",
         "build/assets/css/prism_b4t_Classic-Q-light.css": "src/assets/sass/prism/prism_b4t_Classic-Q-light.scss",
         "build/assets/css/prism_b4t_Classic-Q-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-Q-dark.scss",
         "build/assets/css/prism_b4t_Classic-R-light.css": "src/assets/sass/prism/prism_b4t_Classic-R-light.scss",
         "build/assets/css/prism_b4t_Classic-R-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-R-dark.scss",
         "build/assets/css/prism_b4t_Classic-S-light.css": "src/assets/sass/prism/prism_b4t_Classic-S-light.scss",
         "build/assets/css/prism_b4t_Classic-S-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-S-dark.scss",
         "build/assets/css/prism_b4t_Classic-T-light.css": "src/assets/sass/prism/prism_b4t_Classic-T-light.scss",
         "build/assets/css/prism_b4t_Classic-T-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-T-dark.scss",
         "build/assets/css/prism_b4t_Classic-U-light.css": "src/assets/sass/prism/prism_b4t_Classic-U-light.scss",
         "build/assets/css/prism_b4t_Classic-U-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-U-dark.scss",
         "build/assets/css/prism_b4t_Classic-W-light.css": "src/assets/sass/prism/prism_b4t_Classic-W-light.scss",
         "build/assets/css/prism_b4t_Classic-W-dark.css":  "src/assets/sass/prism/prism_b4t_Classic-W-dark.scss",
         "build/assets/css/prism_b4t_Modern-C-light.css":   "src/assets/sass/prism/prism_b4t_Modern-C-light.scss",
         "build/assets/css/prism_b4t_Modern-C-dark.css":    "src/assets/sass/prism/prism_b4t_Modern-C-dark.scss",
         "build/assets/css/prism_b4t_Modern-N-light.css":   "src/assets/sass/prism/prism_b4t_Modern-N-light.scss",
         "build/assets/css/prism_b4t_Modern-N-dark.css":    "src/assets/sass/prism/prism_b4t_Modern-N-dark.scss",
         "build/assets/css/prism_b4t_Modern-W-light.css":   "src/assets/sass/prism/prism_b4t_Modern-W-light.scss",
         "build/assets/css/prism_b4t_Modern-W-dark.css":    "src/assets/sass/prism/prism_b4t_Modern-W-dark.scss",
       }
     }
   },

  // Post CSS task
   postcss: {
     options: {
       map: {
         inline: false, // save all sourcemaps as separate files...
       },
       processors: [
         require("autoprefixer"),
         require('cssnano')()
       ]
     },
     dist: {
       // expand: true,
       // flatten: true,
       files: {
         "docs/assets/css/demo-master-palette-24-hues.min.css": "build/assets/css/demo-master-palette-24-hues.css",
         "docs/assets/css/demo-monochrome-palette-24-hues.min.css": "build/assets/css/demo-monochrome-palette-24-hues.css",
         "docs/assets/css/demo.min.css": "build/assets/css/demo.css",
         "docs/assets/css/demo-b4t_Classic-A.min.css": "build/assets/css/demo-b4t_Classic-A.css",
         "docs/assets/css/demo-b4t_Classic-B.min.css": "build/assets/css/demo-b4t_Classic-B.css",
         "docs/assets/css/demo-b4t_Classic-C.min.css": "build/assets/css/demo-b4t_Classic-C.css",
         "docs/assets/css/demo-b4t_Classic-D.min.css": "build/assets/css/demo-b4t_Classic-D.css",
         "docs/assets/css/demo-b4t_Classic-E.min.css": "build/assets/css/demo-b4t_Classic-E.css",
         "docs/assets/css/demo-b4t_Classic-F.min.css": "build/assets/css/demo-b4t_Classic-F.css",
         "docs/assets/css/demo-b4t_Classic-I.min.css": "build/assets/css/demo-b4t_Classic-I.css",
         "docs/assets/css/demo-b4t_Classic-L.min.css": "build/assets/css/demo-b4t_Classic-L.css",
         "docs/assets/css/demo-b4t_Classic-O.min.css": "build/assets/css/demo-b4t_Classic-O.css",
         "docs/assets/css/demo-b4t_Classic-P.min.css": "build/assets/css/demo-b4t_Classic-P.css",
         "docs/assets/css/demo-b4t_Classic-Q.min.css": "build/assets/css/demo-b4t_Classic-Q.css",
         "docs/assets/css/demo-b4t_Classic-R.min.css": "build/assets/css/demo-b4t_Classic-R.css",
         "docs/assets/css/demo-b4t_Classic-S.min.css": "build/assets/css/demo-b4t_Classic-S.css",
         "docs/assets/css/demo-b4t_Classic-T.min.css": "build/assets/css/demo-b4t_Classic-T.css",
         "docs/assets/css/demo-b4t_Classic-U.min.css": "build/assets/css/demo-b4t_Classic-U.css",
         "docs/assets/css/demo-b4t_Classic-W.min.css": "build/assets/css/demo-b4t_Classic-W.css",
         "docs/assets/css/demo-b4t_Modern-C.min.css": "build/assets/css/demo-b4t_Modern-C.css",
         "docs/assets/css/demo-b4t_Modern-N.min.css": "build/assets/css/demo-b4t_Modern-N.css",
         "docs/assets/css/demo-b4t_Modern-W.min.css": "build/assets/css/demo-b4t_Modern-W.css",
         "docs/assets/css/critical.min.css": "build/assets/css/critical.css",
         "docs/assets/css/prism_b4t_Classic-A-light.min.css": "build/assets/css/prism_b4t_Classic-A-light.css",
         "docs/assets/css/prism_b4t_Classic-A-dark.min.css":  "build/assets/css/prism_b4t_Classic-A-dark.css",
         "docs/assets/css/prism_b4t_Classic-B-light.min.css": "build/assets/css/prism_b4t_Classic-B-light.css",
         "docs/assets/css/prism_b4t_Classic-B-dark.min.css":  "build/assets/css/prism_b4t_Classic-B-dark.css",
         "docs/assets/css/prism_b4t_Classic-C-light.min.css": "build/assets/css/prism_b4t_Classic-C-light.css",
         "docs/assets/css/prism_b4t_Classic-C-dark.min.css":  "build/assets/css/prism_b4t_Classic-C-dark.css",
         "docs/assets/css/prism_b4t_Classic-D-light.min.css": "build/assets/css/prism_b4t_Classic-D-light.css",
         "docs/assets/css/prism_b4t_Classic-D-dark.min.css":  "build/assets/css/prism_b4t_Classic-D-dark.css",
         "docs/assets/css/prism_b4t_Classic-E-light.min.css": "build/assets/css/prism_b4t_Classic-E-light.css",
         "docs/assets/css/prism_b4t_Classic-E-dark.min.css":  "build/assets/css/prism_b4t_Classic-E-dark.css",
         "docs/assets/css/prism_b4t_Classic-F-light.min.css": "build/assets/css/prism_b4t_Classic-F-light.css",
         "docs/assets/css/prism_b4t_Classic-F-dark.min.css":  "build/assets/css/prism_b4t_Classic-F-dark.css",
         "docs/assets/css/prism_b4t_Classic-I-light.min.css": "build/assets/css/prism_b4t_Classic-I-light.css",
         "docs/assets/css/prism_b4t_Classic-I-dark.min.css":  "build/assets/css/prism_b4t_Classic-I-dark.css",
         "docs/assets/css/prism_b4t_Classic-L-light.min.css": "build/assets/css/prism_b4t_Classic-L-light.css",
         "docs/assets/css/prism_b4t_Classic-L-dark.min.css":  "build/assets/css/prism_b4t_Classic-L-dark.css",
         "docs/assets/css/prism_b4t_Classic-O-light.min.css": "build/assets/css/prism_b4t_Classic-O-light.css",
         "docs/assets/css/prism_b4t_Classic-O-dark.min.css":  "build/assets/css/prism_b4t_Classic-O-dark.css",
         "docs/assets/css/prism_b4t_Classic-P-light.min.css": "build/assets/css/prism_b4t_Classic-P-light.css",
         "docs/assets/css/prism_b4t_Classic-P-dark.min.css":  "build/assets/css/prism_b4t_Classic-P-dark.css",
         "docs/assets/css/prism_b4t_Classic-Q-light.min.css": "build/assets/css/prism_b4t_Classic-Q-light.css",
         "docs/assets/css/prism_b4t_Classic-Q-dark.min.css":  "build/assets/css/prism_b4t_Classic-Q-dark.css",
         "docs/assets/css/prism_b4t_Classic-R-light.min.css": "build/assets/css/prism_b4t_Classic-R-light.css",
         "docs/assets/css/prism_b4t_Classic-R-dark.min.css":  "build/assets/css/prism_b4t_Classic-R-dark.css",
         "docs/assets/css/prism_b4t_Classic-S-light.min.css": "build/assets/css/prism_b4t_Classic-S-light.css",
         "docs/assets/css/prism_b4t_Classic-S-dark.min.css":  "build/assets/css/prism_b4t_Classic-S-dark.css",
         "docs/assets/css/prism_b4t_Classic-T-light.min.css": "build/assets/css/prism_b4t_Classic-T-light.css",
         "docs/assets/css/prism_b4t_Classic-T-dark.min.css":  "build/assets/css/prism_b4t_Classic-T-dark.css",
         "docs/assets/css/prism_b4t_Classic-U-light.min.css": "build/assets/css/prism_b4t_Classic-U-light.css",
         "docs/assets/css/prism_b4t_Classic-U-dark.min.css":  "build/assets/css/prism_b4t_Classic-U-dark.css",
         "docs/assets/css/prism_b4t_Classic-W-light.min.css": "build/assets/css/prism_b4t_Classic-W-light.css",
         "docs/assets/css/prism_b4t_Classic-W-dark.min.css":  "build/assets/css/prism_b4t_Classic-W-dark.css",
         "docs/assets/css/prism_b4t_Modern-C-light.min.css": "build/assets/css/prism_b4t_Modern-C-light.css",
         "docs/assets/css/prism_b4t_Modern-C-dark.min.css":  "build/assets/css/prism_b4t_Modern-C-dark.css",
         "docs/assets/css/prism_b4t_Modern-N-light.min.css": "build/assets/css/prism_b4t_Modern-N-light.css",
         "docs/assets/css/prism_b4t_Modern-N-dark.min.css":  "build/assets/css/prism_b4t_Modern-N-dark.css",
         "docs/assets/css/prism_b4t_Modern-W-light.min.css": "build/assets/css/prism_b4t_Modern-W-light.css",
         "docs/assets/css/prism_b4t_Modern-W-dark.min.css":  "build/assets/css/prism_b4t_Modern-W-dark.css",
       }
     }
   },
  // Watch task
   watch: {
     options: {
       livereload: 35729,
     },

     sass: {
       files: ["src/assets/sass/**/*.scss"],
       tasks: ['sass','postcss','copy'],
       options: {
         //   spawn: false,
         //   livereload: true
       }
     },
     js: {
       files: ['src/assets/js/**/*.js'],
       tasks: ['concat','uglify'],
       options: {
         // spawn: false
       }
     },
     gruntfile: {
       files: "gruntfile.js",
       options: {
         // spawn: false,
         // livereload: true,
         // reload: true
       }
     }
   },
   // Clean task
   clean: {
      css: {
       src: ["docs/assets/css/**/*.css","build/assets/css/**/*.css"]
     },
     map: {
       src: ["docs/assets/css/**/*.map","build/assets/css/**/*.map"]
     },
     all: {
       src: ["css/**/*.css","css/**/*.map"]
     }
   },

   uglify: {
     options: {
       // livereload: true,
       // preserveComments: 'false'
       preserveComments: /^!/
       // only preserve comments that start with a bang
       // https://github.com/gruntjs/grunt-contrib-uglify/issues/366
     },
     dist: {
       files: {
         'build/assets/js/demo.min.js' : ['src/assets/js/demo.js'],
         'build/assets/js/cssrelpreload.min.js': ['src/assets/js/cssrelpreload.js'],
         'build/assets/js/fontfaceobserver.min.js': ['src/assets/js/fontfaceobserver.js']
       }
     }
   },
   concat: {
     dist: {
       files: {
         'docs/assets/js/concat.min.js' : ['build/assets/js/demo.min.js','build/assets/js/fontfaceobserver.min.js'],
       }
     }
   },
   copy: {
     main: {
       files: {
         'src/views/inc/critical.css.inc': "docs/assets/css/critical.min.css",
         // 'src/views/inc/cssrelpreload.js.inc':'build/assets/js/cssrelpreload.min.js', 
       },
       flatten: true,
       filter: 'isFile',
     },
   },

 });

  // Load the plugins to run your tasks
  require("load-grunt-tasks")(grunt, {
    scope: "devDependencies"
  });
  // grunt.loadNpmTasks('autoprefixer','cssnano','grunt','grunt-contrib-clean','grunt-contrib-concat','grunt-contrib-copy','grunt-contrib-uglify','grunt-contrib-watch','grunt-postcss','node-sass'); 
  // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); 
  // require("time-grunt")(grunt); 
  // Default task(s).
  grunt.registerTask("default", [
    "clean:all",
    "sass",
    "postcss:dist",
    "uglify",
    "concat",
    "copy",
    "watch"
  ]);
  grunt.registerTask('build', ['clean','concat', 'uglify', 'sass', 'postcss:dist',  'copy']);
};
