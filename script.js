const loginbtn = document.querySelector('.logbtn');
const regbtn = document.querySelector('.regbtn');
const confirm = document.querySelector('#confirm');
const logdiv = document.querySelector('.logdiv');
const uni = document.querySelector('.uni');
const label = document.querySelector('.label');
const loginbox = document.querySelector('.loginbox');
const loglbl = document.getElementById('loglbl');

var logbool = false;
var regbool = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openLoginBox(){
    loginbox.setAttribute('style', 
    'height: 280px; width: 250px; margin-right: 10px; border: 2px solid #008aca91; box-shadow: 0 0 5px #008aca91;;');
    switch (logbool) {
        case true:
            loglbl.innerHTML = "Login";
            break;
        case false:
            loglbl.innerHTML = "Register";
            break;
        default:
            loglbl.innerHTML = "Login";
    }
    loglbl.append();
    loginbox.append();
}

function closeLoginBox(){
    loginbox.setAttribute('style', 
    'height: 0px; width: 0px; margin-right: 0px; border: 0px solid #313131; box-shadow: 0 0 0px #287396;');
    loginbox.append();
    console.log("closed");

}

async function changeLoginBox(){
    closeLoginBox();
    await sleep(300);
    openLoginBox();
}

loginbtn.addEventListener('click', ()=>{
    if (regbool){
        regbool = false;
        logbool = true;
        changeLoginBox();
    }
    else{
        logbool = true;
        openLoginBox();
    }
})

regbtn.addEventListener('click', ()=>{
    if (logbool){
        logbool = false;
        regbool = true;
        changeLoginBox();
    }
    else{
        regbool = true;
        openLoginBox();
    }
    
})

confirm.addEventListener('click', ()=>{
    closeLoginBox();
})