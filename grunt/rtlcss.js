/* jshint node:true */
// https://github.com/MohammadYounes/grunt-rtlcss
module.exports = {
	style: {
		// task options
		options: {
			'autoRename': false,
			'autoRenameStrict': false,
			'blacklist':{},
			'clean': true,
			'greedy': false,
			'processUrls': false,
			'stringMap': [
				{
					'name'    : 'left-right',
					'priority': 100,
					'search'  : ['left', 'Left', 'LEFT'],
					'replace' : ['right', 'Right', 'RIGHT'],
					'options' : {
						'scope' : '*',
						'ignoreCase' : false
					}
			},
				{
					'name'    : 'ltr-rtl',
					'priority': 100,
					'search'  : ['ltr', 'Ltr', 'LTR'],
					'replace' : ['rtl', 'Rtl', 'RTL'],
					'options' :	{
						'scope' : '*',
						'ignoreCase' : false
					}
			}
			]
		},
		expand : true,
		cwd    : './',
		dest   : './',
		ext   : '-rtl.css',
		src    : ['style.css']
	},
	woocommerce: {
		// task options
		options: {
			'autoRename': false,
			'autoRenameStrict': false,
			'blacklist':{},
			'clean': true,
			'greedy': false,
			'processUrls': false,
			'stringMap': [
				{
					'name'    : 'left-right',
					'priority': 100,
					'search'  : ['left', 'Left', 'LEFT'],
					'replace' : ['right', 'Right', 'RIGHT'],
					'options' : {
						'scope' : '*',
						'ignoreCase' : false
					}
			},
				{
					'name'    : 'ltr-rtl',
					'priority': 100,
					'search'  : ['ltr', 'Ltr', 'LTR'],
					'replace' : ['rtl', 'Rtl', 'RTL'],
					'options' :	{
						'scope' : '*',
						'ignoreCase' : false
					}
			}
			]
		},
		expand : true,
		cwd    : './assets/css/',
		dest   : './assets/css/',
		ext   : '-rtl.css',
		src    : ['woocommerce.css']
	},
};
