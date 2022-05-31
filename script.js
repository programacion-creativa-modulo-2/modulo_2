$(document).ready(function(){
    $("<audio></audio>").attr({
        'id': "audio",
        'src':'audio/november.mp3',
        'volume': 0.1,
        'autoplay':'autoplay',
        'loop': 'true'
    }).appendTo("body");

    estilos = ["'Cutive Mono', monospace", "'Spectral', serif", "'WindSong', cursive", "'Zilla Slab Highlight', cursive"]

    fondos = ["1", "2", "3", "4", "5"]
    const random2 = Math.floor(Math.random() * fondos.length);

    fotos_portada = ["1", "2", "3", "4"]
    const random3 = Math.floor(Math.random() * fotos_portada.length);
    $("#fotoportada").attr("src", "img/portada/p" + fotos_portada[random3] + ".jpg")


    $("body").css("background-image", "url(img/fondos/bg" + fondos[random2] + ".jpg)");
    $("body").css("background-size", "cover");

    $("#botonportada").click(function() {
        $("#portada").css("transition-duration", "1s");

        $("#portada").css("opacity", "0");
        $("#portada").css("z-index", "-1");
        var audio = $("#audio")
        audio.play
        // $("#portada").hide(10000);



    })


    //serenidad
    mattina = ["Mattina", "G. Ungaretti", "Me ilumino de inmensidad"]
    bellos_de_los_mares = ["El Más Bello de los Mares", "N. Hikmet", "El más bello de los mares\nEs aquel que no hemos visto.\nLa más linda de las criaturas\nTodavía no ha crecido.\nNuestros días más hermosos\nAún no los hemos vivido.\nY lo mejor de todo aquello que quiero decirte\nTodavía no te lo he dicho."]
    liguera = ["La Ligera", "Lina Ru", "Con desvelo en las manos, \npretendo herir\na la pluma esclava de mis sueños,\nsu toque cortante\nllega irritada\npor su serenidad."]

    //amargura
    lxvi = ["LXVI", "P.Neruda", "Echan humo, fuego y vapor\nlas o de las locomotoras?\nEn qué idioma cae la lluvia\nsobre ciudades dolorosas?\nQué suaves sílabas repite\n \nel aire del alba marina?\nHay una estrella más abierta\nHay dos colmillos más agudos\nque las sílabas de chacal?"]
    riqueza = ["Riqueza", "G. Mistral", "Tengo la dicha fiel\ny la dicha perdida:\nla una como rosa,\nla otra como espina.\n\nDe lo que me robaronno fui desposeída;\ntengo la dicha fiel\ny la dicha perdida,\ny estoy rica de púrpura\ny de melancolía.\n\n¡Ay, qué amante es la rosa\ny qué amada la espina!\nComo el doble contorno de dos frutas mellizas\ntengo la dicha fiel\ny la dicha perdida."]

    //ira
    ira_1 = ["", "", "No quiero\nNo me gusta estar así\nPero mi paciencia se agotaba en cada pelea\nAsí que para por favor\nDejemos el enojo a un lado."]
    ira_2 = ["", "", "Detesto mirarte y también no hacerlo,\nodio vivir contigo y también sin ti,\ndeseo salir corriendo y alejarme de aquí.\nMuero de tristeza si no te tengo,\npero también me enojo si a mi lado estás.\nPuedes quedarte o puedes marcharte,\nsi te quedas o te vas ya no me importa más."]
    ira_3 = ["", "", "Odio, rabia, ira...¡\nQue fluyen por mis venas\ncuál río embravecido,\nque arde en mi alma\ny congela mis sentidos"] 

    //amor
    shakespeare = ["", "Shakespeare", "Estos placeres violentos tienen fines violentos, y en su triunfo mueren como fuego y polvo, que al besarse consumen"]
    amor_2 = ["", "Charles Bukowsky", "Quiero estar contigo, tan simple y tan complicado como eso."]
    annabel = ["Annabel Lee", "Edgar Allan Poe", "Fue hace ya muchos, muchos años,\nen un reino junto al mar,\nhabitaba una doncella a quien tal vez conozcan\npor el nombre de Annabel Lee;\ny esta dama vivía sin otro deseo\nque el de amarme, y de ser amada por mí.\n\nYo era un niño, y ella una niña\nen aquel reino junto al mar;\nNos amamos con una pasión más grande que el amor,\nYo y mi Annabel Lee;\ncon tal ternura, que los alados serafines\nlloraban rencor desde las alturas."]

    //nostalgia
    palabra = ["La Palabra", "Stella Diaz Varin", "Una sola será mi lucha\nY mi triunfo;\nEncontrar la palabra escondida\naquella vez de nuestro pacto secreto\na pocos días de terminar la infancia.\nDebes recordar\ndónde la guardaste\nDebiste pronunciarla siquiera una vez...\nYa la habría encontrado\nPero tienes razón ese era el pacto.\nMira cómo está mi casa, desarmada.\nHoja por hoja mi casa, de pies a cabeza.\nY mi huerto, forado permanente\nY mis libros cómo mi huerto,\nHojeado hasta el deshilache\nSin dar con la palabra.\nSe termina la búsqueda y el tiempo.\nVencida y condenada\nPor no hallar la palabra que escondiste."]
    nutre = ["¿De qué se Nutre la Nostalgia?", "Mario Benedetti", "Uno evoca dulzuras\ncielos atormentados\ntormentas celestiales\nescándalos sin ruido\npaciencias estiradas\nárboles en el viento\noprobios prescindibles\nbellezas del mercado\ncánticos y alborotos\nlloviznas como pena\nescopetas de sueño\nperdones bien ganados\npero con esos mínimos\nno se arma la nostalgia\nson meros simulacros\nla válida la única\nnostalgia es de tu piel"]
    nostalgia_3 = ["", "Safo", "Se fue la Luna.\nSe pusieron las Pléyades.\nEs medianoche.\nPasa el tiempo.\nEstoy sola"]


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
    var eleccion_estilo = false

    p = 0

    $("#0").css("font-family", estilos[0])
    $("#1").css("font-family", estilos[1])
    $("#2").css("font-family", estilos[2])
    $("#3").css("font-family", estilos[3])
    
    $("#serenidad").click(function () {
        const random = Math.floor(Math.random() * serenidad.length);
        // console.log(serenidad[random])
        p = serenidad[random]

        // for (var i = 0; i < p.length; i++) {
        //     var txt1 = "<p>" + p[i] + "</p>"
        //     $("#poesia").append(txt1)
        // }
    })
    $("#amargura").click(function () {
        const random = Math.floor(Math.random() * amargura.length);
        p = amargura[random]


    })

    $("#ira").click(function () {
        const random = Math.floor(Math.random() * ira.length);
        p = ira[random]


    })

    $("#amor").click(function () {
        const random = Math.floor(Math.random() * amor.length);
        p = amor[random]

    })

    $("#nostalgia").click(function () {
        const random = Math.floor(Math.random() * nostalgia.length);
        p = nostalgia[random]


    })
    $("#asombro").click(function () {
        const random = Math.floor(Math.random() * asombro.length);
        p = asombro[random]


    })
    console.log(p)


    // $("button").mouseenter(function() {
    //     $(this).css("transition-duration", "0.5s")
    //     $(this).css("background-color", "#00000080")



    // })

    // $("button").mouseleave(function() {
    //     $(this).css("transition-duration", "0.5s")
    //     $(this).css("background-color", "#000000")

    // })

    $(".button1").click(function () {
        $(".button1").css("transitio-duration", "0.5s")
        $(".button1").css("background-color", "black")
        $(".button1").css("color", "white")

        $(this).css("transition-duration", "1s")
        $(this).css("background-color", "white")
        $(this).css("color", "black")
        eleccion = true
        console.log(eleccion, eleccion_estilo)
        if (eleccion == true && eleccion_estilo == true) {
            console.log("holi")
            // $("#btn-generate").css("transition-duration", "1s")
            $("#btn-generate").css("visibility", "visible")

            
        }

    })
    e = "0"

    $(".button2").click(function () {
        $(".button2").css("transitio-duration", "0.5s")
        $(".button2").css("background-color", "white")
        $(".button2").css("color", "black")

        $(this).css("transition-duration", "1s")
        $(this).css("background-color", "black")
        $(this).css("color", "white")
        e = $(this).attr("id")
        font = estilos[parseInt(e)]
        eleccion_estilo = true
        console.log(eleccion, eleccion_estilo)
        if (eleccion == true && eleccion_estilo == true) {
            // $("#btn-generate").css("transition-duration", "1s")
            $("#btn-generate").css("visibility", "visible")

            
        }

    })


    $("#btn-generate").click(function () {
        $(".x").remove();
        papel = ["A", "B", "C", "D"]
        const random1 = Math.floor(Math.random() * papel.length);
        console.log(papel[random1])

        
        if (eleccion == true && eleccion_estilo == true) {
            $("#divpoesia").css("background-image", "url(img/estilos/estilo" + papel[random1] + ".jpg)");
            poesia = p[2].split("\n")
            // console.log(p)
            // parr = document.createElement("p")
            // parr.textContent = p[2]
            // $("#poesia").append(parr)
            var titulo = document.createElement("p")
            $(titulo).attr("class", "x")
            $(titulo).css("font-family", font)
            titulo.textContent = p[0]
            $("#titulo").append(titulo)
            
            
            $("#titulo").css("font-size", "30px")

            for (var i = 0; i < poesia.length; i++) {
                console.log(poesia[i])
                var parr = document.createElement("p")
                $(parr).attr("class", "x")
                parr.textContent = poesia[i]
                $(parr).css("font-family", font)
                $("#poesia").append(parr)
                
                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
            }
            var autor = document.createElement("p")
            $(autor).attr("class", "x")
            autor.textContent = p[1]
            $(autor).css("font-family", font)
            $("#autor").append(autor)
            






        }




    })



});




