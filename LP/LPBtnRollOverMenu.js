/* 
 * SENA Linea ProduccionGirardot
 * Programacion CarlosAOL  * 
 */


//

var mySplitText = new SplitText([$('#Stage_Text4'), $('#Stage_Text4Copy'), $('#Stage_Text4Copy2')], {type: "words,chars"});
var AnimaIni = new TimelineMax({});
AnimaIni.append(TweenMax.from($('#Stage_cabecera'), 1, {y: -90}), 0);
AnimaIni.append(TweenMax.from($('#Stage_Botonera_General'), 1, {x: -90, ease: Bounce.easeOut}), 0);
AnimaIni.appendMultiple(TweenMax.allFrom(mySplitText.words, 0.1, {scale: 0, transformOrigin: "0% 50% -50", ease: Back.easeOut}, 0.1), 0);
AnimaIni.call(function () {
    $('#Stage_contextualizacion').show();
    AnimaContextua.restart();
});
//
AnimaIni.appendMultiple(TweenMax.allFrom([$('#Stage_botonContex'), $('#Stage_botonMestudio'), $('#Stage_botonGuiapdf')
            , $('#Stage_botonEvidencias')], 0.5, {css: {scaleY: 0, scaleX: 0, rotationZ: 180}}, 0.2), 0);
AnimaIni.appendMultiple(TweenMax.allFrom([$('#Stage_botonMapa'), $('#Stage_botonClic')], 0.5, {css: {scaleY: 0, scaleX: 0, rotationZ: -180}}, 0.2), 0);
AnimaIni.stop();
//
//menu
m4 = new TimelineMax();
m4.append(TweenMax.to($("#Stage_botonClic_sprite_icono_clic"), 0.01, {x: -65}), 0);
m4.append(TweenMax.from($("#Stage_botoneraSub"), 0.7, {x: -500}), -0.2);
m4.stop();
////
var estaActivoMAterial = false;

var AnimaMeterialPro = new TimelineMax({delay: 0.5});
AnimaMeterialPro.call(function () {
    $('#Stage_material_estudio').show();
});
AnimaMeterialPro.append(TweenMax.from($('#Stage_material_estudio'), 0.5, {alpha: 0}), 0);
AnimaMeterialPro.append(TweenMax.from($('#Stage_material_arena'), 0.5, {scaleY: 0, ease: Back.easeOut}), 0);
AnimaMeterialPro.append(TweenMax.from($('#Stage_material_pasto'), 0.5, {scaleY: 0, ease: Back.easeOut}), 0);
AnimaMeterialPro.append(TweenMax.from($('#Stage_material_puente'), 0.5, {scaleY: 0, ease: Back.easeOut}), 0);
AnimaMeterialPro.appendMultiple(TweenMax.allFrom([$('#Stage_material_edificio1'),$('#Stage_material_flores1'),$('#Stage_material_letrero'),$('#Stage_material_carro1'),$('#Stage_material_carro2')], 1, {scale: 0, ease: Back.easeOut}, 0.5), 0);
AnimaMeterialPro.append(TweenMax.from($('#Stage_barco4'), 5, {x:-400, ease: Back.easeOut}), -2);
AnimaMeterialPro.call(function () {
   emit1.comenzar();
});
AnimaMeterialPro.append(TweenMax.from($('#Stage_personaje1_material'), 6, {x:-450,y:-40, ease: Back.easeOut}), -3);
AnimaMeterialPro.append(TweenMax.from($('#Stage_material_fondo_rollover'), 1, {scale: 0, ease: Elastic.easeOut}), -2);
AnimaMeterialPro.append(TweenMax.from($('#Stage_instru_teclado'), 1, {scale: 0, ease: Elastic.easeOut}), -2);
AnimaMeterialPro.append(TweenMax.from($('#Stage_glow1Tecla'), 1, {scale: 0}), 0);
AnimaMeterialPro.call(function () {
    document.onkeydown = function (evt) {
                presiona(evt)
            };
});
AnimaMeterialPro.stop();

//
var AnimaMeterialProMov = new TimelineMax();

AnimaMeterialProMov.append(TweenMax.to($('#Stage_fondoMov'), 0.2, {x: 0}), 0);
AnimaMeterialProMov.addLabel("pos0");
///1
AnimaMeterialProMov.append(TweenMax.to($('#Stage_fondoMov'), 3, {x: -949}), 0);
AnimaMeterialProMov.appendMultiple(TweenMax.allFrom([$('#Stage_material_tienda1'),$('#Stage_material_edificio2'),$('#Stage_material_tienda2'),$('#Stage_material_palmas1'),$('#Stage_ma_boton1')], 0.5, {scaleY: 0, ease: Back.easeOut}, 0.2), -2);
AnimaMeterialProMov.call(function(){
    new LPResalteGenerico($('#Stage_ma_boton1'), "activado");
});
AnimaMeterialProMov.append(TweenMax.from($('#Stage_Mt_btn1'), 1, {scale: 0}), 0);
AnimaMeterialProMov.addLabel("pos1");
///2
AnimaMeterialProMov.append(TweenMax.to($('#Stage_fondoMov'), 3, {x: -1609}), 0);
AnimaMeterialProMov.appendMultiple(TweenMax.allFrom([$('#Stage_material_flores2'),$('#Stage_material_edificio3'),$('#Stage_material_tienda3')], 0.5, {scaleY: 0, ease: Back.easeOut}, 0.2), -2);
AnimaMeterialProMov.call(function(){
    new LPResalteGenerico($('#Stage_ma_boton2'), "activado");
});
AnimaMeterialProMov.append(TweenMax.from($('#Stage_Mt_btn2'), 1, {scale: 0}), 0);
AnimaMeterialProMov.addLabel("pos2");
///3
AnimaMeterialProMov.append(TweenMax.to($('#Stage_fondoMov'), 3, {x: -2148}), 0);
AnimaMeterialProMov.appendMultiple(TweenMax.allFrom([$('#Stage_material_palmas2'),$('#Stage_material_edificio4'),$('#Stage_material_tienda4')], 0.3, {scaleY: 0, ease: Back.easeOut}, 0.2), -2);
AnimaMeterialProMov.call(function(){
    new LPResalteGenerico($('#Stage_ma_boton3'), "activado");
});
AnimaMeterialProMov.append(TweenMax.from($('#Stage_Mt_btn3'), 1, {scale: 0}), 0);
AnimaMeterialProMov.addLabel("pos3");
///4
AnimaMeterialProMov.append(TweenMax.to($('#Stage_fondoMov'), 3, {x: -2378}), 0);
AnimaMeterialProMov.appendMultiple(TweenMax.allFrom([$('#Stage_material_flores3')], 0.5, {scaleY: 0, ease: Back.easeOut}, 0.5), 0);
AnimaMeterialProMov.call(function(){
    new LPResalteGenerico($('#Stage_ma_boton4'), "activado");
});
AnimaMeterialProMov.append(TweenMax.from($('#Stage_Mt_btn4'), 1, {scale: 0}), 0);
AnimaMeterialProMov.addLabel("pos4");
AnimaMeterialProMov.stop();


///////////////////////////////////////////////////////
var emit1;       

var AnimaContextua = new TimelineMax({delay: 0.5});
AnimaContextua.call(function(){
    TweenMax.set($('#Stage_contex_cartel'),  { scale: 0.7,y:-600});
});
AnimaContextua.append(TweenMax.from($('#Stage_contextualizacion'), 1, {alpha: 0}), 0);
AnimaContextua.append(TweenMax.from($('#Stage_contex_per1'), 1, {x: -600, ease: Back.easeOut}), 0);
AnimaContextua.append(TweenMax.from($('#Stage_contex_per2'), 1, {x: 600, ease: Back.easeOut}), -0.5);
AnimaContextua.append(TweenMax.from($('#Stage_contex_maleta'), 1, {x: 300, ease: Back.easeOut}), 0);
//AnimaContextua.append(TweenMax.to($('#Stage_submarino_contextualizacion'), 4, {x: -150, ease: Back.easeOut}), 0);
AnimaContextua.append(TweenMax.to($('#Stage_contex_cartel'), 2, {y:143, ease: Bounce.easeOut}), 0);
AnimaContextua.append(TweenMax.from($('#Stage_botonPlay'), 1, {scale: 0, ease: Elastic.easeOut}), 0);
AnimaContextua.stop();
///////////////////////
var AnimaGuiaPDF = new TimelineMax({delay: 0.5});

AnimaGuiaPDF.append(TweenMax.from($('#Stage_guia_PDF'), 1, {alpha: 0}), 0);
AnimaGuiaPDF.append(TweenMax.from($('#Stage_guiaPDF_maleta'), 1, {x: -500, ease: Back.easeOut}), 0);
AnimaGuiaPDF.append(TweenMax.from($('#Stage_persoGuiaPdf'), 1, {x: 600, ease: Back.easeOut}), 0);
AnimaGuiaPDF.append(TweenMax.from($('#Stage_guiaPDF_boton'), 1, {scale: 0}), 0);


//AnimaGuiaPDF.stop();

//////
//////
//var arraPal = new Array();
//var arraPal1 = new Array();
//var arralin1 = new Array();
//var arralin2 = new Array();
////
var ctrlSound = true;
//(function () {
//    for (i = 1; i <= 9; i++) {
////        if (i <= 5) {
////            arraPal.push($('#Stage_evi_boton' + i));
////            arralin1.push($('#Stage_evi_linea' + i));
////        } else
////        {
////            arraPal1.push($('#Stage_evi_boton' + i));
////            arralin2.push($('#Stage_evi_linea' + i));
////        }
//    }
//})();
//
var AnimaGuiaEvidencia = new TimelineMax({delay: 0.5});

AnimaGuiaEvidencia.append(TweenMax.from($('#Stage_diseno_evidencias'), 1, {alpha: 0}), 0);
AnimaGuiaEvidencia.appendMultiple(TweenMax.allFrom($('#Stage_Group2').children(), 2, {scale: 0, ease: Back.easeOut}, 0.2), 0);
AnimaGuiaEvidencia.append(TweenMax.to($('#Stage_evi_puente'), 1, {clip: "rect(0px 224px 88px 0px)"}), 0);
AnimaGuiaEvidencia.appendMultiple(TweenMax.allFrom($('#Stage_Group4').children(), 0.5, {scale: 0,x:52, ease: Back.easeOut}, 0), 0);
AnimaGuiaEvidencia.appendMultiple(TweenMax.allFrom($('#Stage_Group5').children(), 0.5, {scale: 0,x:-52, ease: Back.easeOut}, 0), 0);
AnimaGuiaEvidencia.appendMultiple(TweenMax.allFrom($('#Stage_Group6').children(), 0.5, {scaleY: 0, ease: Back.easeOut}, 0.2), 0);
AnimaGuiaEvidencia.append(TweenMax.from($('#Stage_personaje1_evidencias'), 1, {x:-400, ease: Back.easeOut}), 0);
AnimaGuiaEvidencia.append(TweenMax.from($('#Stage_evi_barco_rollover'), 4, {x:640, ease: Back.easeOut}), -3);
AnimaGuiaEvidencia.appendMultiple(TweenMax.allFrom($('#Stage_Group10').children(), 0.5, {scale: 0, ease: Bounce.easeOut}, 0.2), 0);
AnimaGuiaEvidencia.stop();

////////////////////////////////////////////////////////////////////
var animaCreditos = new TimelineMax({});
animaCreditos.append(TweenMax.from($('#Stage_creditos_bombillo'), 1, {delay: 1, scaleY: 0, scaleX: 0}), 0);
animaCreditos.appendMultiple(TweenMax.allFrom([$('#Stage_creditos_btn1'), $('#Stage_creditos_btn7'), $('#Stage_creditos_btn3'), $('#Stage_creditos_btn6'), $('#Stage_creditos_btn4'),
    $('#Stage_creditos_btn2'), $('#Stage_creditos_btn5')], 1, {scaleY: 0, scaleX: 0, ease: Back.easeOut}, 0.2), 0);

animaCreditos.appendMultiple(TweenMax.allFrom([$('#Stage_Rectangle10'), $('#Stage_Rectangle20'), $('#Stage_Rectangle30'), $('#Stage_Rectangle40'), $('#Stage_Rectangle50'),
    $('#Stage_Rectangle60'), $('#Stage_Rectangle70'), $('#Stage_Rectangle80'), $('#Stage_Rectangle90'), $('#Stage_Rectangle100'), $('#Stage_Rectangle110')], 1, {alpha: 0, ease: Back.easeOut}, 0.2), 0);
animaCreditos.call(function () {
    new LPResalteGenerico($('#Stage_EllipseGlow'), "glow")
});
animaCreditos.stop();



var glowNum = 1;
var soloUnaAnimaActi = true;
var glowAni = new TimelineMax();
var estadoAni = new TimelineMax();
var controMenuPrin;
var controMenu2;
var controladorMEnuROll;
var controScuSimpleRefe;
var controCreditos;
var video;
var videoC1;
var animaTodo = function (objAnima) {

    var x = 0.2;

    var puzz = $(objAnima);
    //console.log($(puzz).children());
    $(puzz).children().each(function () {
        TweenMax.from($(this), 0.8, {css: {scaleX: 0, scaleY: 0}, delay: x});
        x += 0.3;
    });
}

$.fn.LPBtnRoll = function (dniefect)
{



    switch (dniefect) {
        case 'iniciar':
            
            //burbujas
             emit1= new LPEmiter("Stage_emiter1", 10, 20, 30, 0.1, 0.8,"Stage_personaje1_material",true,Math.PI,false);          

            
            ///setLineas
               AnimaIni.restart();
//            $('#Stage_guiaPDF_tubo1').css("clip", "rect(0px 570px 0px 0px)");//312
//             SoundBurbujas = new Howl({
//                urls: ['audio/Bubbles_sound.mp3'],
//                 loop: true,
//                 volume: 0.5
//            });
            sea1 = new Howl({
                urls: ['audio/sea1.mp3'],
                 loop: true,
                 volume: 0.5
            });
//            pito = new Howl({
//                urls: ['audio/pito.mp3'],
//                 volume: 0.5
//            });
            ///// Material estudio

            new LPResalteGenerico($('#Stage_ma_boton1'), "desactivado");
            new LPResalteGenerico($('#Stage_ma_boton2'), "desactivado");
            new LPResalteGenerico($('#Stage_ma_boton3'), "desactivado");
            new LPResalteGenerico($('#Stage_ma_boton4'), "desactivado");
            new LPResalteGenerico($('#Stage_glow1Tecla'), "glowSimpre")
            $('#Stage_ma_boton1').LPRollOverScaleXY($('#Stage_roll1'));
            $('#Stage_ma_boton2').LPRollOverScaleXY($('#Stage_roll2'));
            $('#Stage_ma_boton3').LPRollOverScaleXY($('#Stage_roll3'));
            $('#Stage_ma_boton4').LPRollOverScaleXY($('#Stage_roll4'));
            $('#Stage_instru_teclado').LPRollOverRotation($('#Stage_instru_teclado_texto'), 90);
            
            //document.onkeydown = null
            //direcciones
            direcciones = new xmlLector('direc.xml');

//            new LPResalteGenerico($('#Stage_glowEti3'), "glow");

//            $("#Stage_evidencias").hide();
//              
////              
            video = $("#Stage_contex_contVideo");
            $(video).html('<video id="Video1_id" controls> <source src="' + direcciones.getElementsByTagName("lista")[0].getElementsByTagName("link")[0].getElementsByTagName("href")[0].childNodes[0].nodeValue + '" type="video/mp4"  width="720" height="405" controls> Your browser does not support the video tag. </video>');
            videoC1 = document.getElementById("Video1_id");
            console.log(videoC1.videoWidth);
            console.log(videoC1.videoHeight);

            videoC1.videoWidth = 720;
            videoC1.videoHeight = 405;

            $('#Video1_id').css({'float': 'left'});
            $('#Video1_id').css({'position': 'absolute'});
            $('#Video1_id').css({'left': '0px'});
            $('#Video1_id').css({'top': '0px'});
            videoC1.height = 405;
            videoC1.width = 720;
            $("#Stage_contex_contVideo").hide();
//             videoC1.setAttribute('height', '360');
//            videoC1.setAttribute('width ', '640');
//
//            $('#Stage_video').css({'clip': 'rect(2px 720px 405px 0px)'});
            //estados INICIALES //<-----------------------------------------------------------------------------------

            //animacion vorde video
            TweenMax.to($('#Stage_borde'), 1.5, {scaleX: 1.2, scaleY: 1.2, opacity: 0, repeat: -1, ease: Quad.easeOut});

            //roll over menu lateral
            $('#Stage_rolloverContex').show();
            $('#Stage_rolloverMestudio').show();
            $('#Stage_rolloverGpdf').show();
            $('#Stage_rolloverEvidencias').show();
            $('#Stage_rolloverMapa').show();
            $('#Stage_botoneraSub').show();
            new LPRollOver($("#Stage_botonContex"), 200, 80, $('#Stage_rolloverContex'));
            new LPRollOver($("#Stage_botonMestudio"), 200, 80, $('#Stage_rolloverMestudio'));
            new LPRollOver($("#Stage_botonGuiapdf"), 200, 80, $('#Stage_rolloverGpdf'));
            new LPRollOver($("#Stage_botonEvidencias"), 200, 80, $('#Stage_rolloverEvidencias'));
            new LPRollOver($("#Stage_botonMapa"), 220, 64, $('#Stage_rolloverMapa'));

            ///submenu
            //submenu
            new LPSprite($("#Stage_iconoGlosario"), 52);
            new LPSprite($("#Stage_iconoRefe"), 52);
            new LPSprite($("#Stage_iconoCreative"), 52);
            new LPSprite($("#Stage_iconoCreditos"), 52);
            var mirando = false;

//            new LPResalteGenerico($('#Stage_Btn_guiapdf_glowBtnGuia'), "glowSimpre");

            $('#Stage_botoneraSub').mouseover(function () {

                mirando = true;
            });

            $('#Stage_botoneraSub').mouseleave(function () {
                mirando = false;

                m4.reverse();
            });
            $('#Stage_botonClic').mouseover(function () {

                m4.play();
            });

            $('#Stage_botonClic').mouseout(function () {

                setTimeout(function () {
                    if (mirando == false) {
                        m4.reverse();
                    }
                }, 100);
            });
            //contenidos principales
            //guia pdf

            
            ///rollOver matererial evidencia
            new salirContenido($("#Stage_botonVolver2"));
            TweenMax.set($('#Stage_botonVolver2_rolloverVolver'), {css: {scaleX: 0}});
            $('#Stage_botonVolver2')
                    .mouseenter(function () {
                        TweenMax.to($('#Stage_botonVolver2_rolloverVolver'), 0.5, {css: {scaleX: 1}});
                    })
                    .mouseleave(function () {
                        TweenMax.to($('#Stage_botonVolver2_rolloverVolver'), 0.5, {css: {scaleX: 0}});
                    });
//            //sonidos
//
//  
            $("#Stage_botonContex").LPaudioFX("overSound", "bubble.mp3");
            $("#Stage_botonMestudio").LPaudioFX("overSound", "bubble.mp3");
            $("#Stage_botonGuiapdf").LPaudioFX("overSound", "bubble.mp3");
            $("#Stage_botonEvidencias").LPaudioFX("overSound", "bubble.mp3");
            $("#Stage_botonMapa").LPaudioFX("overSound", "bubble.mp3");
            $("#Stage_botonClic").LPaudioFX("overSound", "bubble.mp3");

            new LPClickSpriteTogle($('#Stage_boton_sonido'), 40);


//
//            //roll evidencias //botones evidencias
            for (i = 1; i <= 13; i++) {

                eval('$("#Stage_evi_boton' + i + '").LPRollOverScaleXY($("#Stage_evi_roll' + i + '"));');
                eval('new clicContenido($("#Stage_evi_boton' + i + '"));');
                //console.log('$("#Stage_evi_boton'+i+'").LPRollOverScaleXY($("#Stage_evi_roll'+i+'"));');
            }
//            //material de estudio
            crearMenuPrinci();
            crearMenu2();

            /////////////////////////////////////////////////////////////
            //////////////
            controladorMEnuROll = new LPControladorMenuRoll([$('#Stage_creative-commons'), $('#Stage_refeImagenes'), $('#Stage_glosario'),
                $('#Stage_creditos')], $('#Stage_fondo_general_creditos'));
            //<----------
            controScuSimpleRefe = new LPCControSecuenciaSimple([$('#Stage_webgrafia_cont2'), $('#Stage_webgrafia_cont1'), $('#Stage_webgrafia_guia1'), 
                $('#Stage_bibliografia_cont1'), $('#Stage_bibliografia_guia'), $('#Stage_imagenes_cont2'), $('#Stage_imagenes_cont1'), 
                $('#Stage_indice_tablas_cont3'), $('#Stage_indice_tablas_cont2'), $('#Stage_indice_tablas_cont1'), $('#Stage_indice_figuras_cont3')
            , $('#Stage_indice_figuras_cont2'), $('#Stage_indice_figuras_cont1')],
                    $('#Stage_boton-siguiente'), $('#Stage_boton-atras'))
            //<----------		
            controCreditos = new LPControladorPopUp([$('#Stage_cre_btn1'), $('#Stage_cre_btn2'), $('#Stage_cre_btn3'), $('#Stage_cre_btn4')
                        , $('#Stage_cre_btn5'), $('#Stage_cre_btn6'), $('#Stage_cre_btn7')], "none", true);
            //<----------	
            eventosDeMouse();
            crearZooms();
            
            break;
    }


    function enviaScorm(cali) {
        console.log("envia");
        scormEnvia.califica(cali);
        window.close();
    }

};
var valorAnima = 0;
function presiona(evt) {
    evt = evt || window.event;
   //console.log(evt.keyCode, "presiona");
    switch (evt.keyCode) {
        case 39:
            evt.preventDefault();
            if (valorAnima < 4) {
                console.log(valorAnima);
                valorAnima++;
                
                moverSubamerino(valorAnima);
                 TweenMax.set($('#Stage_personaje1_material'),  {scaleX: 1});
                 TweenMax.set($('#Stage_emiter1'),  {x:0});
            }

            break;

        case 37:
            evt.preventDefault();
            if (valorAnima > 0) {
                valorAnima--;
                moverSubamerino(valorAnima);
                 TweenMax.set($('#Stage_personaje1_material'),  {scaleX: -1});
                 TweenMax.set($('#Stage_emiter1'),  {x:300});
            }

            break;        
    }
}
function moverSubamerino(num) {
    var numero = "";
    numero = "pos" + num;
    console.log(numero);
    AnimaMeterialProMov.tweenTo(numero);
}
function eventosDeMouse() {
    //sonido-------------------------------
//    $("#Stage_boton_sonido").click(function () {
//        ctrlSound = !ctrlSound;
//        if (ctrlSound) {
//            $("#Stage_boton_sonido_sprite_sonido").css('backgroundPosition', '0px 0px');
//        } else {
//            $("#Stage_boton_sonido_sprite_sonido").css('backgroundPosition', '-40px 0px');
//        }
//    });
    //evidencias-----------------------------
    $("#Stage_botonEvidencias").click(function () {
        cerrarPrinci();
        $('#Stage_diseno_evidencias').show();
        AnimaGuiaEvidencia.restart();
         
    });
    //guia pdf-----------------------------------------
    $("#Stage_botonGuiapdf").click(function () {
        cerrarPrinci();
        $('#Stage_guia_PDF').show();
        AnimaGuiaPDF.restart();
        
    });
    $("#Stage_guiaPDF_boton").click(function () {
        window.open(direcciones.getElementsByTagName("lista")[0].getElementsByTagName("link")[5].getElementsByTagName("href")[0].childNodes[0].nodeValue);
    });

    //material del programa--------------------------------------------
    $("#Stage_botonMestudio").click(function () {
        
        cerrarPrinci();
        if (ctrlSound) {
           sea1.play(); 
        }
        
        $('#Stage_material_estudio').show();
        AnimaMeterialPro.restart();
        estaActivoMAterial = true;
         
    });
    ///material aparte
    $('#Stage_ma_boton1').click(function () {

        window.open(direcciones.getElementsByTagName("lista")[0].getElementsByTagName("link")[1].getElementsByTagName("href")[0].childNodes[0].nodeValue);


    });
    $('#Stage_ma_boton2').click(function () {

        window.open(direcciones.getElementsByTagName("lista")[0].getElementsByTagName("link")[2].getElementsByTagName("href")[0].childNodes[0].nodeValue);


    });
    $('#Stage_ma_boton3').click(function () {

        window.open(direcciones.getElementsByTagName("lista")[0].getElementsByTagName("link")[3].getElementsByTagName("href")[0].childNodes[0].nodeValue);

    });
    $('#Stage_ma_boton4').click(function () {

        window.open(direcciones.getElementsByTagName("lista")[0].getElementsByTagName("link")[4].getElementsByTagName("href")[0].childNodes[0].nodeValue);

    });
    //contextualizacion---------------------------------
    $("#Stage_botonContex").click(function () {

        cerrarPrinci();

        $('#Stage_contextualizacion').show();
        AnimaContextua.restart();
    });
    //icono Mapa-----------------------------------------
    $('#Stage_botonMapa').click(function () {

        $("#Stage_mapa-contenido").show();
        controladorMEnuROll.cerrarPopUp();
        // TweenMax.to($('#Stage_fondo_instruc'), 0.5, {css: {scaleY: 1, scaleX: 1}});
        new animaTodo($("#Stage_mapa-contenido"));
    });
    $('#Stage_btnCerrarMapa').click(function () {

        $("#Stage_mapa-contenido").hide();
        // TweenMax.to($('#Stage_fondo_instruc'), 0.5, {css: {scaleY: 1, scaleX: 1}});

    });

    //sub Botonera

    //creditos
    $('#Stage_iconoCreditos').click(function () {
        $("#Stage_mapa-contenido").hide();
        $('#Stage_creditos').show();
        $('#Stage_fondo_general_creditos').show();
        TweenMax.to($('#Stage_fondo_general_creditos'), 0.5, {css: {scaleY: 1, scaleX: 1}});
        controladorMEnuROll.verPopUp(3);
        animaCreditos.restart();
    });
    $('#Stage_creditos_btn1').click(function () {
        controCreditos.verPopUp(0);
    });
    $('#Stage_creditos_btn2').click(function () {
        controCreditos.verPopUp(1);
    });
    $('#Stage_creditos_btn3').click(function () {
        controCreditos.verPopUp(2);
    });
    $('#Stage_creditos_btn4').click(function () {
        controCreditos.verPopUp(3);
    });
    $('#Stage_creditos_btn5').click(function () {
        controCreditos.verPopUp(4);
    });
    $('#Stage_creditos_btn6').click(function () {
        controCreditos.verPopUp(5);
    });
    $('#Stage_creditos_btn7').click(function () {
        controCreditos.verPopUp(6);
    });

    //ccreative Coommos
    $('#Stage_iconoCreative').click(function () {
        $("#Stage_mapa-contenido").hide();
        $('#Stage_creative-commons').show();
        // $('#Stage_fondo_general_creditos').show();
        controladorMEnuROll.verPopUp(0);
    });
    //referencia
    $('#Stage_iconoRefe').click(function () {
        $("#Stage_mapa-contenido").hide();
        $('#Stage_refeImagenes').show();
        $('#Stage_fondo_general_creditos').show();
        TweenMax.to($('#Stage_fondo_general_creditos'), 0.5, {css: {scaleY: 1, scaleX: 1}});
        controladorMEnuROll.verPopUp(1);
    });
    $('#Stage_boton-siguiente').click(function () {
        controScuSimpleRefe.Siguiente();
    });
    $('#Stage_boton-atras').click(function () {
        controScuSimpleRefe.anterior();
    });

    //Glosario
    $('#Stage_iconoGlosario').click(function () {
        $("#Stage_mapa-contenido").hide();
        $('#Stage_glosario').show();
        $('#Stage_fondo_general_creditos').show();
        TweenMax.to($('#Stage_fondo_general_creditos'), 0.5, {css: {scaleY: 1, scaleX: 1}});
        controladorMEnuROll.verPopUp(2);
    });
    //cerrar submenu
    $('#Stage_boton-cerrar8').click(function () {
        controladorMEnuROll.cerrarPopUp();
    });
    $('#Stage_botonCerrarMenuCopy2').click(function () {
        controladorMEnuROll.cerrarPopUp();
    });
    $('#Stage_botonCerrarMenuCopy').click(function () {
        controladorMEnuROll.cerrarPopUp();
    });
    $('#Stage_botonCerrar').click(function () {
        controladorMEnuROll.cerrarPopUp();
    });
    /////////evidencias
    $('#Stage_btn_eviGen1').click(function () {
        controMenu2.verPopUp(0);
        TweenMax.to($('#Stage_boton_siguiente1'), 0.5, {css: {top: "410px"}});
        TweenMax.to($('#Stage_boton_atras1'), 0.5, {css: {top: "410px"}});
    });
    $('#Stage_btn_eviGen2').click(function () {
        controMenu2.verPopUp(1);
        TweenMax.to($('#Stage_boton_siguiente1'), 0.5, {css: {top: "410px"}});
        TweenMax.to($('#Stage_boton_atras1'), 0.5, {css: {top: "410px"}});
    });
    $('#Stage_btn_eviGen3').click(function () {
        controMenu2.verPopUp(2);
        TweenMax.to($('#Stage_boton_siguiente1'), 0.5, {css: {top: "410px"}});
        TweenMax.to($('#Stage_boton_atras1'), 0.5, {css: {top: "410px"}});
    });
    $('#Stage_btn_eviGen4').click(function () {
        controMenu2.verPopUp(3);
        TweenMax.to($('#Stage_boton_siguiente1'), 0.5, {css: {top: "410px"}});
        TweenMax.to($('#Stage_boton_atras1'), 0.5, {css: {top: "410px"}});
    });

    $('#Stage_boton_siguiente1').click(function () {
        controMenuPrin.verSiguiente();
    });
    $('#Stage_boton_atras1').click(function () {
        controMenuPrin.verAnterior();
    });
    //video
    $('#Stage_botonPlay').click(function () {

        // TweenMax.to($("#Stage_contex_brazo"), 1, {y: -40});
        

        TweenMax.to($('#Stage_contex_cartel'),1 , { scale:1,  x:0,y:0});
        $("#Stage_botonPlay").hide();
        $("#Stage_borde").hide();

        setTimeout(function () {
            $("#Stage_contex_contVideo").show();
            videoC1.play();


        }, 1000)
    });

}
function terminoAnima() {

    $('#Stage_instrucciones1').hide();
    TweenMax.to($('#Stage_fondo_instruc'), 0.0, {css: {scaleY: 0, scaleX: 0}});
}
;
function crearZooms()
{
    var arrayZoom = new Array();
    var arrayBtnZoom = new Array();
    var numZoom = 1;//numero Zoom
    //var cerrarZo = document.getElementsByClassName('cerrarZoom');//ponerle la clase o acada boton ponerle su clic
    for (var i = 0; i < numZoom; i++)
    {
        arrayZoom.push($('#Stage_zoom' + (i + 1)));
        arrayBtnZoom.push(document.getElementById("Stage_Zoom" + (i + 1)));
        $('#Stage_boton-cerrar').css('cursor', "pointer");
        arrayBtnZoom[i].style.cursor = "pointer";
        new LPResalteGenerico($(arrayBtnZoom[i]), "clicScaleMas");

        //$(arrayBtnZoom[i]).LPefects("glowRedondoInt")

       // new LPResalteGenerico(arrayBtnZoom[i], "clic");
        // cerrarZo[i].style.cursor = "pointer";
        arrayBtnZoom[i].addEventListener("click", function (event)
        {
//            $('#Stage_zooms').show();

            var nombre = event.target.id.replace("Stage_Zoom", "");
            // console.log(nombre);
            controZoom.verZoom((parseInt(nombre) - 1));

        });

        $("#Stage_boton-cerrar").click(function () {
//            $('#Stage_zooms').hide();
            controZoom.ocultarZoom();
            //$('#Stage_boton-cerrar3Copy23').hide();
        });

    }

    controZoom = new LPControZoom(arrayZoom, $('#Stage_fondo_zoom'), arrayBtnZoom);
}
///////////////////////Clases Utils///////////////////////////
///////////////controla los roll over
var LPRollOver = function (objet, disRoll, disSprit, roll) {
    //publicas
    //console.log($(objet)[0].firstChild);
    TweenMax.set($(roll), {css: {x: (disRoll * -1) + "px"}});
    $(objet).mouseover(function () {
        $(roll).show();
        TweenMax.to($(roll), 1, {css: {x: "0px"}});

        $($(objet)[0].firstChild).css('backgroundPosition', (disSprit * -1) + 'px 0px');
    });

    $(objet).mouseout(function () {
        TweenMax.to(roll, 1, {css: {x: (disRoll * -1) + "px"}});
        $($(objet)[0].firstChild).css('backgroundPosition', '0px 0px');
    });
};
var LPSprite = function (objet, disSprit) {
    //publicas
    //console.log($(objet)[0].firstChild);
    $(objet).mouseover(function () {


        $($(objet)[0].firstChild).css('backgroundPosition', (disSprit * -1) + 'px 0px');
    });

    $(objet).mouseout(function () {

        $($(objet)[0].firstChild).css('backgroundPosition', '0px 0px');
    });
};
///////////////controla los roll over
var LPRollOver2 = function (objet, roll) {

    $(objet).mouseover(function () {

        $(roll).show();
        TweenMax.to($(roll), 1, {css: {scaleY: 1, scaleX: 1}});
    });
    $(objet).mouseout(function () {
        TweenMax.to(roll, 1, {css: {scaleY: 0, scaleX: 0}});
    });
};

var cierran = new Array($('#Stage_creative-commons'), $('#Stage_creditos'), $('#Stage_glosario'), $('#Stage_refeImagenes'));
var numItm = 0;
function cerrarlosOtros(obje) {
    numItm = 5;
    // console.log($(obje).attr("id"));
    if ($(obje).attr("id") == "Stage_creative-commons") {
        numItm = 0;
    }
    if ($(obje).attr("id") == "Stage_creditos") {
        numItm = 1;
    }
    if ($(obje).attr("id") == "Stage_glosario") {
        numItm = 2;
    }
    if ($(obje).attr("id") == "Stage_refeImagenes") {
        numItm = 3;
    }
    for (i = 0; i < 4; i++) {
        if (numItm != i) {
            TweenMax.to(cierran[i], 1, {css: {scaleX: 0, scaleY: 0}});
        }
    }
}
;
////////////////////////////////////// cierra los contenidos principales
function cerrarPrinci() {
     
//    SoundBurbujas.stop();
    sea1.stop();

    //paraemitiores
    emit1.pararTodos();

    //////////////////////////////////////////////////////
    $('#Stage_contextualizacion').hide();
    $('#Stage_material_estudio').hide();
    $('#Stage_guia_PDF').hide();
    $('#Stage_evidencias').hide();
    $('#Stage_diseno_evidencias').hide();
    controMenuPrin.volver();

    $("#Stage_botonPlay").show();
    $("#Stage_borde").show();
    $('#Stage_mapa-contenido').hide();
    //video
    videoC1.pause();
    $("#Stage_contex_contVideo").hide();
    //descativa animacion
    controladorMEnuROll.cerrarPopUp();
    if (estaActivoMAterial) {
        estaActivoMAterial = false;

    }
}
;
var numCliqueado;
function clicContenido(objt) {

    $(objt).click(function () {//<-------cmabia el nombre
    
        //////
        $(objt).css({'opacity': '0.3'});
        numCliqueado = $(objt).attr("id").replace("Stage_evi_boton", "");
        manejoMuneco(numCliqueado);
    });

}
;
function salirContenido(objt) {

    $(objt).click(function () {
        
        controMenu2.cerrarPopUp();
        controMenuPrin.volver();
        $('#Stage_diseno_evidencias').show();
        $('#Stage_evidencias').hide();
        $('#Stage_botonVolver2').hide();
        //////////////////////////

    });
}
;
//posciciones muneco
var animaPerso1 = new TimelineMax();
function manejoMuneco(numeMun) {

    var num = parseInt(numeMun);



    /////////////////////////////////////////////////


    $('#Stage_cubierta').show();
        $('#Stage_botonVolver2').show();
        $('#Stage_tapa').hide();
        $('#Stage_botonesGenericos').show();
        $('#Stage_diseno_evidencias').hide();
        $('#Stage_evidencias').show();
        entrarCont($('#Stage_cont' + numeMun));///<--------------------------------------------------------------------------------
        controMenuPrin.verTema(numeMun);

    //////////////////
    //$('#Stage_cont' + numeMun).show();



}
;
function entrarCont(cont) {
//    console.log(cont.children());
    var arrTemp = new Array();
    for (i = 2; i <= 2; i++) {
        arrTemp.push($('#Stage_btn_eviGen0'));
    }

    arrTemp.push($('#Stage_btn_eviGen1'));
    arrTemp.push($('#Stage_btn_eviGen2'));
    arrTemp.push($('#Stage_btn_eviGen3'));
    arrTemp.push($('#Stage_btn_eviGen4'));

    for (i = 0; i < arrTemp.length; i++)
    {
//        console.log(arrTemp[i]);
        $(arrTemp[i]).css("cursor", "pointer");
        document.getElementById($(arrTemp[i]).attr("id")).style.WebkitTransformOrigin = "bottom";
        document.getElementById($(arrTemp[i]).attr("id")).style.msTransformOrigin = "bottom";
        document.getElementById($(arrTemp[i]).attr("id")).style.transformOrigin = "bottom"
        new scrollBtn($(arrTemp[i]));
    }
    //console.log($(arrTemp[0]));
    $(arrTemp[0]).click(function () {



        TweenMax.to($('#Stage_boton_siguiente1'), 0.5, {css: {top: "505px"}});
        TweenMax.to($('#Stage_boton_atras1'), 0.5, {css: {top: "505px"}});
        controMenu2.cerrarPopUp();
    });
//    
    var animaCont = new TimelineMax({delay: 0.5});
    animaCont.appendMultiple(TweenMax.allFrom(arrTemp, 0.5, {scaleY: 0}, 0.2), 0);
    ////
    $('#Stage_botonVolver2').show();
    $('#Stage_puPer').show();
}
;
function scrollBtn(objeto) {

    // console.log($(arry[i])[0].firstChild,arry[i]);
    $(objeto).mouseover(function () {
        //console.log("entro",$(objeto)[0].firstChild);
        TweenMax.to($(objeto)[0].firstChild, 0.5, {y: 57});
    });

    $(objeto).mouseout(function () {
        TweenMax.to($(objeto)[0].firstChild, 1, {y: 0});
    });

}
;

///////////////////////////////////////////////////
function crearMenuPrinci()
{                              //1, 2, 3, 4, 5, 6, 7, 8, 9,10,11
    var subSlidesNum = new Array(2, 2, 2, 2, 2, 2, 2, 2, 2,2,2,2,2);//numero subslide
    var fondos = new Array();
    for (i = 1; i <= 13; i++) {
        fondos.push($('#Stage_cont' + i));

    }
    //controMenuPrin=	new LPControladorInterfaz(numeroBotones,nombreBtn,nombreSlide,subSlidesNum,btnSiguiente,btnAnterior,btnVolver,fondoPrinci,secuencial)
    controMenuPrin = new LPControladorInterfaz(subSlidesNum.length, "#Stage_evi_boton", "#Stage_text_evidencia", subSlidesNum, $("#Stage_boton_siguiente1"), $("#Stage_boton_atras1"), $("#Stage_botonVolver2"), fondos, false)
}
function crearMenu2()
{                                          //1,2,3,4,5,6,7,8,9,10,11
    var subSlidesNum = new Array(0, 0, 0, 0);//numero subslide
    var fondos = new Array();
    //controMenuPrin=	new LPControladorInterfaz(numeroBotones,nombreBtn,nombreSlide,subSlidesNum,btnSiguiente,btnAnterior,btnVolver,fondoPrinci,secuencial)
    controMenu2 = new LPControladorPopUp([$('#Stage_eviCon_1'), $('#Stage_eviCon_2'), $('#Stage_eviCon_3'), $('#Stage_eviCon_4')], $('#Stage_fondo_gris_mapaCopy'), true)
}
///////////////////////Clases Utils///////////////////////////

/////////////////////////////////////////////////////////////////////////////////////codigo logica diapo
var animaBtn = new TimelineMax();
var LPCControSecuenciaSimple = function (arrSecuen, btnSi, btnAnte)
{
    this.btnSi = btnSi;
    this.btnAnte = btnAnte;
    this.secActual = 0;
    this.arrSecuen = arrSecuen;
    //console.log(this.btnSi, this.btnAnte,this.arrSecuen);
    for (i = 1; i < arrSecuen.length; i++) {
        this.arrSecuen[i].hide();
    }
    if (arrSecuen.length > 1) {
        this.btnSi.show();
        this.btnAnte.hide();
    } else {
        this.btnSi.hide();
        this.btnAnte.hide();
    }
};
LPCControSecuenciaSimple.prototype.VerSecuencia = function (numTema) {

}
LPCControSecuenciaSimple.prototype.Siguiente = function () {
    if (this.secActual < (this.arrSecuen.length - 1)) {
        this.secActual++;
        this.actualizar();
        this.btnAnte.show();
    }
    if (this.secActual == (this.arrSecuen.length - 1)) {
        this.btnSi.hide();
    }
}
LPCControSecuenciaSimple.prototype.anterior = function () {
    if (this.secActual > 0) {
        this.secActual--;
        this.actualizar();
        this.btnSi.show();
    }
    if (this.secActual == (0)) {
        this.btnAnte.hide();
    }

}
LPCControSecuenciaSimple.prototype.actualizar = function () {
    for (i = 0; i < this.arrSecuen.length; i++) {
        this.arrSecuen[i].hide();
    }
    this.arrSecuen[this.secActual].show();
    animaBtn.append(TweenMax.to(this.arrSecuen[this.secActual], 0, {alpha: 0, x: -90}), 0);
    animaBtn.append(TweenMax.to(this.arrSecuen[this.secActual], 1, {alpha: 1, x: 0}), 0);
}

$.fn.LPaudioFX = function (tipo, sounds) {

    switch (tipo) {
        //Efectod de audio
        case 'clicSound':
            
             
            clicSound = new Howl({
                urls: ['audio/' + sounds]
            });
            $(this).click(function () {

                if (ctrlSound == true)
                {
                
                    clicSound.play();
                }else {
                    console.log("entra");
                   
                }

            });
            break;

        case 'overSound':
            overSound = new Howl({
                urls: ['audio/' + sounds],
                volume: 0.6
            });
            $(this).mouseenter(function () {
                if (ctrlSound == true)
                {
                    overSound.play();
                }
            });
            break;
    }
}
var LPRollOverSprite = function (objet, disRoll, disSprit, roll) {
    //publicas
    //console.log(document.getElementById( $(objet).attr("id")));
    $(objet).css('cursor', 'pointer');



    $(objet).mouseenter(function () {
        $(roll).show();
        TweenMax.to($(roll), 1, {css: {x: "0px"}});
        $($(objet)[0].firstChild).css('backgroundPosition', (disSprit * -1) + 'px 0px');
    });

    $(objet).mouseleave(function () {
        TweenMax.to(roll, 1, {css: {x: (disRoll * -1) + "px"}});
        $($(objet)[0].firstChild).css('backgroundPosition', '0px 0px');
    });



};


var LPClickSpriteTogle = function (objet, disSprit) {
    $(objet).css('cursor', 'pointer');
    $(objet).click(function () {
        ctrlSound = !ctrlSound;
        if (ctrlSound) {
             
            $($(objet)[0].firstChild).css('backgroundPosition', '0px 0px');
        } else {
            sea1.stop();
            $($(objet)[0].firstChild).css('backgroundPosition', (disSprit * -1) + 'px 0px');
        }
    });
};

$.fn.LPRollOverScale = function (objt, objt2)
{

    TweenMax.set(objt, {css: {scaleY: 0, scaleX: 0}});
    TweenMax.set(objt2, {rotationX: 90});
    $(this).mouseenter(function () {
        TweenMax.to(objt, 1, {css: {scaleY: 1, scaleX: 1}});
        TweenMax.to(objt2, 1, {rotationX: 0, ease: Back.easeOut});
    });
    $(this).mouseleave(function () {
        TweenMax.to(objt, 1, {css: {scaleY: 0, scaleX: 0}});
        TweenMax.to(objt2, 1, {rotationX: 90});
    });
}
$.fn.LPRollOverRotation = function (objt, rotacion)
{

    TweenMax.set($(objt), {css: {rotationX: rotacion}});
    $(this).mouseenter(function () {
        TweenMax.to($(objt), 0.5, {rotationX: 0, ease: Back.easeOut});
    });
    $(this).mouseleave(function () {
        TweenMax.to($(objt), 0.2, {rotationX: rotacion});
    });
}
$.fn.LPRollOverScaleX = function (objt)
{

    TweenMax.set($(objt), {css: {scaleX: 0}});

    $(this).mouseenter(function () {
        TweenMax.to(objt, 1, {css: {scaleX: 1}});
        console.log("aca");
    });
    $(this).mouseleave(function () {
        TweenMax.to(objt, 0.5, {css: {scaleX: 0}});

    });
}
$.fn.LPRollOverMovX = function (objt)
{

    TweenMax.set(objt, {css: {x: 300}});

    $(this).mouseenter(function () {
        TweenMax.to(objt, 1, {css: {x: 1}});

    });
    $(this).mouseleave(function () {
        TweenMax.to(objt, 0.5, {css: {x: 300}});

    });
}
var quedaGrande = false;
$.fn.LPRollOverScaleXY = function (objt)
{

    TweenMax.set(objt, {css: {scaleY: 0, scaleX: 0}});

    $(this).mouseenter(function () {
        TweenMax.to(objt, 0.3, {css: {scaleY: 1, scaleX: 1}});
//        TweenMax.set($(objt).children()[0], {css: {scaleY: 0, scaleX: 0}});
//        TweenMax.to($(objt).children()[0], 0.3, {delay: .5, css: {scaleY: 1, scaleX: 1}});
    });
    $(this).mouseleave(function () {
        if (!quedaGrande) {
            TweenMax.to(objt, 0.3, {css: {scaleY: 0, scaleX: 0}});
        }


    });
}
$.fn.LPRollOverScaleClip = function (objt, ancho, alto)
{
    $(this).mouseenter(function () {

        TweenMax.to($(objt), 0.3, {clip: "rect(0px " + ancho + "px " + alto + "px 0px)"})

    });
    $(this).mouseleave(function () {
        if (!quedaGrande) {
            TweenMax.to($(objt), 0.2, {clip: "rect(0px " + (ancho / 2) + "px " + alto + "px " + (ancho / 2) + "px)"})
        }

    });
}

$.fn.LPRollOverAlpha = function (objt)
{
    $(objt).show();
    TweenMax.to(objt, 0, {css: {alpha: 0}});

    $(this).mouseenter(function () {
        TweenMax.to(objt, 1, {css: {alpha: 1}});

    });
    $(this).mouseleave(function () {
        TweenMax.to(objt, 1, {css: {alpha: 0}});

    });
}
var xmlLector = function (archivoXML) {
    var xmlDoc;

    if (window.XMLHttpRequest)
    {
        xmlDoc = new window.XMLHttpRequest();
        xmlDoc.open("GET", archivoXML, false);
        xmlDoc.send("");
        return xmlDoc.responseXML;
    }
    // para IE 5 y IE 6
    else if (ActiveXObject("Microsoft.XMLDOM"))
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.load(archivoXML);
        return xmlDoc;
    }
    console.log("Error cargando el documento.");
    return null;
}
