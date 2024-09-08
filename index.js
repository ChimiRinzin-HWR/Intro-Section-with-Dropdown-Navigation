const features = document.querySelector(".featuresbutton");
const company = document.querySelector(".companybutton");

const featuresoptions = document.querySelector(".featuresoptions");
const companyoptions = document.querySelector(".companyoptions");

const featuresup = document.querySelector(".featuresu");
const companyup = document.querySelector(".companyu");

const featuresdown = document.querySelector(".featuresd");
const companydown = document.querySelector(".companyd");

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navigation = document.querySelector(".navigation");

features.addEventListener("click", function(){
    if(featuresdown.style.display != "none"){
        featuresdown.style.display = "none";
        featuresup.style.display = "block";
        featuresoptions.classList.add("clicked");
    }
    else{
        featuresdown.style.display = "block";
        featuresup.style.display = "none";
        featuresoptions.classList.remove("clicked");
    }
})
company.addEventListener("click", function(){
    if(companydown.style.display != "none"){
        companydown.style.display = "none";
        companyup.style.display = "block";
        companyoptions.classList.add("clicked");
    }
    else{
        companydown.style.display = "block";
        companyup.style.display = "none";
        companyoptions.classList.remove("clicked");
    }
})

menu.addEventListener("click", function(){
    menu.style.display = "none";
    close.style.display = "block";
    navigation.classList.add("navclicked");
})
close.addEventListener("click", function(){
    close.style.display = "none";
    menu.style.display = "block";
    navigation.classList.remove("navclicked");
})
