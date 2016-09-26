var fs = require('fs');

if(process.argv[2] == undefined) {
	var size = 300;
} else {
	var size = process.argv[2];
}

var allowedFileEnding = ["jpg", "png", "gif", "peg", "svg", "tif"];

fs.readdir('.', function(err, data) {
  if (err) return;

	var $return = '<html>\n'+
	'<head>\n'+
		'<title>Memory</title>\n'+
		'<style type="text/css">\n'+
		'.image-wrapper {\n'+
			'	width: '+size+'px;\n'+
			'	height: '+size+'px;\n'+
			'	border: 3px solid black;\n'+
			'	display: block;\n'+
			'	float: left;\n'+
			'	overflow: hidden;\n'+
			'	margin: 20px;\n'+
			'	background-size: cover;\n'+
			'	background-repeat: no-repeat;\n'+
			'	background-position: center center;\n'+
			'	-webkit-print-color-adjust: exact;\n'+
		'}\n'+
		'img {\n'+
			'	max-width: 100%;\n'+
		'}\n'+
		'</style>\n'+
	'</head>\n'+
	'<body>\n';

  var da, fi;
  for(d in data) {
  	da = data[d];
  	fi = (da.substr(da.length - 3)).toLowerCase();
  	if(allowedFileEnding.indexOf(fi) > -1) {
    	$return += '	<div class="image-wrapper" style=\'background-image:url("'+da+'")\'></div>\n';
    }
  }
  $return += '</body>\n</html>'
  fs.writeFile('./index.html', $return, function(err) {
  	if (err) console.log(err);
  	console.log('Finished');
  })
});
