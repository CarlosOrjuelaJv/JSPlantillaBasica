/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var globalEmiter=0;
var LPEmiter = (function () {
    var emitter, emitterSize, dotIndex, dotQuantity, dotSizeMax, dotSizeMin, speed, gravity, explosion, contenedorEmiter, angulo, isAnguloVaria,name;
        
    
    
    function LPEmiter(emitidorId, cantidad, tamanoMin, tamanoMax, gravedad, velocidad, contenedor, anguloToma, isAnguloVariaToma) {
        ///nobre diferente
        globalEmiter++;
        //this.name=globalEmiter+"";
        LPEmiter.prototype.name=globalEmiter+"";
        //console.log("crea emitidor "+this.name);
        emitter = document.getElementById(emitidorId);
        contenedorEmiter = document.getElementById(contenedor);
        emitterSize = 50;
        LPEmiter.prototype.dotPool = [];
        dotIndex = 0;
        dotQuantity = cantidad;
        dotSizeMax = tamanoMax;
        dotSizeMin = tamanoMin;
        speed = velocidad;
        gravity = gravedad;
        angulo = anguloToma;
        isAnguloVaria = isAnguloVariaToma;

        //////////////////////////
        for (var i = dotQuantity - 1; i >= 0; i--) {
            dot = document.createElement("div");
            dot.className = "dot"+this.name;
            //TweenLite.set(dot, {xPercent: -50, yPercent: -50, force3D: true});
            document.body.appendChild(dot);
            $(".dot"+this.name).css({"background-color": "#52ccff", "border-radius": "50%", "position": "absolute", "z-index": "5000", "pointer-events": "none", "left": calculoPos(emitter, contenedorEmiter)[0], "top": calculoPos(emitter, contenedorEmiter)[1]});
            LPEmiter.prototype.dotPool[i] = dot;
        }
        
        definicion();
    }
    
    
    LPEmiter.prototype.getArray= function(){
        return LPEmiter.prototype.dotPool;
    };
    function definicion() {
//     console.log(emitter + " aca?");
       // explosion = new TimelineMax({repeat: -1}).call(shootDot, [emitter], null, 2 / dotQuantity);
       console.log("crea emitidor "+LPEmiter.prototype.name);
       console.log( LPEmiter.prototype.dotPool);
    }
    function calculoPos(objt1, objt2) {
        var pos = new Array();
        var positionEmiter = $(objt1).position();
        var posContene = $(objt2).position();

//       console.log($(emitter).css("width"));
        var posXIni = positionEmiter.left + posContene.left + 25;
        var posYIni = positionEmiter.top + posContene.top + 25;
        pos.push(posXIni);
        pos.push(posYIni);
        return pos;
    }


    function shootDot(emitter) {
        var angle, length, dot, i, size, bounds = emitter.getBoundingClientRect();
        ;
        //create all the dots
        dot = LPEmiter.prototype.dotPool[dotIndex++];
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
        $(".dot"+LPEmiter.prototype.name).css({"left": calculoPos(emitter, contenedorEmiter)[0], "top": calculoPos(emitter, contenedorEmiter)[1]});
        //this is where we do the animation...
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
    LPEmiter.prototype.comienza = function () {
        console.log("comienza Emi "+LPEmiter.prototype.name);
       explosion = new TimelineMax({repeat: -1}).call(shootDot, [emitter], null, 2 / dotQuantity);

    };
    LPEmiter.prototype.termina = function () {
        console.log("termina Emi "+LPEmiter.prototype.name);
        TweenMax.killDelayedCallsTo(shootDot);
    };
    LPEmiter.prototype.getName= function(){
        return LPEmiter.prototype.name;
    };

    return LPEmiter;
})();