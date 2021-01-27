window.onload = function() {
    document.getElementById("_searchButton").addEventListener("go",getTheTune());
}

async function getTheTune(){
    var yolo = await fetch("https://itunes.apple.com/search?media=music&attributeType=music&term=" + document.getElementById("_searchBar").value.replaceAll(" ", "+"));
    var blbl = document.getElementById("myresults");
    const sto = await yolo.json();
    document.getElementById("myresults").innerHTML = "";
    sto.results.forEach(element => {
        var tmp = document.createElement("div");
        tmp.addEventListener("click", function(){
            document.getElementById("myaudio").pause();
            document.getElementById("myaudio").setAttribute('src', element.previewUrl);
            document.getElementById("myaudio").load();
            document.getElementById("myaudio").play();
            document.getElementById("playing").innerHTML = element.trackName;
        });
        tmp.innerHTML += '<img src="'+element.artworkUrl100+'"/><p style="font-size: 200%">'+ element.artistName + '</p><br><br>' + element.trackName + ' | Album: ' + element.collectionName;
        tmp.setAttribute("style", "border: 1px solid; width: 31vw; margin: 5px; background-color: lightblue;")
        blbl.appendChild(tmp);
    });
}