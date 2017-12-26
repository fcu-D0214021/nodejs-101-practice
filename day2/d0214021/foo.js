module.exports.info = function (params)
{
	var _ = require('lodash');
	var data = _.filter(params, function(o) { return o.cityName.indexOf("臺中市")!=-1; });
	console.time("concatenation");
	console.info(data)
	console.timeEnd("concatenation");

}
