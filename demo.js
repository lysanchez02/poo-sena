function promNota(nota1=parseFloat(document.getElementById("N1").value), nota2=parseFloat(document.getElementById("N2").value), nota3=parseFloat(document.getElementById("N3").value)){
    var promed=(nota1+nota2+nota3)/3

if (promed>=5.0 & promed<=7.0) {
        alert("APROBADO :D")
} else {

    if (promed>=3.0 & promed<5.0) {
        alert("PRESENTAR EXAMEN!!!")
    } else {
        
        if (promed<3.0) {
      alert("REPROBADO :(")
        } else {

            alert("ERROR!!!")
   }
  }   
 }
}
