function buscarp(){
    var paragraph = document.getElementsByTagName("p");
    alert(paragraph[1].textContent);
}

function setBodyAttr(attr,value){
    if(document.body) eval('document.body.' + attr + '= " '+value+' " ');
    else notSupported();
}