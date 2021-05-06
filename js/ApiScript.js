

async function haeSaa() {

    var url = "https://api.openweathermap.org/data/2.5/weather?q=";
    var url2 = "&units=metric&appid=4fdde48719bdfe924af20e34967c8b45";
    var kaupunki = document.getElementById("hakuteksti").value;

    url = url + kaupunki + url2;


    /*API, hakee tietystä kaupungista tietoa*/
    try {

        let vastaus = await fetch(url);
        if (!vastaus.ok) throw new Error('jokin meni pieleen');
        const tulos = await vastaus.json();
        console.log(tulos);

        let lon = tulos.coord.lon;
        let lat = tulos.coord.lat;
        let temp = tulos.main.temp;
        let humidity = tulos.main.humidity;


        uusiSijainti(lat, lon);


        let summary = "";

        if(temp < 20){
            summary = "Ulkona on liian kylmä! Kannatta pysyä sisällä ja pelata!"
        } else if(humidity > 50){
            summary = "Ulkona on liian kosteaa! Ei ole mitään järkeä lähteä kotoa!"
        } else {
            summary = "Ulkona näyttäisi olevan siedettävä sää, mutta kannattaa silti pysyä kotona ja pelata!"
        }

        document.getElementById('tilanne').innerHTML = "lämpötila: " + temp + "&#8451";
        document.getElementById('tilanne').innerText = document.getElementById('tilanne').innerText
            + "\n" + "ilmankosteus: " + humidity + "%" + "\n" + "\n" + summary;

    } catch (error) {
        console.log(error)
    }

}