$(document).ready(function(){


    fondos = ["1", "2", "3", "4", "5"]
    const random2 = Math.floor(Math.random() * fondos.length);


    $("body").css("background-image", "url(img/fondos/bg" + fondos[random2] + ".jpg)");
    $("body").css("background-size", "cover");


    //serenidad
    mattina = ["Mattina", "G. Ungaretti", "Me ilumino de inmensidad"]
    bellos_de_los_mares = ["El Más Bello de los Mares", "N. Hikmet", "El más bello de los mares\nEs aquel que no hemos visto.\nLa más linda de las criaturas\nTodavía no ha crecido.\nNuestros días más hermosos\nAún no los hemos vivido.\nY lo mejor de todo aquello que quiero decirte\nTodavía no te lo he dicho."]
    liguera = ["La Ligera", "Lina Ru", "Con desvelo en las manos, \npretendo herir\na la pluma esclava de mis sueños,\nsu toque cortante\nllega irritada\npor su serenidad."]

    //amargura
    lxvi = ["LXVI", "P.Neruda", "Echan humo, fuego y vapor\nlas o de las locomotoras?\nEn qué idioma cae la lluvia\nsobre ciudades dolorosas?\nQué suaves sílabas repite\n \nel aire del alba marina?\nHay una estrella más abierta\nHay dos colmillos más agudos\nque las sílabas de chacal?"]
    riqueza = ["Riqueza", "G. Mistral", "Tengo la dicha fiel\ny la dicha perdida:\nla una como rosa,\nla otra como espina.\n\nDe lo que me robaronno fui desposeída;\ntengo la dicha fiel\ny la dicha perdida,\ny estoy rica de púrpura\ny de melancolía.\n\n¡Ay, qué amante es la rosa\ny qué amada la espina!\nComo el doble contorno de dos frutas mellizas\ntengo la dicha fiel\ny la dicha perdida."]

    //ira
    ira_1 = ["1", "1", "No quiero\nNo me gusta estar así\nPero mi paciencia se agotaba en cada pelea\nAsí que para por favor\nDejemos el enojo a un lado."]
    ira_2 = ["1", "1", "Detesto mirarte y también no hacerlo,\nodio vivir contigo y también sin ti,\ndeseo salir corriendo y alejarme de aquí.\nMuero de tristeza si no te tengo,\npero también me enojo si a mi lado estás.\nPuedes quedarte o puedes marcharte,\nsi te quedas o te vas ya no me importa más."]
    ira_3 = ["1", "1", "Odio, rabia, ira...¡\nQue fluyen por mis venas\ncuál río embravecido,\nque arde en mi alma\ny congela mis sentidos"] 

    //amor
    shakespeare = ["1", "Shakespeare", "Estos placeres violentos tienen fines violentos, y en su triunfo mueren como fuego y polvo, que al besarse consumen"]
    amor_2 = ["1", "Charles Bukowsky", "Quiero estar contigo, tan simple y tan complicado como eso."]
    annabel = ["Annabel Lee", "Edgar Allan Poe", "Fue hace ya muchos, muchos años,\nen un reino junto al mar,\nhabitaba una doncella a quien tal vez conozcan\npor el nombre de Annabel Lee;\ny esta dama vivía sin otro deseo\nque el de amarme, y de ser amada por mí.\n\nYo era un niño, y ella una niña\nen aquel reino junto al mar;\nNos amamos con una pasión más grande que el amor,\nYo y mi Annabel Lee;\ncon tal ternura, que los alados serafines\nlloraban rencor desde las alturas.\nY por esta razón, hace mucho, mucho tiempo,\nen aquel reino junto al mar,\nun viento sopló de una nube,\nhelando a mi hermosa Annabel Lee;\nsombríos ancestros llegaron de pronto,\ny la arrastraron muy lejos de mi,\nhasta encerrarla en un oscuro sepulcro,\nen aquel reino junto al mar.\n\nLos ángeles, a medias felices en el Cielo,\nnos envidiaron, a Ella a mí.\nSí, esa fue la razón (como los hombres saben,\nen aquel reino junto al mar),\nde que el viento soplase desde las nocturnas nubes,\nhelando y matando a mi Annabel Lee.\n\nPero nuestro amor era más fuerte, más intenso\nque el de todos nuestros ancestros,\nmás grande que el de todos los sabios.\nY ningún ángel en su bóveda celeste,\nningún demonio debajo del océano,\npodrá jamás separar mi alma\nde mi hermosa Annabel Lee.\n\nPues la luna nunca brilla sin traerme el sueño\nde mi bella compañera.\nY las estrellas nunca se elevan sin evocar\nsus radiantes ojos.\nAún hoy, cuando en la noche danza la marea,\nme acuesto junto a mi querida, a mi amada;\na mi vida y mi adorada,\nen su sepulcro junto a las olas,\nen su tumba junto al rugiente mar."]

    //nostalgia
    palabra = ["La Palabra", "Stella Diaz Varin", "Una sola será mi lucha\nY mi triunfo;\nEncontrar la palabra escondida\naquella vez de nuestro pacto secreto\na pocos días de terminar la infancia.\nDebes recordar\ndónde la guardaste\nDebiste pronunciarla siquiera una vez...\nYa la habría encontrado\nPero tienes razón ese era el pacto.\nMira cómo está mi casa, desarmada.\nHoja por hoja mi casa, de pies a cabeza.\nY mi huerto, forado permanente\nY mis libros cómo mi huerto,\nHojeado hasta el deshilache\nSin dar con la palabra.\nSe termina la búsqueda y el tiempo.\nVencida y condenada\nPor no hallar la palabra que escondiste."]
    nutre = ["¿De qué se Nutre la Nostalgia?", "Mario Benedetti", "Uno evoca dulzuras\ncielos atormentados\ntormentas celestiales\nescándalos sin ruido\npaciencias estiradas\nárboles en el viento\noprobios prescindibles\nbellezas del mercado\ncánticos y alborotos\nlloviznas como pena\nescopetas de sueño\nperdones bien ganados\npero con esos mínimos\nno se arma la nostalgia\nson meros simulacros\nla válida la única\nnostalgia es de tu piel"]
    nostalgia_3 = ["1", "Safo", "Se fue la Luna.\nSe pusieron las Pléyades.\nEs medianoche.\nPasa el tiempo.\nEstoy sola"]


    //asombro
    infinito = ["El Infinito", "G.Leopardi", "Siempre querido me fue este solitario cerro\ny este seto que tanta parte\ndel último horizonte la mirada excluye.\nMas, sentado y mirando interminables\nespacios de allá lejos, y sobrehumanos\nsilencios y su hondísima quietud,\nme quedo enmimismado hasta que casi\nel corazón se teme. Y como el viento\ncuyo tráfago escucho entre las hojas, a este\nsilencio sin fin esta voz\nvoy comparando: y me acuerdo de lo eterno\ny de las muertas estaciones y la presente y viva,\ny sus sonidos. Así a través de esta\ninmensidad se anega el pensamiento mío;\ny naufragar en este mar me es dulce."]
    atardece = ["Y Enseguida Atardece", "S.Quasimodo", "Cada uno está solo sobre el corazón de la tierra,\ntraspasado por un rayo de sol:\ny enseguida atardece."]
    silencio = ["Silencio", "Isabell Allende", "Silencio antes de nacer,\nsilencio después de la muerte:\nla vida no es más que ruido\nentre dos silencios insondables."]

    serenidad = [mattina, bellos_de_los_mares, liguera]
    amargura = [lxvi, riqueza]
    ira = [ira_1, ira_2, ira_3]
    amor = [shakespeare, amor_2, annabel]
    nostalgia = [palabra, nutre, nostalgia_3]
    asombro = [infinito, atardece, silencio] 

    sentimientos = [serenidad, amargura, ira, amor, nostalgia, asombro]
    var eleccion = false

    p = 0
    
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

    $("#ira").click(function () {
        const random = Math.floor(Math.random() * ira.length);
        p = ira[random]
        eleccion = true

    })

    $("#amor").click(function () {
        const random = Math.floor(Math.random() * amor.length);
        p = amor[random]
        eleccion = true

    })

    $("#nostalgia").click(function () {
        const random = Math.floor(Math.random() * nostalgia.length);
        p = nostalgia[random]
        eleccion = true

    })
    $("#asombro").click(function () {
        const random = Math.floor(Math.random() * asombro.length);
        p = asombro[random]
        eleccion = true

    })
    console.log(p)

    $("button").click(function () {
        $("button").css("transitio-duration", "1s")
        $("button").css("background-color", "white")
        $("button").css("color", "black")

        $(this).css("transition-duration", "1s")
        $(this).css("background-color", "black")
        $(this).css("color", "white")

    })
    


    $("#btn-generate").click(function () {
        $(".x").remove();
        papel = ["A", "B", "C", "D"]
        const random1 = Math.floor(Math.random() * papel.length);
        console.log(papel[random1])

        $("#divpoesia").css("background-image", "url(img/estilos/estilo" + papel[random1] + ".jpg)");
        if (eleccion == true) {
            poesia = p[2].split("\n")
            // console.log(p)
            // parr = document.createElement("p")
            // parr.textContent = p[2]
            // $("#poesia").append(parr)

            for (var i = 0; i < poesia.length; i++) {
                console.log(poesia[i])
                var parr = document.createElement("p")
                $(parr).attr("class", "x")
                parr.textContent = poesia[i]
                $("#poesia").append(parr)
                
            }
            var autor = "<p>" + p[1] + "</p>"
            $(autor).attr("class", "x")
            $("#autor").append(autor)
            
            var titulo = "<p>" + p[0] + "</p>"
            $(titulo).attr("class", "x")
            $("#titulo").append(titulo)
            $("#titulo").css("font-size", "30px")
            titulo.addClass = "x"

            $("#cuerpo").css("font-family",  "Zilla Slab Highlight, cursive")



        }




    })



});




