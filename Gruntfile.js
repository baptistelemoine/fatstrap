module.exports = function (grunt){
	
	grunt.initConfig({
		less:{
			developement:{
				src : ['public/less/fatstrap.less'],
				dest : 'public/css/fatstrap.css'
			}
		},
		watch:{
			files : ['public/less/*.less'],
			tasks : ['less']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};