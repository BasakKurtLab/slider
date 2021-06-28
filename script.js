var bilder = ["bild1.jpg", "bild2.jpg", "bild3.jpg", "bild4.jpg"];
var texte = ["Jedes Ding hat seine Zeit.", "Geh deinen Weg und lass die Leute reden.", "Das wunderbarste Märchen ist das Leben selbst.","Ein Herz in Ruhe sieht in allem ein Fest."];

 
var textWrapper = document.getElementById("text");
var bild = document.getElementById("bild");


aktuel = 0;
var meinInterval;



// Wrap every letter in a span


function erst(i) {

        if (i == 0) {
                bild.style.backgroundImage = `url('${bilder[i]}')`;
                textWrapper.innerHTML = texte[i].replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 3000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 5000,
    easing: "easeOutExpo",
    delay: 10000
  });
        }
        
        meinInterval = setInterval(function ()
        {aktuel = i;
               
                i++;
              
        
                if (i == bilder.length)
                        i = 0;
                
                bild.style.backgroundImage = `url('${bilder[i]}')`;
               

                
                textWrapper.innerHTML = texte[i].replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 3000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 5000,
    easing: "easeOutExpo",
    delay: 10000
  });
                
                
                
        
        }, 7000);
          
}


function play(n) {
        clearInterval(meinInterval);
        
        buttonCheck(n);
        aktuel += n;
        
        bild.style.backgroundImage = `url('${bilder[aktuel]}')`;
        text.innerHTML = texte[aktuel];

        setTimeout(erst(aktuel), 3000);

}



function buttonCheck(x)
{
    if(aktuel == bilder.length-1 && x == 1) 
    {
        
        aktuel = -1;
    }

    if(aktuel == 0 && x == -1) 
    {
        aktuel = bilder.length;
    }

    return false; 

}


