"use strict";

var go = function go(name, abv) {
    var url;
    if (name != "" && abv != "") {
        url = "https://api.punkapi.com/v2/beers?beer_name=" + name + "&abv_gt=" + abv;
    } else if (abv != "" && name == "") {
        url = "https://api.punkapi.com/v2/beers?abv_gt=" + abv;
    } else if (name != "" && abv == "") {
        url = "https://api.punkapi.com/v2/beers?beer_name=" + name;
    } else {
        var result = "No result";
        document.getElementById('result').innerHTML = result;
    }

    fetch(url).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Noooooooooo');
    }).then(function (response) {
        var beers = response;
        var result = "";
        for (var i = 0; i < beers.length; i++) {
            result += "<image src =" + beers[i].image_url + "/>" + "<br> <b>Name : </b>" + beers[i].name + "<br> <b>Alcohol by volume : </b>" + beers[i].abv + "<br> <b>Description : </b>" + beers[i].description + "<hr>";
        }
        document.getElementById('result').innerHTML = result;
    });
};
