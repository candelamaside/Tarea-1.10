//Image switcher code


let myImage= document.querySelector('img');


myImage.onclick = function(){

  let mySrc = myImage.getAttribute('src');

  if(mySrc === 'https://www.movilzona.es/app/uploads/2018/02/Instagram-logotipo-fondo.jpg?x=720'){

    myImage.setAttribute ('src','https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_1280.png');

  } else{

    myImage.setAttribute ('src','https://www.movilzona.es/app/uploads/2018/02/Instagram-logotipo-fondo.jpg?x=720');

  }

}


// Personalized welcome message code


let myButton=document.querySelector('button');

let myHeading=document.querySelector('h1');


function setUserName(){

  let myName=prompt('Please enter your name.');

  if(!myName || myName===null){

    setUserName();

  } else{

    localStorage.setItem('name', myName);

    myHeading.innerHTML='Instagram is cool,' + myName;

  }

}


if(!localStorage.getItem('name')){

  setUserName();

} else {

  let storedName=localStorage.getItem('name');

  myHeading.innerHTML='Instagram is cool,' + storedName;

}


myButton.onlick=function(){

  setUserName();

}
