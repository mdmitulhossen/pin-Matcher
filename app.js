//Generate Pin

const generatePin = document.getElementById('generatePin');
const pinInput =document.getElementById('pinInput');


 generatePin.addEventListener('click',()=>{
    
    pinInput.value=Math.floor(1000+Math.random()*9000);
    

});


//submit pin Input
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


//submit pin
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click',()=>{
      

      if(pinInput.value === pinMatch.value ){
            if(pinMatch.value==""|| pinInput.value ==""){
                  let dGanarate = document.getElementById('dGanarate');
                  dGanarate.style.display='block';
                  setTimeout(
                        ()=>dGanarate.style.display='none'
                        ,4000
                  );   
            }
            else{
                  let match = document.getElementById('Match');
                  match.style.display='block';
                  setTimeout(
                        ()=>match.style.display='none'
                        ,4000
                  );   
            }


             
      }
      else{
            let dMatch = document.getElementById('dmatch');
            dMatch.style.display='block';
            setTimeout(
               ()=>dMatch.style.display='none'
                ,4000
            );
      }

});