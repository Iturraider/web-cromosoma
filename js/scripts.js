document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");
    var textoCard1 = document.getElementById("textoCard1");
    var textoCard2 = document.getElementById("textoCard2");
    var textoCard3 = document.getElementById("textoCard3");
    var tituloCard1 = document.getElementById('tituloCard1');
    var tituloCard2 = document.getElementById('tituloCard2');
    var tituloCard3 = document.getElementById('tituloCard3');
    var imgCard1 = document.getElementById('imgCard1');
    var imgCard2 = document.getElementById('imgCard2');
    var imgCard3 = document.getElementById('imgCard3');
    var atras = document.getElementById('atras');
    var atras2 = document.getElementById('atras2');
    var atras3 = document.getElementById('atras3');
    var main = document.getElementById('main');

   

    card1.addEventListener('click', function(){

        function myFunction(x) {
            if (x.matches) { // If media query matches
                card2.style.display = 'none';
                card3.style.display = 'none';        
                card1.style.flexBasis = '80%';
                card1.style.display = 'flex';
                card1.style.cursor = 'auto';
                card1.style.height = '90%';
                card1.style.maxHeight = '90%';
                card1.style.WebkitHeight = '90%';
                main.style.minHeight = '85rem';
                card1.classList.remove("hover");
                card1.style.gridTemplateColumns = 'repeat(4, 1fr)';
                textoCard1.style.display = 'flex';
                textoCard1.style.gridColumn = '2/-1';
                textoCard1.style.gridRow = '1/3';
                textoCard1.style.marginRight = '2rem';
                tituloCard1.style.gridColumn = '1/2';
                imgCard1.style.gridColumn = '1/2';
                imgCard1.style.gridRow = '2/3';
                imgCard1.style.justifySelf = 'center';
                imgCard1.style.marginBottom = '4rem';
            } else {
                card2.style.display = 'none';
                card3.style.display = 'none';        
                card1.style.flexBasis = '80%';
                card1.style.display = 'grid';
                card1.style.cursor = 'auto';
                card1.style.height = 'auto';
                main.style.minHeight = '25rem';
                card1.classList.remove("hover");
                card1.style.gridTemplateColumns = 'repeat(4, 1fr)';
                textoCard1.style.display = 'flex';
                textoCard1.style.gridColumn = '2/-1';
                textoCard1.style.gridRow = '1/3';
                textoCard1.style.marginRight = '2rem';
                tituloCard1.style.gridColumn = '1/2';
                imgCard1.style.gridColumn = '1/2';
                imgCard1.style.gridRow = '2/3';
                imgCard1.style.justifySelf = 'center';
                imgCard1.style.marginBottom = '4rem';
            }
          }
          
          var x = window.matchMedia("(max-width: 800px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes





        // card2.style.display = 'none';
        // card3.style.display = 'none';        
        // card1.style.flexBasis = '80%';
        // card1.style.display = 'grid';
        // card1.style.cursor = 'auto';
        // card1.style.height = 'auto';
        // main.style.minHeight = '25rem';
        // card1.classList.remove("hover");
        // card1.style.gridTemplateColumns = 'repeat(4, 1fr)';
        // textoCard1.style.display = 'flex';
        // textoCard1.style.gridColumn = '2/-1';
        // textoCard1.style.gridRow = '1/3';
        // textoCard1.style.marginRight = '2rem';
        // tituloCard1.style.gridColumn = '1/2';
        // imgCard1.style.gridColumn = '1/2';
        // imgCard1.style.gridRow = '2/3';
        // imgCard1.style.justifySelf = 'center';
        // imgCard1.style.marginBottom = '4rem';
    });
    card2.addEventListener('click', function(){
        card1.style.display = 'none';
        card3.style.display = 'none';        
        card2.style.flexBasis = '80%';
        card2.style.display = 'grid';
        card2.style.cursor = 'auto';
        // card2.style.height = 'auto';
        main.style.minHeight = '25rem';
        card2.classList.remove("hover");
        card2.style.gridTemplateColumns = 'repeat(4, 1fr)';
        textoCard2.style.display = 'flex';
        textoCard2.style.gridColumn = '2/-1';
        textoCard2.style.gridRow = '1/3';
        textoCard2.style.marginRight = '2rem';
        tituloCard2.style.gridColumn = '1/2';
        imgCard2.style.gridColumn = '1/2';
        imgCard2.style.gridRow = '2/3';
        imgCard2.style.justifySelf = 'center';
        imgCard2.style.marginBottom = '4rem';
    });
    card3.addEventListener('click', function(){
        card2.style.display = 'none';
        card1.style.display = 'none';        
        card3.style.flexBasis = '80%';
        card3.style.display = 'grid';
        card3.style.cursor = 'auto';
        main.style.minHeight = '25rem';
        card3.classList.remove("hover");
        card3.style.gridTemplateColumns = 'repeat(4, 1fr)';
        textoCard3.style.display = 'flex';
        textoCard3.style.gridColumn = '2/-1';
        textoCard3.style.gridRow = '1/3';
        textoCard3.style.marginRight = '2rem';
        tituloCard3.style.gridColumn = '1/2';
        imgCard3.style.gridColumn = '1/2';
        imgCard3.style.gridRow = '2/3';
        imgCard3.style.justifySelf = 'center';
        imgCard3.style.marginBottom = '4rem';
    });

    atras.addEventListener('click', function(){
        location.reload(true);
    });
    atras2.addEventListener('click', function(){
        location.reload(true);
    });
    atras3.addEventListener('click', function(){
        location.reload(true);
    });

  });