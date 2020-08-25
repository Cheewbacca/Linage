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

if (window.innerWidth < 1200){
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
}