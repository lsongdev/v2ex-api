
var V2EX = require('../');

var v2ex = new V2EX({ api: 'https://v2ex.com/api' });

v2ex.hot(function(err, topics){
	console.log(topics);
});

v2ex.latest(function(err, topics){
	console.log(topics);	
});

v2ex.node('name', function(err, node){
	console.log(node);
});

v2ex.profile('name', function(err, profile){
	console.log(profile);
});
