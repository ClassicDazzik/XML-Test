window.addEventListener("load", loadXML);

let xmlDoc;
let i = 0;

function loadXML(){
    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        xmlDoc = this.responseXML;
        parse(i);
    }
    ajax.open("GET", "index_xsl.xml", true);
    ajax.send();
}

function next(){
    parse(++i)
}

function back(){
    parse(--i)
}

function parse(index){
    const movies = xmlDoc.getElementsByTagName("movie");
    
    if (index < 0) {
        index = 0;
        i = 0;
    }

    if (index > movies.length - 1) {
        index = movies.length - 1;
        i = movies.length - 1;
    }

    let htmlData = "<h2>" + movies[index].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>";
    htmlData += "<h3>" + movies[index].getElementsByTagName("runtime")[0].childNodes[0].nodeValue + "</h3>";
    htmlData += "<p>" + movies[index].getElementsByTagName("director")[0].childNodes[0].nodeValue + "</p>";
    htmlData += "<p>" + movies[index].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</p>";
    htmlData += "<p>" + movies[index].getElementsByTagName("budget")[0].childNodes[0].nodeValue + "</p>";

    document.getElementById("movies").innerHTML = htmlData;
}