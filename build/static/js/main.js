// slider for desktop / mobile

if( window.innerWidth > 500 ){
    const slides = document.getElementsByClassName('slide'); // slides
    const buttons = document.getElementsByClassName('button'); // buttons

    let slidesNames = ['bt-1', 'bt-2', 'bt-3'];

    // hide all slides before script started
    [...slides].forEach( (slide, index) => {
        if (index) {
            slide.style.display = 'none';
        }
    });

    // if button clicked, make it active and change slide 

    [...buttons].forEach( btn => {
        btn.addEventListener('click', function() {
            removeActive(buttons, 'active-slide');
            this.classList.add('active-slide');
            let classes = this.classList.value;
            slidesNames.forEach( name => {
                if (classes.indexOf(name) > -1 ){
                    hide(slides);
                    show(name);
                }
            });
        });
    });
}else {
    // add jquery and slick slider

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

