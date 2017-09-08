const go = (name,abv) => {
    var url
    if (name != "" && abv != ""){
        url = `https://api.punkapi.com/v2/beers?beer_name=${name}&abv_gt=${abv}`;
    }
    else if (abv != "" && name == ""){
        url = `https://api.punkapi.com/v2/beers?abv_gt=${abv}`;
    }
    else if (name != "" && abv == ""){
        url = `https://api.punkapi.com/v2/beers?beer_name=${name}`;
    }
    else {
        let result = "No result";
        document.getElementById('result').innerHTML = result
    }
    

    fetch(url)
    .then(response => response.json())
    .catch(e => console.err('Noooooooooo'))
    .then(response => {
        let beers = response;
        let result = "";
        for (let i = 0; i < beers.length; i++) {
            result += "<image src =" + beers[i].image_url + "/><hr>" +
                "<br> <b>Name : </b>" + beers[i].name +
                "<br> <b>Alcohol by volume : </b>" + beers[i].abv +
                "<br> <b>Description : </b>" + beers[i].description
        }
        document.getElementById('result').innerHTML = result
    })

}



