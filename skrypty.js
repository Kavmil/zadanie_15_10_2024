function skrypt1(){
    var wartoscH = parseFloat(document.getElementById("wartoscH").value);
    // alert(wartoscH);
    document.getElementById("komorka1").style.backgroundColor="hsl("+wartoscH+",100%,50%)";
    document.getElementById("komorka2").style.backgroundColor="hsl("+wartoscH+",80%,50%)";
    document.getElementById("komorka3").style.backgroundColor="hsl("+wartoscH+",60%,50%)";
    document.getElementById("komorka4").style.backgroundColor="hsl("+wartoscH+",40%,50%)";
    document.getElementById("komorka5").style.backgroundColor="hsl("+wartoscH+",20%,50%)";
}