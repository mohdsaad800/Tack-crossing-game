let boxs = document.querySelectorAll('.boxs') ;
let reset = document.getElementById('reset');
let start = document.getElementById('start');
let game = document.getElementById('game');
let win = document.getElementById('winmsg')
let person =true;

let windcheack = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
boxs.forEach((elm) => {
    elm.addEventListener("click", function myFunction(){
        if(person == true){
            elm.innerHTML = 'X';
            person = false;
        }else{
            elm.innerHTML = 'O'
            person = true;
            
        }
        elm.disabled =true;
       cheackwin();
    });
    
});
function winner(pos1){
    for(let ab of boxs){
        ab.disabled = true;
        win.classList.remove('hide');
        game.classList.add('hide')
        document.getElementById('text').innerHTML=`Winner is  ${pos1} Person`;

    }
}

function cheackwin(){
    for(let a of windcheack){
        let pos1 = boxs[a[0]].innerText;
        let pos2 = boxs[a[1]].innerText;
        let pos3= boxs[a[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != "")
        if(pos1 === pos2 && pos2 === pos3)
            {
                console.log(`whon  ${pos2}`);
                winner(pos1);
            }
    }

}

function res(){
    for(let box of boxs){
        person = true;
        box.innerHTML="";
        win.classList.add('hide');
        game.classList.remove('hide')
        box.disabled =false;
        
    }
}
start.addEventListener('click', res);
reset.addEventListener('click',res);