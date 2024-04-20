var cel=document.getElementById("cel");   //both the input tags are selected
var fah=document.getElementById("fah");

cel.addEventListener('input', function(){
    //console.log("cel change");
    let c= this.value;
    let f= (c * 9/5)+32;
    if(!Number.isInteger(f)){
        f= f.toFixed(4);

    }
    fah.value=f;

});
fah.addEventListener('input',function(){
    //console.log("fah change");
    let f=this.value;
    let c= (f -32)*5/9;
    if(!Number.isInteger(c)){
        c= c.toFixed(4);

    }
    cel.value=c;

});