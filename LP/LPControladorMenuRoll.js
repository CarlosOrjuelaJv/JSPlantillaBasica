/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var LPControladorMenuRoll = function(arrPop, fondoOpa) {
    /////////constructo
    var popUpActual;
    var popVistos = new Array();
    var popYaVistos = new Array();
    var arrPop = arrPop;

    var fondoOpa;
    if (fondoOpa != "none") {
        this.fondoOpa = fondoOpa;
    }

    var numPopUps = arrPop.length;
    for (i = 0; i < arrPop.length; i++) {
        popVistos.push(true);
    }

    popUpActual = 0;
    /////////fin construc
    this.getArrPop = function() {

        return arrPop;
    };

    this.getPopUpActual = function() {
        return popUpActual;

    };
//retorna el fondo opa
    this.getFondoOpa = function() {
        return fondoOpa;

    };
//retorna el fondo opa
    this.gePopYaVistos = function(num) {
        return popYaVistos[num];

    };
//retorna los popVistos
    this.getPopVistos = function() {
        return popVistos;

    };
//setea los popVistos
    this.setVisiPops = function(visibili) {
        for (i = 1; i < his.arrPop.length; i++) {
            popVistos[i] = visibili;
        }

    };
//retorna los popVistos
    this.verPopUp = function(num) {
       
        var estado = false;
        if (num >= 0 && num < arrPop.length && popVistos[num]) {
            this.cerrarPopUp();
            popUpActual = num;
            // console.log($(arrPop[(num)]));
            $(arrPop[(num)]).show();// empieza desde 0
            TweenMax.to($(arrPop[num]), 1, {css:{scaleX:1,scaleY:1} });
            estado = true;
            if (num < (arrPop.length - 1)) {
                popVistos[num + 1] = true;
            }
            popYaVistos[num] = true;
        }
        //////////
        if (num!=0) {
             $(fondoOpa).show();
        }
        return estado;
    };

//retorna los popVistos
    this.cerrarPopUp = function() {
      // console.log("cerro pops");
        for (i = 0; i < arrPop.length; i++) {
            TweenMax.to($(arrPop[i]), 0, {css:{scaleX:0,scaleY:0} });
            $(arrPop[i]).hide();
        }
        $(fondoOpa).hide();
    };
    
    this.cerrarPopUp();
}
LPControladorMenuRoll.prototype.cerr= function(){
    
    
    console.log(this);
}