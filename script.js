function display(val){
    document.getElementById('inputBox').value+=val;
}
function calculate(){
    let cal=document.getElementById('inputBox').value;
    let result=eval(cal);
    document.getElementById('inputBox').value=result;
}
function clears(){
    document.getElementById('inputBox').value="";
}
function dele(){
    let val1=document.getElementById('inputBox').value;
    val1=val1.substring(0,val1.length-1);
    document.getElementById('inputBox').value=val1;
}
    
