// Welcome message

window.onload = function(){

    setTimeout(function(){

        alert("🎮 Welcome To GameZone! Ready For Gaming?");

    },1000);

};




// Button Animation

let buttons = document.querySelectorAll("button");


buttons.forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.innerHTML="🔥 Loading...";

        setTimeout(function(){

            btn.innerHTML="Play Now";

        },1500);

    });

});





// Scroll Animation

let sections = document.querySelectorAll("section");


window.addEventListener("scroll",function(){


    sections.forEach(function(section){


        let position = section.getBoundingClientRect().top;


        let screen = window.innerHeight;


        if(position < screen - 100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }


    })


});




// Mouse Glow Effect

document.addEventListener("mousemove",function(e){


    let glow=document.createElement("div");


    glow.style.position="fixed";
    glow.style.width="20px";
    glow.style.height="20px";
    glow.style.background="#00ffcc";
    glow.style.borderRadius="50%";
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";
    glow.style.pointerEvents="none";
    glow.style.boxShadow="0 0 30px #00ffcc";


    document.body.appendChild(glow);



    setTimeout(()=>{

        glow.remove();

    },500);


});





// Dynamic Year Footer

let year = new Date().getFullYear();


document.querySelector("footer h3").innerHTML =
"© "+year+" GameZone | Gaming Website";
