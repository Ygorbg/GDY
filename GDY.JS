var button=document.getElementById("button")
var menu=document.getElementById("menu")

button.addEventListener("click", function() {
    if(menu.style.display==="block"){
        menu.style.display="none"
    }else{
        menu.style.display="block"
    }
})