//Crear corazon
let heart = document.createElement("DIV");
heart.className = "heart";
document.body.appendChild(heart);

//Asignar tamaño       
let tam = 100;
heart.style.width = tam+"px"
heart.style.height = tam+"px"

.heart {
  background: #e74c3c;
}

.heart {
  position: absolute;
}

//Asignar posición inicial
let posy = 100;
heart.style.top = posy+"px"
let posx = 200;
heart.style.left = posx+"px"

.heart::before,
.heart::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: #e74c3c;
  border-radius: 50%;
}

.heart::after {
  top: 0;
  right: -50%;
}

.heart::before {
  top: -50%;
  left: 0;
}

.heart {
  transform: rotate(-45deg);
}

var num = 10;

for(i=0;i

    
    // Tamaños desde los 20px hasta los 55px
let tam = Math.floor((Math.random() * 20) + 15);
    
    var w = window.innerWidth;
var h = window.innerHeight;
//Parte inferior de la ventana
let posy = Math.floor((Math.random() * 0.1*h) + 0.8*h);
//Ancho de la ventana dejando un margen del 10%
let posx = Math.floor((Math.random() * 0.8*w) + 0.1*h);
    
    var dirx = [ ];
var diry = [ ];
    
    var dirx = [ ];
var diry = [ ];
    
    setInterval(function() {
  move()
}, 60);
    
    function move(){
  for(i=0;i
      
 //Aumento de coordenadas
let y =  parseInt(heart.style.top) + diry[i];
let x =  parseInt(heart.style.left) + dirx[i];
      
      //Reinicio de coordenadas
if (x > 0.8*w) { x = 0.2*w;}
if (x < 0.2*w) { x = 0.8*w;}
if (y < 0.2*h) { y = 0.8*h;}
if (y > 0.8*h) { y = 0.2*w;}
     
      
      //Asignación de coordenadas
heart.style.top = y + "px";
heart.style.left = x + "px";
      
      //Asignar evento
heart.setAttribute("onclick","deleteheart(this)")
      
     function deleteheart(element){
  element.style.display = "none";
}
