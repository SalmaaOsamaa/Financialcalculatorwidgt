var tot=0;
function findTotal(){
    document.getElementById("myProgress2").style.display = "none";
    document.getElementById('custom').innerHTML = "";    
    var arr = document.getElementsByName('qty');
    tot=0;
    var uRewards= document.getElementById('uRewards').innerHTML;
    var lRewards= document.getElementById('lRewards').innerHTML;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    uRewards = tot*1.1;
    document.getElementById('uRewards').innerHTML = "Unlimited Rewards : " + uRewards;

    lRewards = tot*1.2;
    document.getElementById('lRewards').innerHTML = "Lifetime Rewards : " +  lRewards;
    var elem = document.getElementById("myBar");
    var elem1 = document.getElementById("myBar1");
    if(uRewards/100 > 100){
        elem.style.width =100 + "%";    
    }else{
    elem.style.width = uRewards/100 + "%";}

    if(lRewards/100 > 100){
        elem1.style.width =100 + "%";    
    }else{
    elem1.style.width = lRewards/100 + "%";}

}


var elem2 = document.getElementById("myBar2");


const calcStrip = ()=>{ 
    document.getElementById("myProgress2").style.display = "block";
    var stripeTotal = tot*2.9; 
    document.getElementById('custom').innerHTML = "Stripe Business Card:" + tot*2.9;    
    if(stripeTotal/100 > 100){
        elem2.style.width =100 + "%";    
    }else{
    elem2.style.width = stripeTotal/100 + "%";}
   }


const calcBrex = () =>{
    document.getElementById("myProgress2").style.display = "block";
    var brexTotal = tot*0.3; 
     document.getElementById('custom').innerHTML = "Brex Business Card:" + tot*0.3; 
     if(brexTotal/100 > 100){
        elem2.style.width =100 + "%";    
    }else{
    elem2.style.width = brexTotal/100 + "%";}
}

const calcArmex = () => {
    document.getElementById("myProgress2").style.display = "block";
    var amexTotal = tot*1.3; 
    document.getElementById('custom').innerHTML = "Amex Business Card:" + tot*1.3; 
    if(amexTotal/100 > 100){
        elem2.style.width =100 + "%";    
    }else{
    elem2.style.width = amexTotal/100 + "%";}
}
 

