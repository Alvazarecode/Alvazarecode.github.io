
  const menu=document.querySelector(".menu");
  const openMenuBtn=document.querySelector(".open-menu");

$(document).ready(function(){


    var canli= $('.slider li').length;
    var imgPos=1;
  //  console.log(canli);

    for(x=1; x <= canli ;x++){
        $('.pagination').append('<li class="circulo"><span class="fa fa-circle fa-2x" aria-hidden="true"></span></li>');
    }



    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({color:'#cd6e2e'});
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);


    setInterval(function(){
        nextSlider();
    },10000)

function pagination(){
    var paginationPos=$(this).index() + 1;

    $('.slider li').hide();
    $('.slider li:nth-child('+paginationPos+')').fadeIn();

    $('.pagination li').css({'color':'#858585'});
    $(this).css({'color':'#cd6e2e'})

    imgPos=paginationPos;

}





function nextSlider(){

    if(imgPos >= canli){
        imgPos=1;
    }else{
        imgPos++;
    }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+imgPos+')').css({'color':'#cd6e2e'})
    $('.slider li').hide();
    $('.slider li:nth-child('+imgPos+')').fadeIn();
}

function prevSlider(){

    if(imgPos <= 1){
        imgPos=canli;
    }else{
        imgPos--;
    }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+imgPos+')').css({'color':'#cd6e2e'})
    $('.slider li').hide();
    $('.slider li:nth-child('+imgPos+')').fadeIn();
}








})


//FUNCIONES
function toggleMenu(){
    menu.classList.toggle("menu_abierto");
}


openMenuBtn.addEventListener('click', toggleMenu);



