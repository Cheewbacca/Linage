// slider for desktop / mobile

const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');

if( window.innerWidth > 500 ){
    const slides = [...document.getElementsByClassName('slide')]; // slides
    const buttons = [...document.getElementsByClassName('button')]; // buttons

    let slideIndex = 1;

    function changeSlide(slideIndex){
        if (slideIndex > slides.length){
            slideIndex = 1;
        }else if (slideIndex < 1){
            slideIndex = slides.length;
        }

        slides.forEach( slide => {
            slide.style.display = 'none';
        });

        buttons.forEach( button => {
            button.className = button.className.replace(" active-slide", "");
        });

        slides[slideIndex - 1].style.display = 'flex';
        buttons[slideIndex - 1].className += ' active-slide';
        console.log(slideIndex);
    }

    setInterval(() => {slideIndex > slides.length ? slideIndex = 1 : slideIndex ; changeSlide(++slideIndex); } , 4000);

    changeSlide(slideIndex);

    // if button clicked, make it active and change slide 

    buttons.forEach( (btn, index) => {
        btn.addEventListener('click', function() {
            changeSlide(index + 1);
        });
    });
    

    arrowRight.addEventListener('click', function(){
        slideIndex > slides.length ? slideIndex = 1 : slideIndex ;
        changeSlide(++slideIndex);
    });

    arrowLeft.addEventListener('click', () => {
        slideIndex < 1 ? slideIndex = slides.length : slideIndex ;
        changeSlide(--slideIndex);
    });

}else {
    // add jquery and slick slider

    arrowRight.parentElement.remove();

    const style = document.createElement('link');
    style.rel = "stylesheet";
    style.href = "static/css/slick.css";
    document.getElementsByTagName('head')[0].appendChild(style);

    const script= document.createElement('script');
    script.src= 'static/js/libs.min.js';
    document.body.insertBefore(script, document.querySelector('script:last-child'));

    script.addEventListener('load', () => {
        $(".buttons").remove();

        $("#slider").slick({
            slidesToShow: 1, 
            slidesToScroll: 1,
            infinite: true, 
            arrows: false,
            dots: true
        });
    });
}

// remove active class from button
function removeActive(node, className){
    [...node].forEach( btn => { btn.classList.remove(className); });
}

// hide slide
function hide(node){
    [...node].forEach( el => { el.style.display = 'none'; });
}

// show slide
function show(className){
    [...document.getElementsByClassName(className)].forEach( slide => slide.style.display = 'flex' );
}

// add class 'visible' to show element
function addVisible(node, className){
    [...document.getElementsByClassName(node)].forEach( btn => { btn.classList.add(className); });
}

// remove class 'visible' to hide element
function removeVisible(node, className){
    [...document.getElementsByClassName(node)].forEach( btn => { btn.classList.remove(className); });
}

const rankingWorlds = document.getElementsByClassName('world');
const activeWorld = document.getElementById('active-world');

let worldLists = ['world-1' , 'world-2'];

[...rankingWorlds].forEach( world => {
    world.addEventListener("click", function(e) {
        e.preventDefault();
        let classes = this.classList.value;
        worldLists.forEach( list => {
            if (classes.indexOf(list) > -1 ){
                addVisible( list , 'visible');
            } else {
                removeVisible( list ,'visible');
            }
        });
    });
});

// scripts for swap worlds into last block

function lastBlockWorldsSwap(e, target1, target2, content1, content2){
    e.preventDefault();
    target1.classList.remove('active_world');
    target2.classList.add('active_world');
    content1.classList.remove('visible');  
    content2.classList.add('visible');
}

const wrld1 = document.getElementById('wrld1');
const wrld2 = document.getElementById('wrld2');
const worldInfo = [...document.getElementsByClassName('world-info')];

wrld1.addEventListener('click', function(e) {
    lastBlockWorldsSwap(e, wrld2, this, worldInfo[1], worldInfo[0] );
});

wrld2.addEventListener('click', function(e) {
    lastBlockWorldsSwap(e, wrld1, this, worldInfo[0], worldInfo[1] );
});

// scripts for swap worlds into last block

