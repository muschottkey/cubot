module.exports = function(grunt){

//load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		compass: {
			dev: {
				options: {
					config: 'config.rb',
					force: true
				}
			}
		},

		watch: {
			sass: {
				files: ['scss/*.scss','scss/bootstrap/*.scss'],
				tasks: ['compass:dev']
			},
			/*watch to see if js files have been changed or new packages have been installed */
			js: {
				files: ['js/*js'],
				tasks: ['uglify']
			},
			/*watch for file change and reload browser*/
			livereload: {
				files: ['css/*.css' , '*.html','public/js/*.js'],
				options: {
					livereload: true
				}
			},

		}
	});
grunt.registerTask('default' , 'watch');
};