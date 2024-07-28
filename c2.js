let incrementer=document.querySelector("#inc");
let decrementer=document.querySelector("#dec");
let Reseter=document.querySelector("#res");
let countvalue=document.querySelector("#countvalue1");

count=0;
incrementer.addEventListener("click",()=>{
    count++;
    countvalue.innerHTML=count;
});

decrementer.addEventListener("click",()=>{
    count--;
    countvalue.innerHTML=count;
});

Reseter.addEventListener("click",()=>{
    countvalue.innerHTML=0;
});


