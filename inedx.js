var inptext=document.getElementById("inputext");
var inptextlabel=document.getElementById("label1");
var submit=document.getElementById("submit");
var pass=document.getElementById("pass");
var passlabel=document.getElementById("label2");
pass.addEventListener('focus',function () {
    passlabel.style.bottom="195px";
    passlabel.style.fontSize="12px";
    passlabel.style.color="var(--primary)";
    pass.style.paddingTop="18px";
    passlabel.style.transition=".2s";
});
pass.addEventListener('blur', function(){
    if(pass.value== ""){
        passlabel.style.bottom=null;
        passlabel.style.fontSize=null;
        passlabel.style.color=null;
    }
});

inptext.addEventListener('focus',function(){
    inptextlabel.style.bottom="259px";
    inptextlabel.style.fontSize="10px";
    inptextlabel.style.color="var(--primary)";
    inptext.style.paddingTop="18px";
    inptextlabel.style.transition=".2s";
});
inptext.addEventListener('blur', function(){
    if(inptext.value== ""){
        inptextlabel.style.bottom=null;
        inptextlabel.style.fontSize=null;
        inptextlabel.style.color=null;
    }
});

submit.addEventListener('click',function(){
    alert("nombre: "+inptext.value+" contraseña: "+pass.value);
});