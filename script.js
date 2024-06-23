let input=document.getElementById("display")
function AppendToDisplay(e){
    if(input.value=="Error"){ClearDisplay()}
    else{input.value+=e}
}
function ClearDisplay(){
    input.value=""
}
function Back(){
    if(input.value=="Error"){ClearDisplay()}
    else{input.value=input.value.slice(0,-1)}
    
}
function Calculate(){
    try{
        input.value=eval(input.value)
    }
    catch{
        input.value="Error"
    }
}

l=["1","2","3","4","5","6","7","8","9","0","*","-",".","/","+","(",")"]
window.addEventListener("keyup",(e)=>{
    console.log(e.key)
    if(l.includes(e.key)==true){
        AppendToDisplay(e.key)
    }
    if(e.key=="=" || e.key=="Enter" ){ Calculate()}
    if(e.key=="Backspace"){Back()}
})