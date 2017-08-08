'use strict';

var request = require("request");
var cheerio = require("cheerio");

var getCases = function(cb){

  var caseoArray = [];
  var nameArray = [];
  var typeArray = [];
  var five25bArray = [];
  var three5bArray = [];
  var psuArray = [];
  var priceArray = [];

  request("https://pcpartpicker.com/products/case/fetch/?xcx=0&mode=list&xslug=&search=", function(error, response, html1){

    var numPages = 1;

    if (html1.toString().lastIndexOf("page=") != -1){
      numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);
    } 

    var fetch = function(q){  

      if (q < numPages){  

        request("https://pcpartpicker.com/products/case/fetch/?xcx=0&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

          var actualHTML = JSON.parse(response.body).result.html;

          var $ = cheerio.load(actualHTML);

          $('a').each(function(){
            if ($(this).attr('href').indexOf('product') != -1){

              if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[1])
              {
                priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[1].split("<")[0]));
              }
              else {
                priceArray.push("N/A");
              }

              nameArray.push($(this).text());

              typeArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("nowrap;\">")[1].split("<")[0]);

              five25bArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[1].split("<")[0]);

              three5bArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[2].split("<")[0]);

              psuArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[3].split("<")[0]);
            }
          });

          fetch(q + 1);

          if (q == numPages - 1){
            for (var i = 0; i < nameArray.length; i++){
              caseoArray.push({
                name: nameArray[i],
                price: priceArray[i],
                type: typeArray[i],
                fiveAndAQuarterInchBays: five25bArray[i],
                threeAndAQuarterInchBays: three5bArray[i],
                powerSupply: psuArray[i]
              });

              if (i == nameArray.length - 1){
                cb (caseoArray);
              }
            }
          }

        });

      }
      
    };
    
    fetch(0);

  });

};

var getPSUs = function(cb){

  var psuoArray = [];
  var nameArray = [];
  var seriesArray = [];
  var formArray = [];
  var efficiencyArray = [];
  var wattsArray = [];
  var modularArray = [];
  var priceArray = [];

  request("https://pcpartpicker.com/products/power-supply/fetch/?xcx=0&mode=list&xslug=&search=", function(error, response, html1){

    var numPages = 1;

    if (html1.toString().lastIndexOf("page=") != -1){
      numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);
    } 

    var fetch = function(q){  

      if (q < numPages){  

        request("https://pcpartpicker.com/products/power-supply/fetch/?xcx=0&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

          var actualHTML = JSON.parse(response.body).result.html;

          var $ = cheerio.load(actualHTML);

          $('a').each(function(){
            if ($(this).attr('href').indexOf('product') != -1){

              if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[1])
              {
                priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[1].split("<")[0]));
              }
              else {
                priceArray.push("N/A");
              }

              nameArray.push($(this).text());

              seriesArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("<td>")[1].split("<")[0]);

              formArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("nowrap;\">")[1].split("<")[0]);

              efficiencyArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("nowrap;\">")[2].split("<")[0]);

              wattsArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[1].split("<")[0]);

              modularArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[2].split("<")[0]);
            }
          });

          fetch(q + 1);

          if (q == numPages - 1){
            for (var i = 0; i < nameArray.length; i++){
              psuoArray.push({
                name: nameArray[i],
                price: priceArray[i],
                series: seriesArray[i],
                form: formArray[i],
                efficiency: efficiencyArray[i],
                watts: wattsArray[i],
                modular: modularArray[i]
              });

              if (i == nameArray.length - 1){
                cb (psuoArray);
              }
            }
          }

        });

      }
      
    };
    
    fetch(0);

  });

};

var getGPUs = function(cb){

  var gpuoArray = [];
  var nameArray = [];
  var seriesArray = [];
  var memoryArray = [];
  var chipsetArray = [];
  var ccArray = [];
  var priceArray = [];

  request("https://pcpartpicker.com/products/video-card/fetch/?xcx=0&mode=list&xslug=&search=", function(error, response, html1){

    var numPages = 1;

    if (html1.toString().lastIndexOf("page=") != -1){
      numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);
    } 

    var fetch = function(q){  

      if (q < numPages){  

        request("https://pcpartpicker.com/products/video-card/fetch/?xcx=0&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

          var actualHTML = JSON.parse(response.body).result.html;

          var $ = cheerio.load(actualHTML);

          $('a').each(function(){
            if ($(this).attr('href').indexOf('product') != -1){

              if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[1])
              {
                priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[1].split("<")[0]));
              }
              else {
                priceArray.push("N/A");
              }

              nameArray.push($(this).text());

              seriesArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("<td>")[1].split("<")[0]);

              memoryArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[1].split("<")[0]);

              chipsetArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("nowrap;\">")[1].split("<")[0]);

              ccArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[2].split("<")[0]));
            }
          });

          fetch(q + 1);

          if (q == numPages - 1){
            for (var i = 0; i < nameArray.length; i++){
              gpuoArray.push({
                name: nameArray[i],
                price: priceArray[i],
                series: seriesArray[i],
                memory: memoryArray[i],
                chipset: chipsetArray[i],
                coreClock: ccArray[i]
              });

              if (i == nameArray.length - 1){
                cb (gpuoArray);
              }
            }
          }

        });

      }
      
    };
    
    fetch(0);

  });

};

var getStorage = function(cb){

  var storageoArray = [];
  var nameArray = [];
  var seriesArray = [];
  var formArray = [];
  var typeArray = [];
  var capacityArray = [];
  var cacheArray = [];
  var ppgArray = [];
  var priceArray = [];

  request("https://pcpartpicker.com/products/internal-hard-drive/fetch/?xcx=0&mode=list&xslug=&search=", function(error, response, html1){

    var numPages = 1;

    if (html1.toString().lastIndexOf("page=") != -1){
      numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);
    } 

    var fetch = function(q){  

      if (q < numPages){  

        request("https://pcpartpicker.com/products/internal-hard-drive/fetch/?xcx=0&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

          var actualHTML = JSON.parse(response.body).result.html;

          var $ = cheerio.load(actualHTML);

          $('a').each(function(){
            if ($(this).attr('href').indexOf('product') != -1){

              if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[2])
              {
                priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[2].split("<")[0]));
              }
              else {
                priceArray.push("N/A");
              }

              nameArray.push($(this).text());

              seriesArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("<td>")[1].split("<")[0]);

              formArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[1].split("<")[0]);

              typeArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[2].split("<")[0]);

              capacityArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[3].split("<")[0]);

              cacheArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[4].split("<")[0]);

              ppgArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[5].split("<")[0].replace("$", "")));
            }
          });

          fetch(q + 1);

          if (q == numPages - 1){
            for (var i = 0; i < nameArray.length; i++){
              storageoArray.push({
                name: nameArray[i],
                price: priceArray[i],
                series: seriesArray[i],
                form: formArray[i],
                type: capacityArray[i],
                cache: cacheArray[i],
                pricePerGB: ppgArray[i]
              });

              if (i == nameArray.length - 1){
                cb (storageoArray);
              }
            }
          }

        });

      }
      
    };
    
    fetch(0);

  });

};

var getMemory = function(sortOptions, cb){

  var ramoArray = [];
  var nameArray = [];
  var speedArray = [];
  var typeArray = [];
  var casArray = [];
  var modulesArray = [];
  var sizeArray = [];
  var ppgArray = [];
  var priceArray = [];

  var sortString = "";

  if (sortOptions.size){  
    sortString += "&Z=";
    for (let s = 0; s < sortOptions.size.length; s++){
      sortString += (parseInt(sortOptions.size[s].split("GB")[0]) * 1024).toString() + "00" + sortOptions.size[s].split("(")[1].split("x")[0];
      if (s != sortOptions.size.length - 1){
        sortString += ",";
      }
    }
  }
  if (sortOptions.speed){
    sortString += "&s=";
    for (let s = 0; s < sortOptions.speed.length; s++){
      sortString += sortOptions.speed[s].split("DDR")[1].split("-")[0] + "0" + sortOptions.speed[s].split("-")[1];
      if (s != sortOptions.speed.length - 1){
        sortString += ",";
      }
    }
  }
  if (sortOptions.rating){
    sortString += "&R=";
    for (let s = 0; s < sortOptions.rating.length; s++){
      sortString += sortOptions.rating[s];
      if (s != sortOptions.rating.length - 1){
        sortString += ",";
      }
    }
  }

  request("https://pcpartpicker.com/products/memory/fetch/?xcx=0" + sortString + "&mode=list&xslug=&search=", function(error, response, html1){

    var numPages = 1;

    if (html1.toString().lastIndexOf("page=") != -1){
      numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);
    } 

    var fetch = function(q){  

      if (q < numPages){  

        request("https://pcpartpicker.com/products/memory/fetch/?xcx=0" + sortString + "&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

          var actualHTML = JSON.parse(response.body).result.html;

          var $ = cheerio.load(actualHTML);

          $('a').each(function(){
            if ($(this).attr('href').indexOf('product') != -1){

              if (actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[2])
              {
                priceArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length + 30, actualHTML.indexOf($(this).text()) + $(this).text().length + 1040).split("$")[2].split("<")[0]));
              }
              else {
                priceArray.push("N/A");
              }

              nameArray.push($(this).text());

              speedArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("nowrap;\">")[1].split("<")[0]);

              typeArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("nowrap;\">")[2].split("<")[0]);

              casArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[1].split("<")[0]);

              modulesArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[2].split("<")[0]);

              sizeArray.push(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[3].split("<")[0]);

              ppgArray.push(parseFloat(actualHTML.substring(actualHTML.indexOf($(this).text()) + $(this).text().length, actualHTML.indexOf($(this).text()) + $(this).text().length + 300).split("right;\">")[4].split("<")[0].replace("$", "")));

            }
          });

          fetch(q + 1);

          if (q == numPages - 1){
            for (var i = 0; i < nameArray.length; i++){
              ramoArray.push({
                name: nameArray[i],
                price: priceArray[i],
                speed: speedArray[i],
                type: typeArray[i],
                CAS: casArray[i],
                modules: modulesArray[i],
                size: sizeArray[i],
                pricePerGB: ppgArray[i]
              });

              if (i == nameArray.length - 1){
                cb (ramoArray);
              }
            }
          }

        });

      }
      
    };
    
    fetch(0);

  });

};

var getMotherboards = function(sortOptions, cb){

  var mobooArray = [];
  var nameArray = [];
  var socketArray = [];
  var ffArray = [];
  var rsArray = [];
  var mrArray = [];
  var priceArray = [];

  var socketEquivalences = {
    "AM1": 27,
    "AM3": 3,
    "AM3+": 4,
    "AM3/AM2+": 6,
    "AM4": 33,
    "TR4": 36,
    "BGA413": 8,
    "BGA559": 10,
    "BGA1023": 25,
    "C32": 32,
    "FM1": 20,
    "FM2": 23,
    "FM2+": 26,
    "G34": 31,
    "LGA771": 12,
    "LGA775": 13,
    "LGA1150": 24,
    "LGA1151": 30,
    "LGA1155": 14,
    "LGA1156": 15,
    "LGA1356": 37,
    "LGA1366": 16,
    "LGA2011": 21,
    "LGA2011-3": 28,
    "LGA2066": 35,
    "PGA988": 18
  };

  var sortString = "";

  if (sortOptions.socket){  
    sortString += "&s=";
    for (var s = 0; s < sortOptions.socket.length; s++){
      sortString += socketEquivalences[sortOptions.socket[s]].toString();
      if (s != sortOptions.socket.length - 1){
        sortString += ",";
      }
    }
  }

  request("https://pcpartpicker.com/products/motherboard/fetch/?xcx=0" + sortString + "&mode=list&xslug=&search=", function(error, response, html1){

    var numPages = 1;

    if (html1.toString().lastIndexOf("page=") != -1){
      numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);
    } 

    var fetch = function(q){  

      if (q < numPages){  

        request("https://pcpartpicker.com/products/motherboard/fetch/?xcx=0" + sortString + "&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

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
      
    };
    
    fetch(0);

  });

};

var getCoolers = function(cb){

  var cooleroArray = [];
  var nameArray = [];
  var noiseArray = [];
  var rpmArray = [];
  var priceArray = [];

  request("https://pcpartpicker.com/products/cpu-cooler/fetch/?mode=list&xslug=&search=", function(error, response, html1){

    var numPages = 1;

    if (html1.toString().lastIndexOf("page=") != -1){
      numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);
    } 

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
      
    };
    
    fetch(0);

  });

};

var getCPUs = function(sortOptions, cb){

  var cpuoArray = [];
  var nameArray = [];
  var speedArray = [];
  var tdpArray = [];
  var priceArray = [];
  var coreArray = [];

  var socketEquivalences = {
    "AM1": 27,
    "AM3": 3,
    "AM3+": 4,
    "AM3/AM2+": 6,
    "AM4": 33,
    "TR4": 36,
    "BGA413": 8,
    "BGA559": 10,
    "BGA1023": 25,
    "C32": 32,
    "FM1": 20,
    "FM2": 23,
    "FM2+": 26,
    "G34": 31,
    "LGA771": 12,
    "LGA775": 13,
    "LGA1150": 24,
    "LGA1151": 30,
    "LGA1155": 14,
    "LGA1156": 15,
    "LGA1356": 37,
    "LGA1366": 16,
    "LGA2011": 21,
    "LGA2011-3": 28,
    "LGA2066": 35,
    "PGA988": 18
  };

  var sortString = "";

  if (sortOptions.socket){  
    sortString += "&k=";
    for (var s = 0; s < sortOptions.socket.length; s++){
      sortString += socketEquivalences[sortOptions.socket[s]].toString();
      if (s != sortOptions.socket.length - 1){
        sortString += ",";
      }
    }
  }

  request("https://pcpartpicker.com/products/cpu/fetch/?xcx=0" + sortString + "&mode=list&xslug=&search=", function(error, response, html1){

    var numPages = 1;

    if (html1.toString().lastIndexOf("page=") != -1){
      numPages = parseInt(html1.toString().substring(html1.toString().lastIndexOf("page=") + 5).split("\\\"")[0]);
    } 

    var fetch = function(q){  

      if (q < numPages){  

        request("https://pcpartpicker.com/products/cpu/fetch/?xcx=0" + sortString + "&page=" + (q + 1) + "&mode=list&xslug=&search=", function(error, response, html){

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
      
    };
    
    fetch(0);

  });
};

module.exports.getCPUs = getCPUs;
module.exports.getCoolers = getCoolers;
module.exports.getMotherboards = getMotherboards;
module.exports.getMemory = getMemory;
module.exports.getStorage = getStorage;
module.exports.getGPUs = getGPUs;
module.exports.getPSUs = getPSUs;
module.exports.getCases = getCases;