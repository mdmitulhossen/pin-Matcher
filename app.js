
//Generate Pin
const generatePin = document.getElementById('generatePin');
generatePin.addEventListener('click',()=>{
    let pinInput =document.getElementById('pinInput');
    pinInput.value=Math.floor(1000+Math.random()*9000);
});

//submit pin
const numberBtn = document.querySelectorAll('.nBtn');
const pinMatch=document.getElementById('pinMatchinput');

for(let i=0;i<numberBtn.length;i++){
      numberBtn[i].addEventListener('click',()=>{
            pinMatch.value+=numberBtn[i].value;
        });
}


//clear function
function clr(){
      pinMatch.value="";
}

//single digit delete function
function del(){
      pinMatch.value=pinMatch.value.slice(0,-1);
}