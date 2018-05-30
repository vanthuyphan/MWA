var fs = require('fs'); 
var path = require('path');

fs.readFile(path.join(__dirname, '/blocking.js'), function(err, data) {
	setTimeout(() => { console.log('timeout'); }, 0); 
	setImmediate(() => { console.log('immediate'); }); 
    process.nextTick(()=> console.log('nexttick'));
});
