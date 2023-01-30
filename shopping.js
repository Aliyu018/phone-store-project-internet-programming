//item1
var totalcost=0;
function item1Change(){
    var checkBox = document.getElementById("item1"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem1');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem1").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=parseInt(totalcost)+cost;
        document.getElementById("totalcostitem1").innerHTML = cost.toString();
    } else {
        cost=0;
        totalcost=parseInt(totalcost)+cost;
        document.getElementById("totalcostitem1").innerHTML = cost.toString();
    }

}
function item1CheckBox(){
    var checkBox = document.getElementById("item1"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem1');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem1").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=parseInt(totalcost)+cost;
        document.getElementById("totalcostitem1").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=parseInt(totalcost)+cost;
        document.getElementById("totalcostitem1").innerHTML = cost.toString();
    }
}
function item1RadioChange(myRadio){
    var checkBox = document.getElementById("item1"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem1');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem1").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=parseInt(totalcost)+cost;
        document.getElementById("totalcostitem1").innerHTML = cost.toString();
    } else {
        cost=0
        
        document.getElementById("totalcostitem1").innerHTML = cost.toString();
    }
}

//item2
function item2Change(){
    var checkBox = document.getElementById("item2"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem2');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem2").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem2").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem2").innerHTML = cost.toString();
    }

}
function item2CheckBox(){
    var checkBox = document.getElementById("item2"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem2');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem2").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem2").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem2").innerHTML = cost.toString();
    }
}
function item2RadioChange(myRadio){
    var checkBox = document.getElementById("item2"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem2');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem2").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem2").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem2").innerHTML = cost.toString();
    }
}
//item3
function item3Change(){
    var checkBox = document.getElementById("item3"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem3');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem3").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem3").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem3").innerHTML = cost.toString();
    }

}
function item3CheckBox(){
    var checkBox = document.getElementById("item3"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem3');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem3").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem3").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem3").innerHTML = cost.toString();
    }
}
function item3RadioChange(myRadio){
    var checkBox = document.getElementById("item3"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem3');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem3").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem3").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem3").innerHTML = cost.toString();
    }
}

//item4
function item4Change(){
    var checkBox = document.getElementById("item4"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem4');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem4").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem4").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem4").innerHTML = cost.toString();
    }

}
function item4CheckBox(){
    var checkBox = document.getElementById("item4"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem4');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem4").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem4").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem4").innerHTML = cost.toString();
    }
}
function item4RadioChange(myRadio){
    var checkBox = document.getElementById("item4"); 
    var cost; 
    if (checkBox.checked == true){
        //text.style.display = "block";
        var ele = document.getElementsByName('propertyitem4');              
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                cost=ele[i].value;
        }
        var x = document.getElementById("noofunitsitem4").value; 
        cost=parseInt(cost)*parseInt(x)
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem4").innerHTML = cost.toString();
    } else {
        cost=0
        totalcost=totalcost+cost;
        document.getElementById("totalcostitem4").innerHTML = cost.toString();
    }
}
function calculateTotalCostAfterDiscount(){
   var total= parseInt(document.getElementById("totalcostitem1").innerHTML)+parseInt(document.getElementById("totalcostitem2").innerHTML)+parseInt(document.getElementById("totalcostitem3").innerHTML)+parseInt(document.getElementById("totalcostitem4").innerHTML);
   var totalafterdisc=total-parseInt(total)*0.15; 
   var retVal = confirm("Total Cost is "+totalafterdisc.toString()+" After discount. Procedd to Payment?");
   if( retVal == true ) {
    alert("Thank you ")
      
   } else {
        alert("Application Cancelled ")      
   }
   document.getElementById("totalcostafterdiscount").innerHTML = totalafterdisc.toString();
   

}
function validate(){
    var name=document.getElementById("name1").value;
    var phone=document.getElementById("phone").value
    var msg=document.getElementById("msg").value    
    if(name==""){
        alert("Enter name");
    }
    else if(phone==""){
        alert("Enter Phone number");
    }
    else if(msg==""){
        alert("Enter mesaage");
    }
    else{
        alert("Thank you for contacting US");
    }
}