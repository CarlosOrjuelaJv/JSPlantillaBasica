/* 
 * SENA Linea ProduccionGirardot
 * Programacion CarlosAOL  * 
 */
var glowNum = 0;

var LPResaltePorObjeto = (function () {
    //publicas
    var objetoPri;
    var tipoPri;
    var estadoAni;
    function LPResaltePorObjeto(objet, tipo) {
        objetoPri = objet;
        tipoPri = tipo;
        generarResalte();
    }
    function generarResalte() {
        switch (tipoPri) {
            case 'clicScaleMenosActi':
                estadoAni = new TimelineMax({repeat: -1, yoyo: true});
                estadoAni.append(TweenMax.to($($(objetoPri).children()[3]), 1, {alpha:0}), 0);
                
                estadoAni.play();
                break;
            case 'clicScaleMenosOpa':

                $(objetoPri).css({opacity: 1});
                estadoAni = new TimelineMax({repeat: -1, yoyo: true});
                estadoAni.append(TweenMax.to($(objetoPri), 1, {css: {scaleY: 0.9, scaleX: 0.9}}), 0);
                estadoAni.play();
                $(objetoPri).click(function () {
                    $(objetoPri).css({opacity: 0.5});
                    estadoAni.stop();
                    estadoAni.kill();
                    TweenMax.to($(objetoPri), 0.5, {css: {scaleY: 1, scaleX: 1}});

                });
                //$(objetoPri).addClass("grises");
                break;
            case 'clicScaleMas':

                estadoAni = new TimelineMax({repeat: -1, yoyo: true});
                estadoAni.append(TweenMax.to($(objetoPri[0]), 1, {css: {scaleY: 1.2, scaleX: 1.2}}), 0);
                estadoAni.play();
                $(objetoPri[0]).click(function () {
                    estadoAni.stop();
                    estadoAni.kill();
                    TweenMax.to($(objetoPri[0]), 0.0, {css: {scaleY: 1, scaleX: 1}});
                });
                break;
            case 'clicScaleMasOpa':

                $(objetoPri[0]).css({opacity: 1});
                estadoAni = new TimelineMax({repeat: -1, yoyo: true});
                estadoAni.append(TweenMax.to($(objetoPri[0]), 1, {css: {scaleY: 1.2, scaleX: 1.2}}), 0);
                estadoAni.play();
                $(objetoPri[0]).click(function () {
                    $(objetoPri[0]).css({opacity: 0.5});
                    estadoAni.stop();
                    estadoAni.kill();
                    TweenMax.to($(objetoPri[0]), 0.0, {css: {scaleY: 1, scaleX: 1}});
                });
                break;
            case 'siempreScale':

                estadoAni = new TimelineMax({repeat: -1, yoyo: true});
                estadoAni.append(TweenMax.to($(objetoPri), 1, {css: {scale: 0.7}}), 0);
                estadoAni.play();
                break;
        }

    }
    LPResaltePorObjeto.prototype.desactivarResalte = function () {
        estadoAni.stop();
        estadoAni.kill();
        $($(objetoPri).children()[3]).toggle( "explode" );
        TweenMax.to($($(objetoPri).children()[3]), 1, {alpha:1});
       // TweenMax.to($(objetoPri), 0.5, {css: {scaleY: 1, scaleX: 1}});
       // $(objetoPri).addClass("tinta");
    };

    return LPResaltePorObjeto;
})();
