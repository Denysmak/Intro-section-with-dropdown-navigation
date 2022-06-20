let featuresArrow = document.getElementById("features-arrow");
let companyArrow = document.getElementById("company-arrow");
let featuresHover = document.querySelector(".features-hover");
let features = document.querySelector(".features")
let companyHover = document.querySelector(".company-hover")
let companyText = document.querySelector(".companyText")
let menu = document.querySelector(".menu");
let leftRight = document.querySelector(".left-right");


features.addEventListener("mouseover",function(){
    featuresArrow.src = "./images/icon-arrow-up.svg"
    featuresHover.style.display = "flex"
})
features.addEventListener("mouseout", function () {
    featuresArrow.src = "./images/icon-arrow-down.svg"
    featuresHover.style.display = "none"
})

companyText.addEventListener("mouseover", function () {
    companyArrow.src = "./images/icon-arrow-up.svg"
    companyHover.style.display = "flex"
})
companyText.addEventListener("mouseout", function () {
    companyArrow.src = "./images/icon-arrow-down.svg"
    companyHover.style.display = "none"
})

menu.addEventListener("click", function(){

leftRight.style.display = "flex"
 leftRight.style.flexDirection = "column"
 leftRight.style.position = "absolute"   
 leftRight.style.height = "100vh"
//  leftRight.style.border = "1px solid black"
 leftRight.style.backgroundColor = "white"
})




