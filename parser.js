window.addEventListener("load", loadXML);

function loadXML(){
    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        parse(this.responseXML);
    }
    ajax.open("GET", "index_xsl.xml", true);
    ajax.send();
}

function parse(xml){
    const movies = xml.getElementsByTagName("movie");
    let htmlData = "";

    for (let i = 0; i < movies.length; i++){
        htmlData += "<h2>" + movies[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
    }

    document.getElementById("movies").innerHTML = htmlData;
}