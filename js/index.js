let share = document.getElementsByClassName("footer_2")[0]
console.log(share)

document.addEventListener("click",(e)=>{
    if(e.target.matches(".share")){
        console.log("este click solo debe ver aqui")
        share.style.display = "flex";
    }
})