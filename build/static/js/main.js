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

const loginBtn = document.getElementsByClassName('signUp');
const signUp = document.getElementById('signUp');

// script for open SignUp / Login modal window

function getFoms(e, target1, target2, content1, content2) {
    e.preventDefault();
    target1.classList.remove('active');
    target1.classList.remove('active_entry');
    target2.classList.add('active');
    target2.classList.add('active_entry');
    content1.style.display = 'block';
    content2.style.display = 'none';
}

[...loginBtn][0].addEventListener("click", function(e){
    e.preventDefault();
    signUp.style.display = 'flex';
    getFoms(e, getLogin, getSignUp, mainBarForm[0], mainBarForm[1]);
});

[...loginBtn][1].addEventListener("click", function(e){
    e.preventDefault();
    signUp.style.display = 'flex';
    getFoms(e, getSignUp, getLogin, mainBarForm[1], mainBarForm[0]);
});

const closeLogin = document.getElementById('closeLogin');

// close login popup
closeLogin.addEventListener("click", () => {
    signUp.style.display = 'none';
});

const download = document.getElementById('download');
const downloadContent = document.getElementById('downloadContent');
let isContentVisible = false;

// close/show popup for download
download.addEventListener("click", (e) => {
    e.preventDefault();
    requirements[1].style.display = 'none';
    isContentVisible = !isContentVisible;
    if (isContentVisible) { 
        downloadContent.style.display = 'block';
    }else {
        downloadContent.style.display = 'none';
    }
});

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

// script for change worlds in Download PopUp

function downloadChangeContent(e, target1, target2, content1, content2){
    e.preventDefault();
    target1.classList.remove('active-download-world');
    target2.classList.add('active-download-world');
    content1.style.display = 'block';
    content2.style.display = 'none';
}

const downloadW1 = document.getElementById('downloadW1');
const downloadW2 = document.getElementById('downloadW2');

const requirements = [...document.getElementsByClassName('download-main')];

downloadW1.addEventListener('click', function(e) {
    downloadChangeContent(e, downloadW2, this, requirements[0], requirements[1]);
});

downloadW2.addEventListener('click', function(e) {
    downloadChangeContent(e, downloadW1, this, requirements[1], requirements[0]);
});

// end of Download PopUp scripts

// script for open SignUp and Login PopUps

const getSignUp = document.getElementById('getSignUp');
const getLogin = document.getElementById('getLogin');

const mainBarForm = [...document.getElementsByClassName('form')];

getSignUp.addEventListener('click', function(e) {
    getFoms(e, getLogin, this, mainBarForm[0], mainBarForm[1] );
});

getLogin.addEventListener('click', function(e) {
    getFoms(e, getSignUp, this, mainBarForm[1], mainBarForm[0] );
});

// end of script for open SignUp and Login PopUps

// Check for passwords are equal

const signUpSubmitBtn = document.getElementById('confirm');

signUpSubmitBtn.parentElement.addEventListener( "submit", function(e){
    e.preventDefault();
    if (document.getElementById('pass').value !== document.getElementById('repeat_pass').value){
        alert('Passwords are not same');
    }else {
        this.submit();
    }
});

if (window.innerWidth < 768){
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('menu');

    let isMenuActive = false;

    burger.addEventListener('click', function() {
        if(!isMenuActive) {
            navMenu.classList.add('showMenu');
            this.classList.remove('closed');
            this.classList.add('opened');
            document.body.classList.add('disableScroll');
        }else{
            document.body.classList.remove('disableScroll');
            navMenu.classList.remove('showMenu');
            this.classList.add('closed');
            this.classList.remove('opened');
        }
        isMenuActive = !isMenuActive;
    });

    const closeDonwload = document.getElementById('closeDonwload');
    closeDonwload.addEventListener('click', ()=>{
        downloadContent.style.display = 'none';
    });
}
