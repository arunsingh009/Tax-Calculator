function tax(){
    let input = +document.getElementById("income").value;
    let limit = +document.getElementById("slab").value;
    var out = document.getElementById("result");
    var roi;
    var amount;

    if(input == " "){
        alert("Input Salary");
    }else if(limit==0){
        alert("Select Range")

    }else if(limit==1){
        out.innerHTML="No need to pay Tax";
    }else if(limit==5){
        roi =5;
        amount = (input/100)*roi;
        out.innerHTML=`You need to pay RS.${amount} for tax at 5%`;
    }else if(limit==20){
        roi =20;
        amount = (input/100)*roi;
        out.innerHTML=`You need to pay RS.${amount} for tax at 20%`;
    }else if(limit==30){
        roi =30;
        amount = (input/100)*roi;
        out.innerHTML=`You need to pay RS.${amount} for tax at 30%`;
    }

}