function promedioNotas ( nota1, nota2, nota3){


    var promed=nota1+nota2+nota3/3
	parseFloat=(promed)
    if (promed <3.0) {
        console.log("REPROBADO");
    } else {
        if (promed>=3.0 & promed<5.0) {
            console.log("presentar examen")

        } else {


            if    (promed >=5.0 & promed <=7.0) {
              
                console.log("APROBADO");
            
            }
            else {
                console.log("error!!!")
            }
            
        }
    }
}

promedioNotas(7, 7, 6); 