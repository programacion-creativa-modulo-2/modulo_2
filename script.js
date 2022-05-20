$(document).ready(function(){
    mattina = ["Mattina", "G. Ungaretti", "Me ilumino de inmensidad"]
    bellos_de_los_mares = ["El Más Bello de los Mares", "N. Hikmet", "El más bello de los mares\nEs aquel que no hemos visto.\nLa más linda de las criaturas\nTodavía no ha crecido.\nNuestros días más hermosos\nAún no los hemos vivido.\nY lo mejor de todo aquello que quiero decirte\nTodavía no te lo he dicho."]

    lxvi = ["LXVI", "P.Neruda", "Echan humo, fuego y vapor\nlas o de las locomotoras?\nEn qué idioma cae la lluvia\nsobre ciudades dolorosas?\nQué suaves sílabas repite\n \nel aire del alba marina?\nHay una estrella más abierta\nHay dos colmillos más agudos\nque las sílabas de chacal?"]
    riqueza = ["Riqueza", "RELLENAR", "Tengo la dicha fiel\ny la dicha perdida:\nla una como rosa,\nla otra como espina.\n\nDe lo que me robaronno fui desposeída;\ntengo la dicha fiel\ny la dicha perdida,\ny estoy rica de púrpura\ny de melancolía.\n\n¡Ay, qué amante es la rosa\ny qué amada la espina!\nComo el doble contorno de dos frutas mellizas\ntengo la dicha fiel\ny la dicha perdida."]


    shakespeare = ["TITULO", "Shakespeare", "Estos placeres violentos tienen fines violentos, y en su triunfo mueren como fuego y polvo, que al besarse consumen"]

    palabra = ["La Palabra", "Stella Diaz Varin", "Una sola será mi lucha\nY mi triunfo;\nEncontrar la palabra escondida\naquella vez de nuestro pacto secreto\na pocos días de terminar la infancia.\nDebes recordar\ndónde la guardaste\nDebiste pronunciarla siquiera una vez...\nYa la habría encontrado\nPero tienes razón ese era el pacto.\nMira cómo está mi casa, desarmada.\nHoja por hoja mi casa, de pies a cabeza.\nY mi huerto, forado permanente\nY mis libros cómo mi huerto,\nHojeado hasta el deshilache\nSin dar con la palabra.\nSe termina la búsqueda y el tiempo.\nVencida y condenada\nPor no hallar la palabra que escondiste."]
    nutre = ["¿De qué se Nutre la Nostalgia?", "Mario Benedetti", "Uno evoca dulzuras\ncielos atormentados\ntormentas celestiales\nescándalos sin ruido\npaciencias estiradas\nárboles en el viento\noprobios prescindibles\nbellezas del mercado\ncánticos y alborotos\nlloviznas como pena\nescopetas de sueño\nperdones bien ganados\npero con esos mínimos\nno se arma la nostalgia\nson meros simulacros\nla válida la única\nnostalgia es de tu piel"]

    infinito = ["El Infinito", "G.Leopardi", "Siempre querido me fue este solitario cerro\ny este seto que tanta parte\ndel último horizonte la mirada excluye.\nMas, sentado y mirando interminables\nespacios de allá lejos, y sobrehumanos\nsilencios y su hondísima quietud,\nme quedo enmimismado hasta que casi\nel corazón se teme. Y como el viento\ncuyo tráfago escucho entre las hojas, a este\nsilencio sin fin esta voz\nvoy comparando: y me acuerdo de lo eterno\ny de las muertas estaciones y la presente y viva,\ny sus sonidos. Así a través de esta\ninmensidad se anega el pensamiento mío;\ny naufragar en este mar me es dulce."]
    atardece = ["Y Enseguida Atardece", "S.Quasimodo", "Cada uno está solo sobre el corazón de la tierra,\ntraspasado por un rayo de sol:\ny enseguida atardece."]
    silencio = ["Silencio", "Isabell Allende", "Silencio antes de nacer,\nsilencio después de la muerte:\nla vida no es más que ruido\nentre dos silencios insondables."]

    serenidad = [mattina, bellos_de_los_mares]
    amargura = [lxvi, riqueza]
    ira = []
    amor = [shakespeare]
    nostalgia = [la_palabra, nutre_nostalgia]
    asombro = [infinito, atardece, silencio] 

    sentimientos = [serenidad, amargura, amor]
    var eleccion = false
    
    $("#serenidad").click(function () {
        const random = Math.floor(Math.random() * serenidad.length);
        // console.log(serenidad[random])
        p = serenidad[random]
        eleccion = true
        // for (var i = 0; i < p.length; i++) {
        //     var txt1 = "<p>" + p[i] + "</p>"
        //     $("#poesia").append(txt1)
        // }
    })
    $("#amargura").click(function () {
        const random = Math.floor(Math.random() * amargura.length);
        p = amargura[random]
        eleccion = true

    })
    $("#amor").click(function () {
        const random = Math.floor(Math.random() * amor.length);
        p = amor[random]
        eleccion = true

    })  
    


    $("#btn-generate").click(function () {
        if (eleccion == true) {
            poesia = p[2].split("\n")

            for (var i = 0; i < poesia.length; i++) {
                var parr = document.createElement("p")
                parr.textContent(poesia[i])
                $("#poesia").append(parr)
                
            }
            var autor = "<p>" + p[1] + "</p>"
            $("#autor").append(autor)
            var titulo = "<p>" + p[0] + "</p>"
            $("#titulo").append(titulo)



        }




    })



});




