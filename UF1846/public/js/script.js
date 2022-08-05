{
    fetch('https://picsum.photos/v2/list?limit=5')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
           // console.log(myJson);
            emplenarSelector(myJson);
        });

    function emplenarSelector(dadesJson) {
        var selectorImatges = document.querySelector('.w3-select');
        for (var i = 0; i < dadesJson.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = dadesJson[i].author;
            opt.value = dadesJson[i].download_url;
            selectorImatges.appendChild(opt);
        }
    }

    document.querySelector('.w3-select').onchange = (event) => {
        //console.log(event.target.value);
        document.querySelector('#imatgeSeleccionada').src = event.target.value;
    }
}