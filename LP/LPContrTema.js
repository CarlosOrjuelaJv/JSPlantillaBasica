/* 
 * LP-SENA 2014
 * Programacion
 * CarlosAOL
 */
//programacion prototipos
//globales no asociadas a la clase

// controla los slides, con los botones siguiente, anterior o los oculta con el home, muestra el fondo cuando esta en el tema
var globalNumTema = 0;

var LPContrTema = (function() {
    //constructor
    function LPContrTema(arrSlide, bntSigui, btnAnte, btnVolver, fondoOpa) {
        globalNumTema++;
        var errOres = 0;

        //console.log(arrSlide);
        //publicas
        //controla que esten los elementos en el DOM
        try {
            if (bntSigui.length) {
                //...
            } else {
                errOres++;
                console.log("no hay boton siguiente en el tema" + globalNumTema + "!!");
            }
            if (btnAnte.length) {
                //...
            } else {
                errOres++;
                console.log("no hay boton anterior en el tema" + globalNumTema + "!!");
            }
            if (btnVolver.length) {
                //...
            } else {
                errOres++;
                console.log("no hay boton anterior en el tema" + globalNumTema + "!!");
            }
            if (fondoOpa.length) {
                //...
            } else {
                errOres++;
                console.log("no hay boton anterior en el tema" + globalNumTema + "!!");
            }
            if (arrSlide.length) {
                for (var i = 0; i < arrSlide.length; i++) {
                    if (arrSlide[i].length) {
                        //...
                    } else {
                        errOres++;
                        console.log("no hay slide:" + i + ", en el tema:" + globalNumTema + "!!");
                    }
                }
            } else {
                errOres++;
                console.log("no hay Slides en el tema" + globalNumTema + "!!");
            }
            if (errOres > 0) {
                throw new Error("Esto es un error");
            }
        } catch (Error) {
            console.log("hay un error no se sigue la construccion!! "+Error+","+errOres);

        }
        console.log("Crea Tema:" + globalNumTema);
        this.slideActual;
        this.slidesVistos = new Array();
        this.boolViotema = false;
        this.arrSlide = arrSlide;
        this.bntSigui = bntSigui;
        this.btnAnte = btnAnte;
        this.btnVolver = btnVolver;
        this.fondoOpa = fondoOpa;
        this.numSlide = arrSlide.length;

        for (i = 0; i < arrSlide.length; i++) {
            this.slidesVistos.push(false);
        }

        this.slidesVistos[0] = true;
        this.slideActual = 0;
        this.ocultarTodo();
        //console.log(arrSlide);
        //this.bntSigui.animate({height: "120%",width: "120%"});

    }////fin constructor

    LPContrTema.prototype.visiFondo = function(visi) {// 
        if (visi) {
            $(this.fondoOpa).show();
        } else {
            $(this.fondoOpa).hide();
        }
    };	//fin funcion	
    LPContrTema.prototype.getArrSlide = function() {
        return this.arrSlide;
    };
//obtiene el array de slides
    LPContrTema.prototype.getVioTemaCompleto = function() {
        return this.boolViotema;

    };
//obtiene el div con el btn sigui
    LPContrTema.prototype.getBntSigui = function() {
        return this.bntSigui;
    };
//obtiene el div con el btn anterior
    LPContrTema.prototype.getBtnAnte = function() {
        return this.btnAnte;
    };
//obtiene el div de btn volver
    LPContrTema.prototype.getBtnVolver = function() {
        return this.btnVolver;
    };
//retorna slides vistos
    LPContrTema.prototype.getSlidesVistos = function() {
        return this.slidesVistos;

    };
//retorna slides vistos
    LPContrTema.prototype.visiVolver = function(visi) {

        if (visi) {
            this.btnVolver.show();

        } else {
            this.btnVolver.hide();
        }
    };
//muestra el primer slide del tema
    LPContrTema.prototype.empezarTema = function() {
        this.arrSlide[0].show();


        // TweenMax.to(this.arrSlide[this.slideActual], 0, {rotationX:-90});
        // TweenMax.to(this.arrSlide[this.slideActual], 1.5, {rotationX:0,ease:Back.easeOut});

        if (this.numSlide > 1) {
            this.bntSigui.show();
        }
        if (this.numSlide == 1) {//si solo tiene un slide muestra volver
            this.btnVolver.show();
        }
        if (this.boolViotema) {
            this.btnVolver.show();
        }
        this.fondoOpa.show();
        ///animaciones personalizadas 

    };
////controla click al boton siguiente slide
    LPContrTema.prototype.siguSlide = function() {


        if (this.slideActual < (this.numSlide - 1)) {
            this.ocultarSlide();
            this.btnAnte.show();
            this.slideActual++;
            this.bntSigui.show();
            this.arrSlide[this.slideActual].show();
            // TweenMax.to(this.arrSlide[this.slideActual], 0, {rotationX:-90});
            //  TweenMax.to(this.arrSlide[this.slideActual], 1.5, {rotationX:0,ease:Back.easeOut});

        }
        if (this.slideActual >= (this.numSlide - 1)) {
            this.bntSigui.hide();
            this.btnVolver.show();

            this.boolViotema = true;
            //animacion

        }
        ;


    };
//oculta todo
    LPContrTema.prototype.ocultarSlide = function() {

        for (i = 0; i < this.numSlide; i++) {
            this.arrSlide[i].hide();
        }
        this.bntSigui.hide();
        this.btnAnte.hide();
        if (!this.boolViotema) {
            this.btnVolver.hide();
        }

    };
//oculta todo
    LPContrTema.prototype.ocultarTodo = function() {

        for (i = 0; i < this.numSlide; i++) {
            $(this.arrSlide[i]).hide();
        }
        $(this.fondoOpa).hide();
        $(this.bntSigui).hide();
        $(this.btnAnte).hide();
        $(this.btnVolver).hide();
        this.slideActual = 0;

    };
////controla click al boton anterior slide
    LPContrTema.prototype.antSlide = function() {

        if (this.slideActual >= 1) {
            this.ocultarSlide();
            this.bntSigui.show();
            this.slideActual--;
            this.btnAnte.show();
            this.arrSlide[this.slideActual].show();

            //TweenMax.to(this.arrSlide[this.slideActual], 0, {rotationX:-90});
            // TweenMax.to(this.arrSlide[this.slideActual], 1.5, {rotationX:0,ease:Back.easeOut});

        }
        if (this.slideActual < 1) {
            this.btnAnte.hide();
        }

    };


    LPContrTema.prototype.getSlideActual = function() {
        return this.slideActual;
    };

    LPContrTema.prototype.getSlideActualMovieClip = function() {
        return this.arrSlide[this.slideActual];
    };//fin funcion

    LPContrTema.prototype.llegoLimite = function() {
        var limite = false;
        if (this.slideActual < 1) {
            limite = true;
        }
        if (this.slideActual >= (this.numSlide - 1)) {
            limite = true;
        }
        return limite;
    };
    ///retorna el objeto
    return LPContrTema;
})();
