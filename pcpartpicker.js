var request = require("request");
var cheerio = require("cheerio");

var getCPUs = function(cb){
	var cpuoArray = [];
	var nameArray = [];
	var speedArray = [];
	var tdpArray = [];
	var priceArray = [];
	request("https://pcpartpicker.com/parts/cpu/fetch/?mode=list&xslug=&search=", function(error, response, html){

		var $ = cheerio.load(JSON.parse(response.body).result.html);

		var actualHTML = JSON.parse(response.body).result.html;

		$('a').each(function(){
			if ($(this).attr('href').indexOf('product') != -1){
				
				if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length - 320, actualHTML.indexOf($(this).text()) + $(this).text().length - 240).split("$")[1])
				{
					priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length - 320, actualHTML.indexOf($(this).text()) + $(this).text().length - 240).split("$")[1].split("<")[0]));
				}
				else {
					priceArray.push("N/A");
				}
				nameArray.push($(this).text());
				speedArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 80).split(">")[1].split("<")[0].toLowerCase().split("ghz")[0]));
				tdpArray.push(parseInt(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 100, actualHTML.indexOf($(this).text()) + $(this).text().length + 145).split(">")[1].split("<")[0].split("W")[0]));
			}
		});

		for (var i = 0; i < nameArray.length; i++){
			cpuoArray.push({
				name: nameArray[i],
				price: priceArray[i],
				speed: speedArray[i],
				tdp: tdpArray[i]
			});

			if (i == nameArray.length - 1){
				cb (cpuoArray);
			}
		}

	});
}

module.exports.getCPUs = getCPUs;