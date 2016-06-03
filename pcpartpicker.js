var request = require("request");
var cheerio = require("cheerio");

var getMotherboards = function(cb){

	var mobooArray = [];
	var nameArray = [];
	var socketArray = [];
	var ffArray = [];
	var rsArray = [];
	var mrArray = [];
	var priceArray = [];

	request("https://pcpartpicker.com/products/motherboard/fetch/?xcx=0&mode=list&xslug=&search=", function(error, response, html1){

		var numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);

		var fetch = function(q){	

			if (q < numPages){	

				request("https://pcpartpicker.com/products/motherboard/fetch/?xcx=0&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

					var actualHTML = JSON.parse(response.body).result.html;

					var $ = cheerio.load(actualHTML);

					$('a').each(function(){
						if ($(this).attr('href').indexOf('product') != -1){

							if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 440).split("$")[1])
							{
								priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 440).split("$")[1].split("<")[0]));
							}
							else {
								priceArray.push("N/A");
							}
							nameArray.push($(this).text());

							socketArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("<td>")[1].split("<")[0]);
							ffArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("<td>")[2].split("<")[0]);
							rsArray.push(parseInt(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[1].split("<")[0]));
							mrArray.push(parseInt(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[2].split("<")[0].replace("GB", "")));
						}
					});

					fetch(q + 1);

					if (q == numPages - 1){
						for (var i = 0; i < nameArray.length; i++){
							mobooArray.push({
								name: nameArray[i],
								price: priceArray[i],
								socket: socketArray[i],
								formFactor: ffArray[i],
								ramSlots: rsArray[i],
								maxRAM: mrArray[i]
							});

							if (i == nameArray.length - 1){
								cb (mobooArray);
							}
						}
					}

				});

			}
			
		}
		
		fetch(0);

	});

}

var getCoolers = function(cb){

	var cooleroArray = [];
	var nameArray = [];
	var noiseArray = [];
	var rpmArray = [];
	var priceArray = [];

	request("https://pcpartpicker.com/products/cpu-cooler/fetch/?mode=list&xslug=&search=", function(error, response, html1){

		var numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);

		var fetch = function(q){	

			if (q < numPages){	

				request("https://pcpartpicker.com/products/cpu-cooler/fetch/?page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

					var actualHTML = JSON.parse(response.body).result.html;

					var $ = cheerio.load(actualHTML);

					$('a').each(function(){
						if ($(this).attr('href').indexOf('product') != -1){

							if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 440).split("$")[1])
							{
								priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 440).split("$")[1].split("<")[0]));
							}
							else {
								priceArray.push("N/A");
							}
							nameArray.push($(this).text());
							noiseArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[2].split("<")[0].toLowerCase().replace("dba", ""));
							rpmArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 10, actualHTML.indexOf($(this).text()) + $(this).text().length + 145).split(">")[1].split("<")[0].split(" RPM")[0]);
						}
					});

					fetch(q + 1);

					if (q == numPages - 1){
						for (var i = 0; i < nameArray.length; i++){
							cooleroArray.push({
								name: nameArray[i],
								price: priceArray[i],
								noise: noiseArray[i],
								rpm: rpmArray[i]
							});

							if (i == nameArray.length - 1){
								cb (cooleroArray);
							}
						}
					}

				});

			}
			
		}
		
		fetch(0);

	});

}

var getCPUs = function(cb){

	var cpuoArray = [];
	var nameArray = [];
	var speedArray = [];
	var tdpArray = [];
	var priceArray = [];
	var coreArray = [];

	request("https://pcpartpicker.com/parts/cpu/fetch/?mode=list&xslug=&search=", function(error, response, html1){

		var numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);

		var fetch = function(q){	

			if (q < numPages){	

				request("https://pcpartpicker.com/products/cpu/fetch/?xcx=0&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

					var actualHTML = JSON.parse(response.body).result.html;

					var $ = cheerio.load(actualHTML);

					$('a').each(function(){
						if ($(this).attr('href').indexOf('product') != -1){
							
							if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 440).split("$")[1])
							{
								priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 440).split("$")[1].split("<")[0]));
							}
							else {
								priceArray.push("N/A");
							}
							nameArray.push($(this).text());
							speedArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 80).split(">")[1].split("<")[0].toLowerCase().split("ghz")[0]));
							tdpArray.push(parseInt(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 100, actualHTML.indexOf($(this).text()) + $(this).text().length + 145).split(">")[1].split("<")[0].split("W")[0]));
							coreArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 480).split("center;\">")[1].split("<")[0]);
						}
					});

					fetch(q + 1);

					if (q == numPages - 1){
						for (var i = 0; i < nameArray.length; i++){
							cpuoArray.push({
								name: nameArray[i],
								price: priceArray[i],
								speed: speedArray[i],
								tdp: tdpArray[i],
								cores: coreArray[i]
							});

							if (i == nameArray.length - 1){
								cb (cpuoArray);
							}
						}
					}

				});

			}
			
		}
		
		fetch(0);

	});
}

module.exports.getCPUs = getCPUs;
module.exports.getCoolers = getCoolers;
module.exports.getMotherboards = getMotherboards;