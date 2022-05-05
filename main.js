const ua = document.querySelector('#ind-ua');
const en = document.querySelector('#ind-en');

const blue =  document.getElementsByClassName('blue');
const team =  document.getElementsByClassName('yellow');
const item = document.getElementsByClassName('team-about-item')
const red = document.getElementsByClassName('red')
const green = document.getElementsByClassName('green')
const teamAbout = document.getElementsByClassName('team-about')



const allLang = ['en', 'ua'];
var teamInd = 1;
var teamIndMobile = 0;
var menuInd = true;

function ChangeLanguage(x){
    location.href = window.location.pathname + '#'+x;
    location.reload();
}

function ChangeHash(){
    let hash = window.location.hash;
    hash = hash.substr(1);

    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }

    document.querySelector('#ind-' + hash).classList.add('active')
    // document.querySelector('#' + hesh).classList.add('active')


    // for(let key in textArr)(
    //     document.querySelector('.lang-'+key).innerHTML = textArr[key][hash]
    // )
}


function OpenBlue(x){
    var step
    for(step = 0; step < 6; step++){
        blue[step].classList.remove('active-blue');
    }


    blue[x].classList.add('active-blue');
}

function Plus(e){
    if(e==1){
        teamInd = teamInd + 1;
    }
    else{
        teamInd = teamInd - 1;
    }

    if(teamInd > 3){
        teamInd = 1
    }

    Team(teamInd);
}

function PlusMobile(t){

    if(t==1){
        teamIndMobile = teamIndMobile + 1;
    }
    else{
        teamIndMobile = teamIndMobile - 1;
    }

    if(teamIndMobile > 7){
        teamIndMobile = 0
    }



    TeamMobile(teamIndMobile);
}

function TeamMobile(x){
    var blockTeam = document.querySelector('.team-about')
    var cursor2left = document.querySelector('.cursor2left')

    if(x > 0){
        cursor2left.classList.add('cursor2leftBlock')
    }
    if(x < 1){
        cursor2left.classList.remove('cursor2leftBlock')
    }
    blockTeam.style.cssText = "margin-left: -"+ x +"00%;";
}

function Team(x){


    if(x == 1){
        red[0].classList.add('noneTeam')
        green[0].classList.add('left')
        team[0].classList.remove('active-team');
        item[2].classList.remove('block');
        item[3].classList.remove('block');
        item[4].classList.remove('block');
        teamAbout[0].classList.remove('team-about-left')

    }

    if(x == 3){
        teamAbout[0].classList.add('team-about-left')
    }

    if(x == 2){
        teamAbout[0].classList.remove('team-about-left')
    }

    if(x > 1){
        red[0].classList.remove('noneTeam')
        green[0].classList.remove('left')
        team[0].classList.add('active-team');
        setTimeout(() => {
            item[2].classList.add('block');
            setTimeout(() => {
                item[3].classList.add('block');
                setTimeout(() => {
                    item[4].classList.add('block');
                    setTimeout(() => {
                        item[5].classList.add('block');
                        setTimeout(() => {
                            item[6].classList.add('block');
                            setTimeout(() => {
                                item[7].classList.add('block');
                            }, 50);
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }, 310);
    }

}

function Menu(){
    var nav = document.querySelector('#Menu')
    
    console.log(menuInd)

    if(menuInd === true){
        nav.classList.add('menu-open')
    }
    else{
        nav.classList.remove('menu-open')
    }

    menuInd = !menuInd
    
}
