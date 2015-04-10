/* 
 * LP-SENA 2014
 * Programacion
 * CarlosAOL
 */
//toma los numero de botones, el nombre del slide sin el secuencial, el array de los subslides, el boton anterior Jqury, boton volver jquery, fondo,y si es secuencial
//crea los temas del menu, un tema por cada boton del menu, los temas son los contenedores de los slides, pueden tener 1 o mas slides...
//un menu contiene uno o mas temas, un tema contiene uno o mas slides

var LPControladorInterfaz = function (numeroBotones, nombreBtn, nombreSlide, subSlidesNum, btnSiguiente, btnAnterior, btnVolver, fondoPrinci, secuencial) {

    ////////////////////////// crea con un bucle los temas(conjunto de slides)y los menu(conjuntos de temas)
    this.controMenu;
    this.numeroBotones = numeroBotones;
    var subSlides = new Array();
    var arrTemas = new Array();
    var arrBtnPrinci = new Array();
    var i = 0;
    //crea los temas del menu, un tema por cada boton del menu, los temas son los contenedores de los slides, pueden tener 1 o mas slides...
    for (i = 0; i < numeroBotones; i++)
    {

        arrBtnPrinci.push($(nombreBtn + parseInt(i + 1)));//crea aareglo de botones del menu
        //console.log(arrBtnPrinci[i]);
       // arrBtnPrinci[i].css('cursor', 'pointer');
        subSlides.push(new Array());
        subSlides[i][0] = $(nombreSlide + parseInt(i + 1));//arreglo de slides del tema

        for (j = 1; j <= subSlidesNum[i]; j++)
        {
            subSlides[i][j] = $(nombreSlide + parseInt(i + 1) + '_' + j);//arreglo de slides del tema
        }
        //console.log(subSlides[i],btnSiguiente,btnAnterior,btnVolver,fondoPrinci);
        //crea los temas
        if (fondoPrinci instanceof  Array) {
            arrTemas.push(new LPContrTema(subSlides[i], btnSiguiente, btnAnterior, btnVolver, fondoPrinci[i]));// crea los temas
        } else {
            arrTemas.push(new LPContrTema(subSlides[i], btnSiguiente, btnAnterior, btnVolver, fondoPrinci));// crea los temas
        }
    }
    // crea el controlador del menu
    this.controMenu = new LPControMenu(arrTemas, arrBtnPrinci, secuencial);// crea el menu
    ////////////////////////////////////////////////////
}

LPControladorInterfaz.prototype.getControlador = function () {// retorna el controlador del menu, para alguna funcion del menu
    return this.controMenu;
};

LPControladorInterfaz.prototype.volver = function () {// vuelve al menu, oculta los slides, fondo , siguiente, anterior y boton home, muestra los botones del menu
    var numvolvio = this.controMenu.volverMenu();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};

LPControladorInterfaz.prototype.verAnterior = function () {// muestra el siguiente slide del tema, si tiene
    this.controMenu.verAnterior();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};

LPControladorInterfaz.prototype.verSiguiente = function () {// muestra el anterior slide del tema,
    this.controMenu.verSiguiente();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //recorda 1 oculta sigui
//    if ($(controMenuPrin.getControlador().getTemaActualSLideActual()).attr("id") == "Stage_text_1_1" && !controMenuPrin.getControlador().getYaVisitado((0))) {
//        controMenuPrin.getControlador().ocultarBtnSigui(false);
//    }//recorda 2 oculta sigui   
};






LPControladorInterfaz.prototype.verTema = function (numBoton) {// muestra el primer slide del tema

    // console.log(this.numeroBotones);
  if (numBoton <= this.numeroBotones && numBoton > 0) {
    //  console.log(numBoton);
         this.controMenu.verTema((numBoton - 1));
    } else {
        console.log("numero incorrecto del tema");
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (this.controMenu.name == "Menu1") {
        //$("#Stage_fondo_gris_mapa").show();
        TweenMax.from($('#Stage_personaje2_evi'), 1, {x:-400, ease: Back.easeOut})
    }};