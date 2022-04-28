const ua = document.querySelector('#ind-ua');
const en = document.querySelector('#ind-en');
const allLang = ['en', 'ua'];



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
