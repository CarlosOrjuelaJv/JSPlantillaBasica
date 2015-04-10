/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var globalEmiter=0;
var LPEmiter = (function () {
    var emitter, emitterSize, contenedorEmiter,isDentro,dotIndex;//las toma como estaticas
        
    
    
    function LPEmiter(emitidorId, cantidad, tamanoMin, tamanoMax, gravedad, velocidad, contenedor,isDentroContenedor, anguloToma, isAnguloVariaToma) {
        isDentro=isDentroContenedor;
        ///nobre diferente
        globalEmiter++;
//        name=globalEmiter+"";
        this.explosion;
        this.name=globalEmiter+"";;
        //console.log("crea emitidor "+this.name);
        emitter = document.getElementById(emitidorId);
        this.emiterClass=emitter;
        contenedorEmiter = document.getElementById(contenedor);
        emitterSize = 50;
        this.dotPool = [];
        dotIndex = 0;
        this.dotQuantity = cantidad;
        this.dotSizeMax = tamanoMax;
        this.dotSizeMin = tamanoMin;
        this.speed = velocidad;
        this.gravity = gravedad;
        this.angulo = anguloToma;
        this.isAnguloVaria = isAnguloVariaToma;

        //////////////////////////
        for (var i = this.dotQuantity - 1; i >= 0; i--) {
            dot = document.createElement("div");
            dot.className = "dot"+this.name;
            //TweenLite.set(dot, {xPercent: -50, yPercent: -50, force3D: true});
//            document.body.appendChild(dot);
            $( contenedorEmiter ).append( dot);
//            $(".dot"+this.name).css({"background-color": "#52ccff", "border-radius": "50%", "position": "absolute", "z-index": "1", "pointer-events": "none", "left": calculoPos(emitter, contenedorEmiter)[0], "top": calculoPos(emitter, contenedorEmiter)[1]});
            $(".dot"+this.name).css({"background-color": "rgba(255,255,255,0.51)", "border-radius": "50%", "position": "absolute", "pointer-events": "none", "left": calculoPos(emitter, contenedorEmiter)[0], "top": calculoPos(emitter, contenedorEmiter)[1]});
            this.dotPool[i] = dot;
        }
        
        definicion(this.name,this.dotPool);
    }
    
    
    LPEmiter.prototype.getArray= function(){
        return this.dotPool;
    };
    
    function definicion(name,dotPool) {
//     console.log(emitter + " aca?");
       // explosion = new TimelineMax({repeat: -1}).call(shootDot, [emitter], null, 2 / dotQuantity);
//       console.log("crea emitidor "+name);
//       console.log( dotPool);
    }
    
    function calculoPos(objt1, objt2) {
        var pos = new Array();
        var positionEmiter = $(objt1).position();
        var posContene = $(objt2).position();

//       console.log($(emitter).css("width"));
        var posXIni = positionEmiter.left + posContene.left + 25;
        var posYIni = positionEmiter.top + posContene.top + 25;
//        pos.push(posXIni);
//        pos.push(posYIni);
        
        if (isDentro) {
            pos.push(positionEmiter.left+25);
            pos.push(positionEmiter.top+25);
     
        }else {
            pos.push(posXIni);
            pos.push(posYIni);
          
        }
  
        return pos;
    }
  
    function shootDot  (emitter,dotPool,dotQuantity,dotSizeMax,dotSizeMin,speed,gravity,angulo,isAnguloVaria) {
        var angle, length, dot, i, size;
//        var bounds = emitter.getBoundingClientRect();
 
        //create all the dots
        dot = dotPool[dotIndex++];
        if (dotIndex === dotQuantity)
            dotIndex = 0;
        size = getRandom(dotSizeMin, dotSizeMax);

        if (isAnguloVaria) {
            angle = angulo * Math.random(); //random angle
        } else {
            angle = angulo; //random angle
        }
//        angle = Math.random() * Math.PI * 2; //random angle
        //figure out the maximum distance from the center, factoring in the size of the dot (it must never go outside the circle), and then pick a random spot along that length where we'll plot the point. 
        length = Math.random() * (emitterSize / 2 - size / 2);
        //place the dot at a random spot within the emitter, and set its size.
        TweenLite.set(dot, {
            opacity: 1,
            x: 0,
            y: 0,
            width: size,
            height: size
        });
        $(dot).css({"left": calculoPos(emitter, contenedorEmiter)[0], "top": calculoPos(emitter, contenedorEmiter)[1]});
        //this is where we do the animation...
       // console.log(dot);
        TweenLite.to(dot, 1 + Math.random(), {
            opacity: 0,
            force3D: "auto",
            physics2D: {
                angle: angle * 180 / Math.PI, //translate radians to degrees
                velocity: (100 + Math.random() * 250) * speed, //initial velocity
                gravity: 500 * gravity //you could increase/decrease this to give gravity more or less pull
            }

            //if you'd rather not do physics, you could just animate out directly by using the following 2 lines instead of the physics2D:
            //x:Math.cos(angle) * length * 6, 
            //y:Math.sin(angle) * length * 6
        }, 0);
    }


    function getRandom(min, max) {
        return min + Math.random() * (max - min);
    }

//just for fun, I made the emitter draggable...
    LPEmiter.prototype.comenzar = function () {
//        console.log("comienza Emi "+this.name);
        var pool1=this.dotPool
        var name1=this.name;
        var emiter1=this.emiterClass;
        var canti1=this.dotQuantity;
        var sizeMa1=this.dotSizeMax;
        var sizeM1=this.dotSizeMin;
        var speed1=this.speed;
        var gravi1=this.gravity;
        var angu1=this.angulo;
        var isAnguVar1=this.isAnguloVaria;
        
       this.explosion = new TimelineMax({repeat: -1}).call(shootDot, [emiter1,pool1,canti1,sizeMa1,sizeM1,speed1,gravi1,angu1,isAnguVar1], null, 2 / canti1);

    };
    LPEmiter.prototype.terminar = function () {
//        console.log("termina Emi "+this.name);
        //TweenMax.killDelayedCallsTo(shootDot);
        this.explosion.stop();
        this.explosion=null;
    };
    LPEmiter.prototype.pararTodos = function () {
//        console.log("termina Emi");
        TweenMax.killDelayedCallsTo(shootDot);
    };
    LPEmiter.prototype.getName= function(){ 
        return this.name;
    };

    return LPEmiter;
})();