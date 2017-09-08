"use strict";

var go = function go(name, abv) {
    var url;
    if (name != "" && abv != "") {
        url = "https://api.punkapi.com/v2/beers?beer_name=" + name + "&abv=" + abv;
    } else if (abv != "" && name == "") {
        url = "https://api.punkapi.com/v2/beers?abv=" + abv;
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
            result += "<b>Name : </b>" + beers[i].name + "<br> <b>Tagline : </b>" + beers[i].tagline + "<br> <b>PH : </b>" + beers[i].ph + "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + beers[i].first_brewed + "<br> <b>Description : </b>" + beers[i].description + "<br>" + "<image src =" + beers[i].image_url + "/><hr>";
        }
        document.getElementById('result').innerHTML = result;
    });
};
