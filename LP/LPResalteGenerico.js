/* 
 * SENA Linea ProduccionGirardot
 * Programacion CarlosAOL  * 
 */
var glowNum=0;
var LPResalteGenerico = function(objet,tipo) {
    //publicas
     

switch (tipo) {

        case 'clicScaleMenos':
            var estadoAni = new TimelineMax();
            $(objet).css({ opacity: 1});
            estadoAni = new TimelineMax({repeat: -1, yoyo: true});
            estadoAni.append(TweenMax.to($(objet), 1, {css: {scaleY: 0.9, scaleX: 0.9}}), 0);
            estadoAni.play();
            $(objet).click(function() {
                //$(objet).css({ opacity: 0.5 });
                estadoAni.stop();
                estadoAni.kill();
                TweenMax.to($(objet), 0.5, {css: {scaleY: 1, scaleX: 1}});

            });
        break; 
        case 'tinta':
            $(objet).addClass("grises");
        break; 
        case 'desactivado':
            $(objet).addClass("grises");
            $(objet).css('cursor','not-allowed');
            $(objet).css('-webkit-filter','grayscale(1)');
        break; 
        case 'desacBlanco':
            $(objet).addClass("grises");
            $(objet).css('cursor','not-allowed');
            $(objet).css('-webkit-filter','grayscale(1)');
        break; 
        case 'activado':
            $(objet).removeClass("grises");
            $(objet).css('cursor','pointer');
            $(objet).css('-webkit-filter','grayscale(0)');
        break; 
        case 'actiBlanco':
          $(objet).removeClass("grises");
            $(objet).css('cursor','pointer');
           $(objet).css('-webkit-filter','grayscale(0)');
        break; 
        case 'clicScaleMas':
            var estadoAni = new TimelineMax();
            $(objet[0]).css({ opacity: 1});
            estadoAni = new TimelineMax({repeat: -1, yoyo: true});
            estadoAni.append(TweenMax.to($(objet[0]), 1, {css: {scaleY: 1.2, scaleX: 1.2}}), 0);
            estadoAni.play();
            $(objet[0]).click(function() {
                $(objet[0]).css({ opacity: 0.5 });
                estadoAni.stop();
                estadoAni.kill();
                TweenMax.to($(objet[0]), 0.0, {css: {scaleY: 1, scaleX: 1}});
            });
        break; 
        case 'siempreScale':
            var estadoAni = new TimelineMax();
            ;
            estadoAni = new TimelineMax({repeat: -1,yoyo:true});
            estadoAni.append(TweenMax.to($(objet), 1, {css: {scale: 0.7}}), 0);
            estadoAni.play();
        break;
      case 'glow':
            // instucAnima.appendMultiple(TweenMax.allFrom([Personaje, Ojos, bocas, manos_periodico], 0.8, {css:{x:-650}, opacity:0, ease:Back.easeOut}), 0);     
		 var glowAni = new TimelineMax({repeat:-1,yoyo:true});
               // glowAni.append(TweenMax.to($(objet[0]), 1, { boxShadow: "inset 0px 10px 6px white",
                glowAni.append(TweenMax.to($(objet[0]), 1, { boxShadow: "0px 0px 10px 6px white",backgroundColor:"white",
                 color:"#999"}), 0);
                $(objet[1]).click(function() {
                glowAni.stop();
                glowAni.kill();
                TweenMax.to($(objet[0]), 0.0, {boxShadow: "0px 0px 0px 0px white", color: "#999"});

            });
                
            break;
       case 'glowInset':
            // instucAnima.appendMultiple(TweenMax.allFrom([Personaje, Ojos, bocas, manos_periodico], 0.8, {css:{x:-650}, opacity:0, ease:Back.easeOut}), 0);     
		 var glowAni = new TimelineMax({repeat:-1,yoyo:true});
               // glowAni.append(TweenMax.to($(objet[0]), 1, { boxShadow: "inset 0px 10px 6px white",
                glowAni.append(TweenMax.to($(objet[0]), 1, { backgroundColor:"rgba(255,255,255,0.4)",
                 color:"#999"}), 0);
                $(objet[0]).click(function() {
                glowAni.stop();
                glowAni.kill();
                TweenMax.to($(objet[0]), 0.0, {backgroundColor:"rgba(255,255,255,0)", color: "#999"});

            });
                
            break;
       case 'glowSimpre':
            // instucAnima.appendMultiple(TweenMax.allFrom([Personaje, Ojos, bocas, manos_periodico], 0.8, {css:{x:-650}, opacity:0, ease:Back.easeOut}), 0);     
		var glowAni = new TimelineMax({repeat:-1,yoyo:true});
                glowAni.append(TweenMax.to($(objet), 1, { boxShadow: "white 0px 0px 14px 9px",
                 color:"white"}), 0);
            
                
            break;
    case 'clic3':
        var glowAni = new TimelineMax({repeat:4,yoyo:true}); 
            //glowAni.append(TweenMax.to($("#glowLupa"+glowNum), 1, { boxShadow: "0px 0px 24px 6px #014951"}), 0);
            glowAni.append(TweenMax.from($(objet), 1, {css: {scale: 0.8}}), 0);
            glowAni.play();

        break;
    case 'clic4':
            var estadoAni = new TimelineMax();
            $(objet).css({ opacity: 1});
            estadoAni = new TimelineMax({repeat: -1, yoyo: true});
            estadoAni.append(TweenMax.to($(objet), 1, {css: {scaleY: 1.2, scaleX: 1.2}}), 0);
            estadoAni.play();
            $(objet).click(function() {
                $(objet).css({ opacity: 0.5 });
                estadoAni.stop();
                estadoAni.kill();
                TweenMax.to($(objet), 0.0, {css: {scaleY: 1, scaleX: 1}});

            });
        break;
   case 'glowRedondo':
            //console.log("asigna glowGenerico" + glowNum );
            $(objet).append("<div id='glowLupa"+glowNum+"' class='glowZoom'></div>");

            var ancho,alto;
            ancho= $(objet).width();
            alto= $(objet).height();
            $("#glowLupa"+glowNum).css({width:(ancho-5),height:(alto-5), marginLeft: "1px", marginTop: "2px"});
            $("#glowLupa"+glowNum).zIndex(-1);
            $("#glowLupa"+glowNum).corner("50px");

           var  glowAni = new TimelineMax({repeat:-1,yoyo:true}); 
            glowAni.append(TweenMax.to($("#glowLupa"+glowNum), 1, { boxShadow: "0px 0px 24px 6px #0E303F"}), 0);
            glowAni.play();
            glowNum++;

            $(objet).mousemove(function() {

                //seleccionamos el div con el efecto glow
                var num;
                var ide = $('#'+$(objet).attr('id') + " div[id*='glowLupa']");
                //console.log($(objet).attr('id'));
                glowAni.stop();
                glowAni.kill();

                $(ide).each( function(){
                    //console.log("#"+$(objet).attr("id"));
                    $("#"+$(objet).attr("id")).remove();
                });                
                $(objet).unbind( "mousemove" );
            });
            break;
    
    }
    
}
;
