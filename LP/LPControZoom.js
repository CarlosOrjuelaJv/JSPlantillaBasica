/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var LPControZoom = (function() {
    function LPControZoom(arrZoom, fondoZoom, arrBtn) {
        this.arrBtn = arrBtn;
        this.arrZoom = arrZoom;
        this.fondoZoom = fondoZoom;
        this.fondoZoom.hide();
        for (i = 0; i < this.arrZoom.length; i++)
        {
            this.arrZoom[i].hide();
        }
    }

    LPControZoom.prototype.verZoom = function(numZoom) {
        //console.log(this.arrZoom[numZoom].show());
        this.arrZoom[numZoom].show();
        this.fondoZoom.show();

        TweenMax.from($('#Stage_personaje_2'), 1, {delay: 1, css: {x: "-200px"}});
        $('#Stage_personaje_2').show();

        var x = 0.2;

        var puzz = $(this.arrZoom[numZoom]);
        //console.log($(puzz).children());
        $(puzz).children().each(function() {
            TweenMax.from($(this), 0.8, {css: {scaleX: 0, scaleY: 0}, delay: x});
            x += 0.3;
        });

    };

    LPControZoom.prototype.ocultarZoom = function() {
        for (i = 0; i < this.arrZoom.length; i++) {
            this.arrZoom[i].hide();
        }
        this.fondoZoom.hide();
        $('#Stage_personaje_2').hide();
    };
    //retorna el objeto
    return LPControZoom;
})();


