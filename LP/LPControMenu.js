/* 
 * LP-SENA 2014
 * Programacion
 * CarlosAOL
 */



var estaEnTema = false;
var globalMenu = 0;
//toma un array de temas, un array de botones principales, y si es secuencial
// controla la creacion del menu, para llamar los temas por su respectivo boton del menu

var LPControMenu = (function() {
    function LPControMenu(arrTemas, arrBotonesPrinci, secuencial) {
        var errores = 0;
        globalMenu++;
        //revisa que existan los componentes en el DOM
        try {

            for (var i = 0; i < arrBotonesPrinci.length; i++) {
                if (arrBotonesPrinci[i].length) {
                    //...
                } else {
                    console.log("no hay boton: " + i + " en el Menu" + globalMenu + "!!");
                    errores++;
                }
            }
            if (errores > 0) {
                throw new Error("Esto es un error");
            }
        } catch (Error) {
            console.log("hay un error no se sigue la construccion!!");
        }

        console.log("Crea menu:" + globalMenu);
        this.name = "Menu" + globalMenu;
        this.numTemaActual = 0;
        this.yaVisitado = new Array();
        this.secuencial = secuencial;
        this.arrTemas = arrTemas;
        this.contSecuendia = 0;
        this.arrayTemasVistos = new Array();
        this.arrBotonesPrinci = arrBotonesPrinci;
        for (i = 0; i < arrTemas.length; i++) {
            //this.arrTemas[i].ocultarTodo();
            this.arrayTemasVistos.push(false);
            this.yaVisitado.push(false);
        }

        this.arrayTemasVistos[0] = true;//el primer tema siempre sera visible
        if (!secuencial) {
            for (i = 0; i < this.arrTemas.length; i++)
            {
                this.arrayTemasVistos[i] = true;
            }
        }


    }

    LPControMenu.prototype.verTema = function(numTema) {// muestra el primer slide del tema

        if (this.secuencial) {
            if (this.arrayTemasVistos[numTema])
            {
                this.numTemaActual = numTema;
                this.visiBotones(false);
                this.arrTemas[numTema].empezarTema();
                estaEnTema = true;

                if (this.contSecuendia < (this.arrTemas.length - 1)) // se le resta uno por que empieza desde 0
                {
                    this.contSecuendia = numTema + 1;

                }
                if (this.arrTemas[numTema].getArrSlide().length == 1) {//si tiene mas de dos slides se cumple es con el btn siguiente
                    this.arrayTemasVistos[this.contSecuendia] = true;
                }
                //this.arrayTemasVistos[this.contSecuendia] = true;
                //this.yaVisitado[numTema] = true;
                ////////////////////


               // new LPResalteGenerico(this.arrBotonesPrinci[numTema], 'tinta');
            }
        } else {


            this.numTemaActual = numTema;
            this.visiBotones(false);
            this.arrTemas[numTema].empezarTema();
            estaEnTema = true;
            /////

            //  TweenMax.to(this.arrBotonesPrinci[numTema], 0, {css:{opacity:"0.5"} });
           // new LPResalteGenerico(this.arrBotonesPrinci[numTema], 'tinta');
        }



    };
    LPControMenu.prototype.verAnterior = function() {// muestra el siguiente slide del tema, si tiene
        this.arrTemas[this.numTemaActual].antSlide();
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    };

    LPControMenu.prototype.verSiguiente = function() {// muestra el anterior slide del tema,
        this.arrTemas[this.numTemaActual].siguSlide();

        if (this.arrTemas[this.numTemaActual].llegoLimite()) {
            this.arrayTemasVistos[this.contSecuendia] = true;
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    };

    LPControMenu.prototype.getYaVisitado = function(num) {// retorna que tema fue visitado

        if (num <= this.arrTemas.length && num >= 0) {
            return this.yaVisitado[num];
        } else {
            console.log("get ya visitado tema sale de los indices!!");

        }

    }
//////vio todos
    LPControMenu.prototype.siVioTodosLosTemas = function() {// retorna booloean si ya vio todos los temas del menu
        var siLosVio = false;
        var cont = 0;
        // console.log(this.yaVisitado.length+"tama�o"+this.arrTemas.length);
        for (i = 0; i < this.yaVisitado.length; i++) {
            if (this.yaVisitado[i]) {
                cont++;
            }
        }
        if (cont >= this.yaVisitado.length) {
            siLosVio = true;
        }
        return siLosVio;
    }
//////vio todos
    LPControMenu.prototype.siTemaDisponible = function(num) {// retorna si el tema indicado esta Disponible para ver
        return this.arrayTemasVistos[num];
    }
    LPControMenu.prototype.volverMenu = function() {// esconde slides, muestra botones del menu

        this.visiBotones(true);
        this.arrTemas[this.numTemaActual].ocultarTodo();//ponerle a todo el  this...
        estaEnTema = false;

        //////////////////////////////////
        this.arrayTemasVistos[this.contSecuendia] = true;
        this.yaVisitado[this.numTemaActual] = true;

        /////////////////////////////////<--------------------------------------------------------
        return this.numTemaActual;
    };
    LPControMenu.prototype.visiBotones = function(visi) { // ver botones princi
        if (visi) {
            for (i = 0; i < this.arrBotonesPrinci.length; i++)
            {
                $(this.arrBotonesPrinci[i]).show();
            }
        } else {
            for (i = 0; i < this.arrBotonesPrinci.length; i++) {

                $(this.arrBotonesPrinci[i]).hide();
            }
        }


    };

    LPControMenu.prototype.ocultarBtnSigui = function(visi) {
        if (visi) {
            $(this.arrTemas[this.numTemaActual].getBntSigui()).show();
        } else {
            $(this.arrTemas[this.numTemaActual].getBntSigui()).hide();
        }
    };

    LPControMenu.prototype.ocultarBtnAnte = function(visi) {
        if (visi) {
            $(this.arrTemas[this.numTemaActual].getBtnAnte()).show();
        } else {
            $(this.arrTemas[this.numTemaActual].getBtnAnte()).hide();
        }
    };
    LPControMenu.prototype.getTemaActual = function(numTema) {//retorna el tema indicado, para llamar dunciones propias del tema
        return   this.arrTemas[numTema];
    };
    LPControMenu.prototype.getTemaActualSLideActual = function() {//retorna el slide actual del tema en ejecucion
        return   this.arrTemas[this.numTemaActual].getArrSlide()[ this.arrTemas[this.numTemaActual].getSlideActual()];
        ;
    };

    LPControMenu.prototype.getNumTemaActual = function() {// retorna el numero del tema actual
        return   this.numTemaActual;
    };
    LPControMenu.prototype.siEstaEnTema = function() {
        return   estaEnTema;
    };
    LPControMenu.prototype.setSecuencial = function(secuencial) {// o.o tecal rapida desactiva secuencial
        this.secuencial = secuencial;
    };
    LPControMenu.prototype.verVolver = function(visi) {// o.o tecal rapida desactiva secuencial

        this.arrTemas[this.numTemaActual].visiVolver(visi);
        //animacion
        // TweenMax.to(this.arrTemas[this.numTemaActual].getBtnVolver(), 0, {css: {scaleY: 0, scaleX: 0}});
        //TweenMax.to(this.arrTemas[this.numTemaActual].getBtnVolver(), 1, {css: {scaleY: 1, scaleX: 1}});
    };
    ///////////
    

    return LPControMenu;
})();


