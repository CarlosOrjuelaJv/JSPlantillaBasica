/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//clases
var LPControladorPopUp = (function () {
    function LPControladorPopUp(arrPop, fondoOpa,visibilidad) {
        //publicas
    this.visibilidad=visibilidad;
    this.popUpActual;
    this.popVistos= new Array();
    this.popYaVistos= new Array();
    this.arrPop = arrPop;
   
    this.fondoOpa;
    if (fondoOpa!="none") {
         this.fondoOpa = fondoOpa;
    }
    
    this.numPopUps = arrPop.length;
    for (i = 0; i < arrPop.length; i++) {
       this.popVistos.push(visibilidad);
       this.popYaVistos.push(false);
    }
    this.popVistos[0]=true;
    this.popUpActual = 0;
    this.cerrarPopUp();
  //  $(this.arrPop[0]).show();//DAJAR ABIERTO EL PRIMER POP
    }
    //obtiene el array de slides
LPControladorPopUp.prototype.getArrPop = function() {
    return this.arrPop;

};
LPControladorPopUp.prototype.getPopUpActual = function() {
    return this.popUpActual;

};
//retorna el fondo opa
LPControladorPopUp.prototype.getFondoOpa = function() {
    return this.fondoOpa;

};
//retorna el fondo opa
LPControladorPopUp.prototype.getPopYaVistos = function(num) {
    return this.popYaVistos[num];

};
//retorna los popVistos
LPControladorPopUp.prototype.getPopDisponible = function(num) {
    return this.popVistos[num];

};
//setea los popVistos
LPControladorPopUp.prototype.setVisiPops = function(visibili) {
    for (i = 1; i < his.arrPop.length; i++) {
       this.popVistos[i]=visibili;
    }

};
//retorna los popVistos
LPControladorPopUp.prototype.verPopUp = function(num) {
    var estado=false;
    if (num>=0 && num < this.arrPop.length && this.popVistos[num]) {
        this.cerrarPopUp();
        this.popUpActual=num;
        $(this.arrPop[(num)]).show();// empieza desde 0
        $(this.fondoOpa).show();
        estado=true;
        if (num< (this.arrPop.length-1)) {
            this.popVistos[num+1]=true;
        }
        this.popYaVistos[num]=true;
    }
     var x = 0.2;

    var puzz = $(this.arrPop[(num)]);
    //console.log($(puzz).children());
    $(puzz).children().each( function(){
        TweenMax.from($(this), 0.5, {css:{scaleX:0, scaleY:0}, delay:x});
        x += 0.3;
    });
    return estado;
};

//retorna los popVistos
LPControladorPopUp.prototype.cerrarPopUp = function() {
    for (i = 0; i < this.arrPop.length; i++) {
       $(this.arrPop[i]).hide();
    }
    $(this.fondoOpa).hide();
};
    
    //fin clase
    return LPControladorPopUp;
})();

