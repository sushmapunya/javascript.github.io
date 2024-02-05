let feet =document.getElementById("feet");
let meter =document.getElementById("meter");
let inch =document.getElementById("inch");
let cm =document.getElementById("cm");
let yard =document.getElementById("yard");
let km =document.getElementById("km");
let mile =document.getElementById("mile");

function feetToOther(val){
    meter.value= val/3.2808;
    inch.value=val*12;
    cm.value=val/0.032808;
    yard.value=val*0.33333;
    km.value=val/3280.8;
    mile.vakue=val*0.000189339;
}

function meterToOther(val){
    feet.value= val*3.2808;
    inch.value=val*39.370;
    cm.value=val/0.01;
    yard.value=val*1.0936;
    km.value=val/1000;
    mile.vakue=val*0.00062137;
}
function inchToOther(val){
    feet.value= val*0.083333;
    meter.value=val/39.370;
    cm.value=val/0.39370;
    yard.value=val*0.027778;
    km.value=val/39370;
    mile.vakue=val*0.00015783;
}
function cmToOther(val){
    feet.value= val*0.032808;
    meter.value=val/100;
    inch.value=val/0.39370;
    yard.value=val*0.010936;
    km.value=val/100000;
    mile.vakue=val*0.0000062137;
}
function yardToOther(val){
    feet.value= val*3;
    inch.value=val*36;
    cm.value=val/0.010936;
    meter.value=val/1.0936;
    km.value=val/1093.6;
    mile.vakue=val*0.00056818;
}
function kmToOther(val){
    feet.value= val*3280.8;
    inch.value=val*39370;
    cm.value=val*10000;
    yard.value=val*1093.6;
    meter.value=val*1000;
    mile.vakue=val*0.62137;
}
function mileToOther(val){
    feet.value= val*5280
    inch.value=val*63360;
    cm.value=val/0.0000062137;
    yard.value=val*1760;
    km.value=val/0.62137;
    meter.vakue=val/0.00062137;
}


function convertToOther(convertfrom,value){
    switch(convertfrom){
      case "feet": feetToOther(parseFloat(value));break;
      case "meter": meterToOther(parseFloat(value));break;
      case "inch": inchToOther(parseFloat(value));break;
      case "cm": cmToOther(parseFloat(value));break;
      case "yard": yardToOther(parseFloat(value));break;
      case "km": kmToOther(parseFloat(value));break;
      case "mile": mileToOther(parseFloat(value));break;

   
   
   
    }
}
